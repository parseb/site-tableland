import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { connect } from '@textile/tableland';


export const state = function () {
  return {
    ethAddress: '' as string,
    playgroundResponse: {} as any,
    tablesTable: [] as any,
    tablesTableId: '' as string,
    allTables: [] as any[],
    allTableIds: [] as string[],
    currentTableId: '' as string,
    currentTableName: '' as string
  };
};

export type RootState = ReturnType<typeof state>

interface KeyVal {
  key: string;
  value: any;
};

export const mutations: MutationTree<RootState> = {
  set: function (state: any, data: KeyVal) {
    state[data.key] = data.value;
  }
};

declare global {
    interface Window { tableland: any; }
}

window.tableland = 'First connect with metamask, then start building web3 with SQL!';
// store the tableland connection as a private plain Object
const getConnection = function () {
  let connection: any;
  return async function (options?: any) {
    if (options?.disconnect) {
      connection = void 0;
      delete window.tableland;
      return;
    }
    if (connection) return connection;

    console.log(`connecting to validator at: ${process.env.validatorHost}`);
    connection = await connect({
      host: process.env.validatorHost as string,
      network: process.env.validatorNet as string
    });

    window.tableland = connection;

    return connection;
  };
}();

export const actions: ActionTree<RootState, RootState> = {
  connect: async function (context) {
    // connect to tableland
    const tableland = await getConnection();

    const ethAddress = await tableland.signer.getAddress();
    // save the user's eth account address
    context.commit('set', {key: 'ethAddress', value: ethAddress});
  },
  disconnect: async function (context) {
    await getConnection({disconnect: true});
  },
  runSql: async function (context, query) {
    const tableland = await getConnection();
    return await tableland.query(query);
  },
  createTable: async function (context, createStatement) {
    const tableland = await getConnection();
    return await tableland.create(createStatement);
  },
  myTables: async function (context) {
    const tableland = await getConnection();
    return await tableland.list();
  }
};

// RPC responds with rows and columns in separate arrays, this will combine to an array of objects
const parseRpcResponse = function (data: {rows: any[], columns: {name: string}[]}) {
  return data.rows.map((rowArr) => {
    const row = {} as {[key: string]: any};
    for (let i = 0; i < data.columns.length; i++) {
      const key = data.columns[i].name;
      row[key] = rowArr[i];
    }

    return row;
  });
};


const sql = {};

const wait = function (ms: number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(void 0), ms);
  });
};
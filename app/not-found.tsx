import Image from "next/image"
import Showcase from "./components/Showcase"
import getRigs from "@/lib/rigs"

// Note: Links from the not-found page do not currently work.
// See https://github.com/vercel/next.js/issues/48367.

// Note: Metadata doesn not currently work with a not-found page.
// See: https://github.com/vercel/next.js/issues/45620

export default function NotFound() {
  const rig = getRigs(1)

  return (
    <main>
      <section className="w-full bg-lightpurple">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center">
            <h1 className="font-title">404: You&apos;re lost</h1>
            <p className="lead">
              But you found a Rig!
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={rig[0]}
                alt={"Rig"}
                priority={true}
                fill
                className="animate-blur rounded"
              />
            </div>
          </article>
        </div>
      </section>
      <Showcase href="/" classes="bg-green border-lightgreen">
        Go Home
      </Showcase>
    </main>
  )
}

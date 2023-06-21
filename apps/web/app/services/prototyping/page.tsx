import Image from 'next/image'
import { Container } from '@/components/Container'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  return (
    <Container>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                sizes="(max-width: 640px) 100vw, 640px"
                fill
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="/images/image_(1).png"
                alt=""
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-2xl font-semibold leading-7 text-sky-500">
                Our services
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-gray-700 sm:text-4xl">
                Prototyping & Services
              </h1>
              <div className="mt-6 max-w-xl text-base font-light leading-7 text-gray-700 lg:max-w-none">
                <p>
                  {`Prototyping can be both the most exciting and nerve racking step in the design process.
                  It is in this stage that your ideas finally move out of the conceptual realm and come to life.
                  Here at Bare Boulder we have a team of professionals to ensure you get exactly what you need.`}
                </p>
                <p className="mt-6">
                  {`If you are thinking about prototyping your concept, it is likely that you are at the stage in the design
                  process where you already have an idea for what You would like to make or accomplish.
                  This could be a fully rendered CAD design or a simple pencil sketch. Either way we can help get you started.`}
                </p>
                <p className="mt-6">
                  {` Bring or send in your design. A basic idea of the dimensions, materials,
                  hardware and functional requirements are helpful to get started`}
                </p>
                <p className="mt-6">
                  {` After refining some of those specifications we can assess the cost and give you a quote for the prototype.
                  We will then schedule a time to discuss the design, in person, on the phone or over a video conference.
                  Afterwards, we will send you an invoice with a breakdown of the pricing and a contract.
                  You may provide a Non-Disclosure Agreement (NDA) or we can provide a general one to ensure your designs stay proprietary.`}
                </p>
                <p className="mt-6">
                  {`We are officially in business! At Bare Boulder we want to keep our clients up to date and involved in the design process
                  to allow for changes or modifications as necessary. Even after the prototype is complete it is possible to
                  make modifications but the earlier we can lock down the design the better. For this reason we will send you design and
                  photo updates for approval at each maior stage of production. This helps ensure you get exactly what you need and
                  provides the most time and cost effective procedure.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

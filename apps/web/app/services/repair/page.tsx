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
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="/images/pexels-lumn-167703.jpeg"
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
                Repair & Restoration
              </h1>
              <div className="mt-6 max-w-xl text-base font-light leading-7 text-gray-700 lg:max-w-none">
                <p>{`Professional Repair and Restoration Services`}</p>
                <p className="mt-6">
                  {`Bare Boulder Design & Repair is proud to offer a variety of sewing repairs ranging from
                    simple stitching and hardware replacement to zipper repairs, in-depth gear overhaul,
                    and alterations. We are not your average sewing repair shop- our focus is on prolonging
                    the useful life of high quality, high-end outdoor gear that needs to stand up to the elements.`}
                </p>
                <p className="mt-6">
                  {`We can fix many sewn Soft Goods, Luggage's, Leather products such as outerwear, tents,
                    sleeping bags, packs, technical gear, camping gear, hunting gear, ski gear, footwear,
                    Sport Bags, Leather Bags, Purses and more... Our skilled technicians and design experts
                    focus on making repairs that are functional and durable, and we always aim to_make your
                    repaired item look great. We stand behind our repair with full six-month warranty with every
                    repair at Bare Boulder Design & Repair!`}
                </p>
                <p className="mt-6">{`Modification Services`}</p>
                <p className="mt-6">
                  {`Bare Boulders offers a range of Modification Services for Outdoor Technical Gear and Soft Goods. Either it may be customizing an existing product to fit your personal aesthetics or create a cohesive product supply for your business, adding pockets and zippers, customizing design and fabrics modifications, personalizing bags, -backpacks and much more!
                    To obtain a quote or to get more information about the
                    services we offer, please contact us`}
                </p>
                <p className="mt-6 text-center">
                  {`Are you ready to send us your gear for repair?`}
                </p>
                <p className="text-center">
                  {`PLEASE FILL out the Repair Form to get started.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

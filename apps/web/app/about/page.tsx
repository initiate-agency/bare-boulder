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
                src="/images/pexels-cats-coming-1204464.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-2xl font-semibold leading-7 text-sky-500">
                About Us
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-gray-700 sm:text-4xl">
                Bare Boulder Design
              </h1>
              <div className="mt-6 max-w-xl text-base font-light leading-7 text-gray-700 lg:max-w-none">
                <p className="mt-6">
                  {`Bare Boulder Design & Repair was established in Colorado by a team of skilled designers,
                  sewing technicians and creative entrepreneurs who specialize in high quality custom prototype designs,
                  production, and repair of soft goods, outdoor gear, sporting goods, bag products, and much more.
                  Our state-of-the-art design and sewing studio can bring your ideas to life.`}
                </p>
                <p>
                  {`Whether you start with a concept, sketch, or a sophisticated computer design,
                  Bare Boulder can help turn your ideas into a reality.`}
                </p>
                <p>{`Serving our customers all over the USA and Canada`}</p>
                <p>{`Outdoor Gear Repair in Colorado`}</p>
                <p className="mt-8">
                  {`Located in the foothills of Colorado, one of the top-ranked spots for outdoor sports in the country,
                  Bare Boulder is THE go-to place for outdoor gear repair. We know outdoor gear, inside and out, because we design it ourselves.
                  We specialize in high-quality, professional repair and restoration for all types of outdoor gear: backpacks, sports bags,
                  tents, camping equipment, down jackets, down sleeping bags, and ski equipment.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

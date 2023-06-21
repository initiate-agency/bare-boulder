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
                src="/images/pexels-wallace-chuck-2973392.jpeg"
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
                Sewing Production
              </h1>
              <div className="mt-6 max-w-xl text-base font-light leading-7 text-gray-700 lg:max-w-none">
                <p className="mt-6">
                  {`Bare Boulder offers High Quality product production and manufacturing for our clients.
                  We strive to provide high quality services that are both professional and timely.`}
                </p>
                <p className="mt-6">
                  {`More examples of our work can be found in our portfolio`}
                </p>
                <p className="mt-6">
                  {`To obtain a quote or to get more information about the services we offer, please contact us`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

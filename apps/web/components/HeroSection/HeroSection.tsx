'use client'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className="mt-6">
      <div className="relative overflow-hidden">
        {/* Top navigation */}

        {/* Hero section */}
        <div className="pb-784 pt-16 sm:pt-24 md:pb-80 lg:pt-72">
          <div className="relative mx-auto max-w-7xl px-3 sm:static xl:px-0">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
                {`Bare Boulder Design and Repair`}
              </h1>
              <p className="mt-4 text-lg font-light text-gray-700">
                {`Design, Development, Prototyping, Manufacturing and Repair of technical gear, bags, leather goods, camping gear, sports gear & more`}
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl sm:opacity-0 lg:opacity-100">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/home-1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/pexels-wallace-chuck-2973392.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/pexels-pixabay-259756.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/pexels-lalu-fatoni-732632.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/pexels-lumn-167703.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/pexels-robert-bogdan-910122.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="relative h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                          <Image
                            fill
                            sizes="(max-width: 640px) 100vw, 340px"
                            src="/images/pexels-tembela-bohle-1102874.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

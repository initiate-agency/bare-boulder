const CATEGORY_URL = {
  BASE: '/services',
  PROTOTYPING: '/services/prototyping',
  REPAIR: '/services/repair',
  SEWING: '/services/sewing'
}
export type CategoryProps = {
  isCategoryPage?: boolean
  imageUrls?: string[]
}

export const Category = ({
  isCategoryPage = false,
  imageUrls = []
}: CategoryProps) => {
  return (
    <div aria-labelledby="category-heading">
      <div className={'mx-auto max-w-7xl px-3 py-12 xl:px-0'}>
        {!isCategoryPage ? (
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-700"
            >
              Our Services
            </h2>
            <a
              href={CATEGORY_URL.BASE}
              className="hidden text-2xl font-normal sm:block"
            >
              Learn more
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        ) : (
          <div className="pb-6 lg:pb-12 lg:pt-6">
            <h2
              id="category-heading"
              className="text-center text-4xl font-semibold text-gray-700 lg:text-5xl"
            >
              Our Services
            </h2>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="aspect-h-1 aspect-w-2 sm:aspect-h-1 sm:aspect-w-1 group overflow-hidden rounded-lg sm:row-span-2">
            <img
              src={imageUrls?.[0]}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href={CATEGORY_URL.PROTOTYPING}>
                    <span className="absolute inset-0" />
                    Prototyping & Design
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="aspect-h-1 aspect-w-2 sm:aspect-none group overflow-hidden rounded-lg sm:relative sm:h-full">
            <img
              src={imageUrls?.[1]}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href={CATEGORY_URL.REPAIR}>
                    <span className="absolute inset-0" />
                    Repair & Restoration
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="aspect-h-1 aspect-w-2 sm:aspect-none group overflow-hidden rounded-lg sm:relative sm:h-full">
            <img
              src={imageUrls?.[2]}
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href={CATEGORY_URL.SEWING}>
                    <span className="absolute inset-0" />
                    Sewing Production
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {!isCategoryPage && (
          <div className="mt-6 sm:hidden">
            <a href={CATEGORY_URL.BASE} className="text-md block font-normal">
              Learn more
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

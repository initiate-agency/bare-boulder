'use client'
import { useState, useCallback } from 'react'
export type ImageGridProps = {
  isPorfoPage?: boolean
}

export const ImageGrid = ({ isPorfoPage }: ImageGridProps) => {
  const [selectedImg, setSelectedImg] = useState('')

  const onClickImg = useCallback(
    (imgUrl: string) => {
      if (isPorfoPage) setSelectedImg(imgUrl)
    },
    [isPorfoPage]
  )

  return (
    <div className={`${isPorfoPage ? 'pb-6 lg:pb-12 lg:pt-6' : ''}`}>
      <div className="p-3 pt-12 md:px-0 lg:pb-12">
        <h2
          id="cause-heading"
          className="text-center text-3xl font-semibold text-gray-700 sm:text-5xl"
        >
          {`Portfolio`}
        </h2>
        <p
          className={`${
            isPorfoPage && 'pb-12 lg:px-72 lg:pb-0'
          } mt-4 text-center text-lg font-light text-gray-700`}
        >
          {isPorfoPage
            ? `We offer high quality designs, prototypes, production, repair and restoration of Outdoor Gear,
              Technical Gear, Sport bags, Handbags, Purses, Leather Bags, Soft Goods,
              Leather Goods and more to our clients all over the USA and Canada.`
            : `Some examples of the work we've done`}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-3 md:grid-cols-4 xl:px-0">
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-tembela-bohle-1102874.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-tembela-bohle-1102874.jpeg')
              }
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-robert-bogdan-910122.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-robert-bogdan-910122.jpeg')
              }
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-vinta-supply-co-_-nyc-842958.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-vinta-supply-co-_-nyc-842958.jpeg')
              }
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-oziel-gómez-868097.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-oziel-gómez-868097.jpeg')
              }
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-lalu-fatoni-732632.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-lalu-fatoni-732632.jpeg')
              }
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-анастасия-8365688.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-анастасия-8365688.jpeg')
              }
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-lumn-167703.jpeg"
              alt=""
              onClick={() => onClickImg('/images/pexels-lumn-167703.jpeg')}
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-pixabay-259756.jpeg"
              alt=""
              onClick={() => onClickImg('/images/pexels-pixabay-259756.jpeg')}
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-skylar-kang-6044266.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-skylar-kang-6044266.jpeg')
              }
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-wallace-chuck-2973392.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-wallace-chuck-2973392.jpeg')
              }
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-vinta-supply-co-_-nyc-843194.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-vinta-supply-co-_-nyc-843194.jpeg')
              }
            />
          </div>
          <div>
            <img
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src="/images/pexels-godisable-jacob-978665.jpeg"
              alt=""
              onClick={() =>
                onClickImg('/images/pexels-godisable-jacob-978665.jpeg')
              }
            />
          </div>
        </div>
      </div>
      {selectedImg && (
        <div
          id="modal"
          className="z-80 fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70"
        >
          <a
            className="z-90 fixed right-8 top-6 cursor-pointer text-5xl font-bold text-white lg:top-20"
            onClick={() => onClickImg('')}
          >
            &times;
          </a>

          <img
            src={selectedImg}
            alt="selected-img"
            className="max-h-[600px] max-w-[800px] object-cover"
          />
        </div>
      )}
    </div>
  )
}

'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState, useCallback, useMemo } from 'react'
export type ImageGridProps = {
  isPorfoPage?: boolean
  imgList: string[]
}

export const ImageGrid = ({ isPorfoPage, imgList }: ImageGridProps) => {
  const router = useRouter()

  const [selectedImg, setSelectedImg] = useState(-1)

  const isTheFirstImg = useMemo(() => selectedImg === 0, [selectedImg])
  const isTheLastImg = useMemo(
    () => selectedImg === imgList.length - 1,
    [selectedImg, imgList]
  )

  const onClickImg = useCallback(
    (urlIndex: number) => {
      if (isPorfoPage) {
        setSelectedImg(urlIndex)
        return
      }
      router.push('/portfolio')
    },
    [isPorfoPage, router]
  )

  const onClickClose = useCallback(() => {
    setSelectedImg(-1)
  }, [])

  const onClickNext = useCallback(
    (e: any) => {
      e.stopPropagation()
      setSelectedImg(selectedImg + 1)
    },
    [selectedImg]
  )

  const onClickPrevious = useCallback(
    (e: any) => {
      e.stopPropagation()
      setSelectedImg(selectedImg - 1)
    },
    [selectedImg]
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
        <div className="relative grid gap-4">
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[0]}
              alt=""
              onClick={() => onClickImg(0)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[1]}
              alt=""
              onClick={() => onClickImg(1)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[2]}
              alt=""
              onClick={() => onClickImg(2)}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[3]}
              alt=""
              onClick={() => onClickImg(3)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[4]}
              alt=""
              onClick={() => onClickImg(4)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[5]}
              alt=""
              onClick={() => onClickImg(5)}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[6]}
              alt=""
              onClick={() => onClickImg(6)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[7]}
              alt=""
              onClick={() => onClickImg(7)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[8]}
              alt=""
              onClick={() => onClickImg(8)}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[9]}
              alt=""
              onClick={() => onClickImg(9)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[10]}
              alt=""
              onClick={() => onClickImg(10)}
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={1000}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-full max-w-full cursor-pointer rounded-lg object-cover"
              src={imgList[11]}
              alt=""
              onClick={() => onClickImg(11)}
            />
          </div>
        </div>
      </div>
      {selectedImg >= 0 && (
        <div
          id="modal"
          onClick={onClickClose}
          className="z-80 fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70"
        >
          <a
            className="z-90 fixed right-8 top-6 cursor-pointer text-5xl font-bold text-white lg:top-20"
            onClick={onClickClose}
          >
            &times;
          </a>
          {!isTheFirstImg && (
            <a
              className="z-90 fixed left-8 top-20 cursor-pointer text-5xl font-bold text-white lg:top-96"
              onClick={onClickPrevious}
            >
              &lt;
            </a>
          )}
          {!isTheLastImg && (
            <a
              className="z-90 fixed right-8 top-20 cursor-pointer text-5xl font-bold text-white lg:top-96"
              onClick={onClickNext}
            >
              &gt;
            </a>
          )}
          <div className="relative max-h-[600px] max-w-[800px] object-cover">
            <Image
              width={800}
              height={600}
              src={imgList[selectedImg]}
              alt="selected-img"
              className="max-h-[600px] max-w-[800px] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

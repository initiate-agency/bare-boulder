'use client'

import { chunkArray } from '@/utilities/chunkArray'
import { Project, Media } from 'types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState, useCallback, useMemo } from 'react'

export type ImageGridProps = {
  projects: Project[]
  isPorfoPage?: boolean
}

export const ImageGrid = ({ projects, isPorfoPage }: ImageGridProps) => {
  const router = useRouter()

  const [selectedImg, setSelectedImg] = useState(-1)
  const [description, setDescription] = useState<string | undefined>('')

  const isTheFirstImg = useMemo(() => selectedImg === 0, [selectedImg])
  const isTheLastImg = useMemo(
    () => selectedImg === projects.length - 1,
    [selectedImg, projects]
  )

  const onClickImg = useCallback(
    (id: string) => {
      if (isPorfoPage) {
        setSelectedImg(projects.findIndex((project) => project.id === id))
        setDescription(
          projects.find((project) => project.id === id)?.description || ''
        )

        return
      }

      router.push('/portfolio')
    },
    [isPorfoPage, router, projects]
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

  const renderPortfolioGallery = () => {
    const chunked = chunkArray(projects, 3)

    return chunked.map((projects, index) => {
      return (
        <div key={'projects' + index} className="relative grid gap-4">
          {projects.map((project, _index) => {
            return (
              <div key={'project' + _index}>
                <Image
                  width={400}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="h-full max-w-full cursor-pointer rounded-lg object-cover"
                  src={project.image.url}
                  alt=""
                  onClick={() => onClickImg(project.id)}
                />
              </div>
            )
          })}
        </div>
      )
    })
  }

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
        {renderPortfolioGallery()}
      </div>
      {selectedImg >= 0 && (
        <div
          id="modal"
          onClick={onClickClose}
          className="z-80 fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70"
        >
          <a
            className="z-90 fixed right-8 top-6 z-10 cursor-pointer text-5xl font-bold text-white shadow-md lg:top-20"
            onClick={onClickClose}
          >
            &times;
          </a>
          {!isTheFirstImg && (
            <a
              className="z-90 fixed left-8 top-[50%] z-10 cursor-pointer text-5xl font-bold text-white shadow-md lg:top-96"
              onClick={onClickPrevious}
            >
              &lt;
            </a>
          )}
          {!isTheLastImg && (
            <a
              className="fixed right-8 top-[50%] z-10 cursor-pointer text-5xl font-bold text-white shadow-md lg:top-96"
              onClick={onClickNext}
            >
              &gt;
            </a>
          )}
          <div className="relative max-h-[600px] max-w-[800px] object-cover">
            <Image
              width={800}
              height={600}
              src={(projects[selectedImg].image as Media).url || ''}
              alt="selected-img"
              className="max-h-[500px] max-w-[800px] object-contain "
            />
            {description && (
              <div className="p-4 text-center text-white">{description}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

import { ImageGridSection } from '@/blocks/ImageGridSection'
import { Container } from '@/components/Container'

const imgList = [
  '/images/pexels-tembela-bohle-1102874.jpeg',
  '/images/pexels-robert-bogdan-910122.jpeg',
  '/images/pexels-vinta-supply-co-_-nyc-842958.jpeg',
  '/images/pexels-oziel-gómez-868097.jpeg',
  '/images/pexels-lalu-fatoni-732632.jpeg',
  '/images/pexels-анастасия-8365688.jpeg',
  '/images/pexels-lumn-167703.jpeg',
  '/images/pexels-pixabay-259756.jpeg',
  '/images/pexels-skylar-kang-6044266.jpeg',
  '/images/pexels-wallace-chuck-2973392.jpeg',
  '/images/pexels-vinta-supply-co-_-nyc-843194.jpeg',
  '/images/pexels-godisable-jacob-978665.jpeg'
]

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  return (
    <Container fullWidth horizontalPadding={false}>
      <ImageGridSection
        horizontalPadding={false}
        isPorfoPage
        imgList={imgList}
      ></ImageGridSection>
    </Container>
  )
}

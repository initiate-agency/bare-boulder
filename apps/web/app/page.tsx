import { Container } from '@/components/Container'
import { HeroSection } from '@/blocks/HeroSection'
import { ClientSection } from '@/blocks/ClientSection'
import { AboutUsSection } from '@/blocks/AboutUsSection'
import { CategorySection } from '@/blocks/CategorySection'
import { ImageGridSection } from '@/blocks/ImageGridSection'
import { FaqsSection } from '@/blocks/FaqsSection'
import { ContactSection } from '@/blocks/ContactSection'

const categoryUrls = [
  '/images/pexels-tembela-bohle-1102874.jpeg',
  '/images/pexels-lumn-167703.jpeg',
  '/images/pexels-wallace-chuck-2973392.jpeg'
]

const imgList = [
  '/images/pexels-tembela-bohle-1102874.jpeg',
  '/images/pexels-robert-bogdan-910122.jpeg',
  '/images/pexels-vinta-supply-co-_-nyc-842958.jpeg',
  '/images/home-1.jpg',
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
    <>
      <Container fullWidth horizontalPadding={false}>
        <HeroSection horizontalPadding={false}></HeroSection>
        <ClientSection horizontalPadding={false}></ClientSection>
        <AboutUsSection fullWidth horizontalPadding={false}></AboutUsSection>
      </Container>
      <Container
        fullWidth
        className="pt-16 sm:pt-8 lg:pt-20"
        horizontalPadding={false}
        bgColor="bg-slate-50"
      >
        <CategorySection
          horizontalPadding={false}
          bgColor="bg-slate-50"
          imageUrls={categoryUrls}
        ></CategorySection>
        <ImageGridSection
          horizontalPadding={false}
          bgColor="bg-slate-50"
          imgList={imgList}
        ></ImageGridSection>
        <FaqsSection horizontalPadding={false}></FaqsSection>
        <ContactSection horizontalPadding={false}></ContactSection>
      </Container>
    </>
  )
}

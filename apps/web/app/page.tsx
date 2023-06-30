import { notFound } from 'next/navigation'

import { getProjects } from './queries'
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

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  const [projectsData] = await Promise.all([getProjects()])

  if (!projectsData) {
    notFound()
  }

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
        />
        <ImageGridSection
          projects={projectsData}
          horizontalPadding={false}
          bgColor="bg-slate-50"
        />
        <FaqsSection horizontalPadding={false} />
        <ContactSection horizontalPadding={false} />
      </Container>
    </>
  )
}

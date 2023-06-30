import { notFound } from 'next/navigation'

import { getProjects } from './queries'
import { ImageGridSection } from '@/blocks/ImageGridSection'
import { Container } from '@/components/Container'

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
    <Container fullWidth horizontalPadding={false}>
      <ImageGridSection
        projects={projectsData}
        horizontalPadding={false}
        isPorfoPage
      />
    </Container>
  )
}

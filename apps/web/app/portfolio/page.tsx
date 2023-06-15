import { ImageGridSection } from '@/blocks/ImageGridSection'
import { Container } from '@/components/Container'

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
      ></ImageGridSection>
    </Container>
  )
}

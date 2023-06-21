import { CategorySection } from '@/blocks/CategorySection'
import { Container } from '@/components/Container'

const categoryUrls = [
  '/images/image_(1).png',
  '/images/pexels-lumn-167703.jpeg',
  '/images/pexels-wallace-chuck-2973392.jpeg'
]

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  return (
    <Container fullWidth horizontalPadding={false}>
      <CategorySection
        horizontalPadding={false}
        isCategoryPage
        imageUrls={categoryUrls}
      ></CategorySection>
    </Container>
  )
}

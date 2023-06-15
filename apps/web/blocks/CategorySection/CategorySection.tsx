'use client'
import { Container } from '@/components/Container'
import {
  Category as CategoryComponent,
  CategoryProps
} from '@/components/Category'

export type CategorySectionProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
  bgColor?: string
}

export const CategorySection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth,
  bgColor,
  ...rest
}: CategorySectionProps & CategoryProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
      bgColor={bgColor}
    >
      <CategoryComponent {...rest} />
    </Container>
  )
}

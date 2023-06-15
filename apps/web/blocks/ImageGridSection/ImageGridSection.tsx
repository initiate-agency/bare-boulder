'use client'
import { Container } from '@/components/Container'
import {
  ImageGrid as ImageGridComponent,
  ImageGridProps
} from '@/components/ImageGrid'

export type ImageGridSectionProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
  bgColor?: string
}

export const ImageGridSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth,
  bgColor,
  ...rest
}: ImageGridSectionProps & ImageGridProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
      bgColor={bgColor}
    >
      <ImageGridComponent {...rest} />
    </Container>
  )
}

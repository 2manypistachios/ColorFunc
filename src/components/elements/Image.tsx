import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { chakra, ThemingProps } from '@chakra-ui/react'

type ImageProps = Pick<
  NextImageProps,
  | 'className'
  | 'loading'
  | 'objectFit'
  | 'objectPosition'
  | 'priority'
  | 'quality'
  | 'src'
  | 'width'
  | 'height'
  | 'alt'
  | 'unoptimized'
> &
  Pick<Required<NextImageProps>, 'alt'> &
  Pick<ThemingProps, 'variant'> & {
    dimensions?: [number, number]
    // layout?: 'fill' | LayoutValue
    // sizes?: Sizes // could be a string too, this one is just a way to make it easier
  }

const Img = chakra(NextImage, {
  shouldForwardProp: (prop) => {
    return [
      'width',
      'height',
      'layout',
      'src',
      'alt'
    ].includes(prop)
  },
})

const Image = (props: ImageProps) => {
  return <Img {...props} />
}

export default Image;
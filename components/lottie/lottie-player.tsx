import { Box, BoxProps } from '@chakra-ui/react'
import Lottie from 'lottie-react'

interface LottiePlayerProps extends BoxProps {
  animationData: any
  loop?: boolean
  autoplay?: boolean
}

export const LottiePlayer = ({
  animationData,
  loop = true,
  autoplay = true,
  ...boxProps
}: LottiePlayerProps) => {
  return (
    <Box {...boxProps}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </Box>
  )
}

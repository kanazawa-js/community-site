import Link from 'next/link'
import { Flex, Box, Link as CLink, Spacer } from '@chakra-ui/react'

export const Navigation = () => (
  <Flex>
    <Box d='flex' p={4}>
      <Box>
        <Link href='/about'>
          <CLink>コミュニティ概要</CLink>
        </Link>
      </Box>
      <Box ml={4}>
        <Link href='/code-of-conduct'>
          <CLink>行動規範</CLink>
        </Link>
      </Box>
      <Box ml={4}>
        <Link href='/blog'>
          <CLink>イベントレポート</CLink>
        </Link>
      </Box>
    </Box>
    <Spacer />
    <Box d='flex' p={4}>
      <Box>
        <CLink>Twitter</CLink>
      </Box>
      <Box ml={4}>
        <CLink>GitHub</CLink>
      </Box>
      <Box ml={4}>
        <CLink>Connpass</CLink>
      </Box>
    </Box>
  </Flex>
)

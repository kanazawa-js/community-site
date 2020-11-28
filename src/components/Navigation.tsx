import { Flex, Box, Link, Spacer } from '@chakra-ui/react'

export const Navigation = () => (
  <Flex>
    <Box d='flex' p={4}>
      <Box>
        <Link>コミュニティ概要</Link>
      </Box>
      <Box ml={4}>
        <Link>行動規範</Link>
      </Box>
      <Box ml={4}>
        <Link>イベントレポート</Link>
      </Box>
    </Box>
    <Spacer />
    <Box d='flex' p={4}>
      <Box>
        <Link>Twitter</Link>
      </Box>
      <Box ml={4}>
        <Link>GitHub</Link>
      </Box>
      <Box ml={4}>
        <Link>Connpass</Link>
      </Box>
    </Box>
  </Flex>
)

import { Box, Heading, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export const Header = () => (
  <Flex pt={28} pb={28} justifyContent='center'>
    <Box mr={8}>
      <Image src='/logo.png' width={200} height={200} />
    </Box>
    <Box>
      <Heading as='h1' size='2xl' mb={4} >
        Kanazawa.js
      </Heading>
      <Heading as='h2' size='md'>
      石川県金沢市のJavaScriptコミュニティ<br />
      最新情報はTwitterで発信中！
      </Heading>
    </Box>
  </Flex>
)
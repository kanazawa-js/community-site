import { Container, ContainerProps } from '@chakra-ui/react'

export type LayoutProps = ContainerProps

export const Layout = (props: ContainerProps) => (
  <Container maxW="lg" {...props} />
)
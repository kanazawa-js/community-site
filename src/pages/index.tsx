import { Divider, Text } from '@chakra-ui/react'
import { Navigation } from '../components/Navigation'
import { Header } from '../components/Header'
import { EventSchedule } from '../components/EventSchedule'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'

const Index = () => (
  <Layout>
    <Navigation />
    <Divider />
    <Header />
    <Divider mb={8} />
    <EventSchedule />
    <Divider mt={8} mb={8} />
    <Footer>
      <Text>&copy; 2020 Kanazawa.js</Text>
    </Footer>
  </Layout>
)

export default Index
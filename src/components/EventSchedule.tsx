import { Heading, List, ListItem, ListIcon, Stack, Link } from '@chakra-ui/react'
import { CalendarIcon, InfoIcon } from '@chakra-ui/icons'

export const EventSchedule = () => (
  <Stack>
    <Heading as='h3' size='lg' mb={4}>
      イベント情報
    </Heading>
    <List spacing={2}>
      <ListItem fontSize='xl'>
        <Link>Kanazawa.js Meetup #08</Link>
      </ListItem>
      <ListItem>
        <ListIcon as={CalendarIcon} />
        2020/11/28 (土) 13:00~17:00
      </ListItem>
      <ListItem>
      <ListIcon as={InfoIcon} />
        オフライン
      </ListItem>
    </List>
  </Stack>
)
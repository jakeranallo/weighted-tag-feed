import * as React from 'react'
import Chance from 'chance'
import FacebookLogin from 'react-facebook-login'
import { Box, Button, Flex, Heading, Text } from '../src/components'
import { staggerList, staggerItem } from '../src/animation'

type Article = {
  id: number
  title: string
  content: React.ReactNode | string
  tag: Tag
}

type Tag = {
  id?: number
  name: string
  weight?: number
}

interface IItem {
  data: Article
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Cats',
    content: 'This is article content',
    tag: { name: 'Cats' }
  },
  {
    id: 2,
    title: 'Cats',
    content: 'This is article content',
    tag: { name: 'Cats' }
  },
  {
    id: 3,
    title: 'Cats',
    content: 'This is article content',
    tag: { name: 'Cats' }
  },
  {
    id: 4,
    title: 'Dogs',
    content: 'This is article content',
    tag: { name: 'Dogs' }
  },
  {
    id: 5,
    title: 'Dogs',
    content: 'This is article content',
    tag: { name: 'Dogs' }
  },
  {
    id: 6,
    title: 'Dogs',
    content: 'This is article content',
    tag: { name: 'Dogs' }
  },
  {
    id: 7,
    title: 'Mice',
    content: 'This is article content',
    tag: { name: 'Mice' }
  },
  {
    id: 8,
    title: 'Mice',
    content: 'This is article content',
    tag: { name: 'Mice' }
  },
  {
    id: 9,
    title: 'Mice',
    content: 'This is article content',
    tag: { name: 'Mice' }
  },
  {
    id: 10,
    title: 'Rabbits',
    content: 'This is article content',
    tag: { name: 'Rabbits' }
  },
  {
    id: 11,
    title: 'Rabbits',
    content: 'This is article content',
    tag: { name: 'Rabbits' }
  },
  {
    id: 12,
    title: 'Rabbits',
    content: 'This is article content',
    tag: { name: 'Rabbits' }
  },
  {
    id: 13,
    title: 'Horses',
    content: 'This is article content',
    tag: { name: 'Horses' }
  },
  {
    id: 14,
    title: 'Horses',
    content: 'This is article content',
    tag: { name: 'Horses' }
  },
  {
    id: 15,
    title: 'Horses',
    content: 'This is article content',
    tag: { name: 'Horses' }
  }
]

// Setup Apollo to store these in Prisma
const tags: Tag[] = [
  { id: 1, name: 'Cats', weight: 12 },
  { id: 2, name: 'Dogs', weight: 19 },
  { id: 3, name: 'Mice', weight: 22 },
  { id: 4, name: 'Rabbits', weight: 6 },
  { id: 5, name: 'Horses', weight: 4 }
]

// USERID: 17841400487290489

// Sourdough HASHTAGID: 17843824786061363
// modularsynth HASHTAGID: 17842302601069534
// uidesign HASHTAGID: 17844001108050164

// graph.facebook.com/HASHTAGID/recent_media?user_id=USERID
// graph.facebook.com/HASHTAGID/top_media?user_id=USERID

const Item = ({ data }: IItem) => {
  return (
    <Button variants={staggerItem}>
      <Box bg="gray.1" p={4}>
        <Flex flexDirection="column">
          <Heading as="h1">{data.title}</Heading>
          <Heading as="h3">{data.tag.name}</Heading>
          <Text>{data.content}</Text>
        </Flex>
      </Box>
    </Button>
  )
}

const Layout = () => {
  const [itemData, setItemData] = React.useState<Article[]>([])

  const chance = new Chance()
  const names = tags.map(t => t.name)
  const weights = tags.map(t => (t.weight ? t.weight : 0))

  const pushArticles = () => {
    for (let i = 0; i < 3; i++) {
      const fetchTag = chance.weighted(names, weights)
      const fetchArticle = articles.filter(a =>
        a.tag.name.includes(fetchTag)
      )[0]
      setItemData(itemData => [...itemData, fetchArticle])
    }
  }

  const responseFacebook = (response: any) => {
    console.log(response)
  }

  React.useEffect(() => {
    pushArticles()
  }, [])

  return (
    <Flex alignItems="center" flexDirection="column">
      <FacebookLogin
        appId="1147223222332926"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        scope="instagram_basic,pages_show_list"
      />
      <Box width={[1, 2 / 3, 1 / 2]} variants={staggerList}>
        <Flex flexDirection="column">
          {itemData.map((data, i) => (
            <Item key={i} data={data} />
          ))}
        </Flex>
      </Box>
      <Button variant="primary" onClick={pushArticles}>
        Load more...
      </Button>
    </Flex>
  )
}

export default Layout

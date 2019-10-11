import * as React from 'react'
import { Box, Flex, Heading, Text } from '../'
import Chance from 'chance'

type Article = {
  id: number
  title: string
  content: React.ReactNode | string
  tag: string
}

type Tag = {
  id: number
  name: string
  weight: number
}

const articles: Article[] = [
  { id: 1, title: 'Cats', content: 'This is article content', tag: 'Cats' },
  { id: 2, title: 'Cats', content: 'This is article content', tag: 'Cats' },
  { id: 3, title: 'Cats', content: 'This is article content', tag: 'Cats' },
  { id: 4, title: 'Dogs', content: 'This is article content', tag: 'Dogs' },
  { id: 5, title: 'Dogs', content: 'This is article content', tag: 'Dogs' },
  { id: 6, title: 'Dogs', content: 'This is article content', tag: 'Dogs' },
  { id: 7, title: 'Mice', content: 'This is article content', tag: 'Mice' },
  { id: 8, title: 'Mice', content: 'This is article content', tag: 'Mice' },
  { id: 9, title: 'Mice', content: 'This is article content', tag: 'Mice' },
  {
    id: 10,
    title: 'Rabbits',
    content: 'This is article content',
    tag: 'Rabbits'
  },
  {
    id: 11,
    title: 'Rabbits',
    content: 'This is article content',
    tag: 'Rabbits'
  },
  {
    id: 12,
    title: 'Rabbits',
    content: 'This is article content',
    tag: 'Rabbits'
  },
  {
    id: 13,
    title: 'Horses',
    content: 'This is article content',
    tag: 'Horses'
  },
  {
    id: 14,
    title: 'Horses',
    content: 'This is article content',
    tag: 'Horses'
  },
  { id: 15, title: 'Horses', content: 'This is article content', tag: 'Horses' }
]

const tags: Tag[] = [
  { id: 1, name: 'Cats', weight: 0.6 },
  { id: 2, name: 'Dogs', weight: 0.9 },
  { id: 3, name: 'Mice', weight: 0.6 },
  { id: 4, name: 'Rabbits', weight: 0.9 },
  { id: 5, name: 'Horses', weight: 0.9 }
]

const Item = (data: Article) => {
  return (
    <Box>
      <Flex>
        <Heading>{data.title}</Heading>
        <Text>{data.content}</Text>
      </Flex>
    </Box>
  )
}

export const Feed = () => {
  const [itemData, setItemData] = React.useState<Article[]>([])
  const [pushCount, setPushCount] = React.useState(0)

  const fetchTag = () => {
    const chance = new Chance()
    const names = tags.map(t => t.name)
    const weights = tags.map(t => t.weight)
    return chance.weighted(names, weights)
  }

  const fetchArticle = () => {
    const tagFetched = fetchTag()
    const article = Object.keys(articles).find(key =>
      articles[key].tags.includes(tagFetched)
    )
    return article && articles[article]
  }

  const pushArticles = () => {
    const article = fetchArticle()
    pushCount <= 3 &&
      (setItemData(itemData.push(article)), setPushCount(pushCount + 1))
    setPushCount(0)
  }

  React.useEffect(() => pushArticles(), [])

  return itemData.map(data => <Item data={data} />)
}

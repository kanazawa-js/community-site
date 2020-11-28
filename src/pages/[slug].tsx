import { Layout } from '../components/Layout'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
// @ts-ignore
import hydrate from 'next-mdx-remote/hydrate'
// @ts-ignore
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Heading, UnorderedList, ListItem, Text, Link, Divider } from "@chakra-ui/react"

const components = {
  h1: (props: any) => <Heading as='h1' mb={8} {...props} />,
  h2: (props: any) => <Heading as='h2' mb={8} {...props} />,
  h3: (props: any) => <Heading as='h3' mb={8} {...props} />,
  h4: (props: any) => <Heading as='h4' mb={8} {...props} />,
  ul: (props: any) => <UnorderedList mb={8} {...props} />,
  li: (props: any) => <ListItem {...props} />,
  p: (props: any) => <Text mb={8} {...props} />,
  a: (props: any) => <Link {...props} />
}

export default function Page({ source, frontMatter }: any) {
  const content = hydrate(source, { components })

  return (
    <Layout>
      <Navigation />
      <Divider mb={8} />
      <Heading as='h1' mb={8}>{frontMatter.title}</Heading>
      {content}
      <Divider mt={8} />
      <Footer>
        <Text>&copy; 2020 Kanazawa.js</Text>
      </Footer>
    </Layout>
  ) 
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageFilePath = path.join(path.join(process.cwd(), 'src', 'contents', 'pages'), `${params?.slug}.mdx`)
  const source = fs.readFileSync(pageFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'src', 'contents', 'pages'))
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))


  return {
    paths,
    fallback: false,
  }
}


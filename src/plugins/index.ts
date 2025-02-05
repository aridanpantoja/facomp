import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Plugin } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'

import { Post } from '@/payload-types'
import { getServerSideURL } from '@/lib/utils'

const generateTitle: GenerateTitle<Post> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Leaf Website Template`
    : 'Leaf Website Template'
}

const generateURL: GenerateURL<Post> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  s3Storage({
    collections: {
      media: {
        disableLocalStorage: true,
        prefix: 'media',
      },
    },
    bucket: process.env.R2_BUCKET_NAME as string,
    config: {
      endpoint: process.env.R2_ENDPOINT as string,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
      },
      region: 'auto',
      forcePathStyle: true,
    },
  }),
]

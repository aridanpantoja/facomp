import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './image-media'
import { VideoMedia } from './video-media'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo =
    typeof resource === 'object' && resource?.mimeType?.includes('video')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (htmlElement as any) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
    </Tag>
  )
}

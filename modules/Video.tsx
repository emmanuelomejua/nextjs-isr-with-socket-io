'use client';

import { Video } from '@imagekit/next';


type VideoType = {
  className?: string;
  src: string;
}


const urlEndPoint = process.env.IMAGEKIT_urlEndPoint


export default function VideoModule({src, className}: VideoType) {
  return (
    <Video
      urlEndpoint={urlEndPoint}
      src={src}
      controls
      width={500}
      height={500}
      className={className}
      transformation={[{ width: '1400', height: '1000', quality: 20 }]}
    />
  )
}


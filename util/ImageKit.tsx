import { Image } from '@imagekit/next';


type Itype = {
    src: string;
    w: number;
    h: number;
    alt: string;
    className?: string
    loading?: 'lazy' | 'eager';
    tr?: boolean
}

const urlEndPoint = process.env.IMAGEKIT_urlEndPoint

export default function ImageComp ({src, w, h, alt, className, loading='lazy', tr}: Itype) {
  return (
    <div className="">
        <Image
          urlEndpoint={urlEndPoint}
          src={src}
          width={w}
          height={h}
          alt={alt}
           {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
          loading={loading}
          quality={80}
          // lqip={{ active: true, quality: 20 }}
          className={className}
        />
    </div>
  )
}


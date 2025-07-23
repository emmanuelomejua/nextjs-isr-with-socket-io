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

export default function ImageComp ({src, w, h, alt, className, loading='lazy', tr}: Itype) {
  return (
    <div className="">
        <Image
          urlEndpoint="https://ik.imagekit.io/fa2fz8zmy/"
          src={src}
          width={w}
          height={h}
          alt={alt}
           {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
          loading={loading}
          className={className}
        />
    </div>
  )
}


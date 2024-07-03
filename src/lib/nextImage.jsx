

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'



export default function NextImage({ image, alt, ar ,key }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <figure
    key={key}
      className={clsx(
        'group relative  mb-4 overflow-hidden rounded bg-neutral-two dark:bg-neutral-nine',
        'md:mb-4',
        'lg:mb-8',
      
             
    
             'aspect-square'
         


      )}
    >
        {image}
      <Image
        fill={true}
        loading={'lazy'}
        priority={ false}
        sizes='(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw'
        alt={alt}
        src={image}
        className={clsx(
          'object-cover duration-700 ease-in-out group-hover:cursor-pointer group-hover:opacity-90',
          isLoading
            ? 'scale-120 blur-3xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </figure>
  )
}
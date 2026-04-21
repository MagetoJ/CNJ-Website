import Image from 'next/image'
import { CSSProperties } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fill?: boolean
  style?: CSSProperties
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down'
  objectPosition?: string
}

/**
 * Optimized Image Component
 * Automatically handles WebP conversion, lazy loading, and responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  style,
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      style={style}
      onError={(e) => {
        console.error(`Failed to load image: ${src}`, e)
      }}
      sizes={fill ? '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw' : undefined}
    />
  )
}

/**
 * Hero Image with gradient overlay
 */
export function HeroImage({
  src,
  alt,
  children,
  opacity = 0.3,
}: {
  src: string
  alt: string
  children?: React.ReactNode
  opacity?: number
}) {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-black/30"
        style={{ opacity }}
      ></div>
      {children}
    </div>
  )
}

/**
 * Lazy-loaded background image for sections
 */
export function LazyBackgroundImage({
  src,
  children,
  className = '',
}: {
  src: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

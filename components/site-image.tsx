import type { ComponentProps } from 'react';

type SiteImageProps = ComponentProps<'img'> & { unoptimized?: boolean; priority?: boolean };

// Local images need no hosted image service or authentication.
export default function SiteImage({ unoptimized: _unoptimized, priority, alt, ...props }: SiteImageProps) {
 return <img {...props} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />;
}

import type { ImageMetadata } from 'astro';

export const imageCacheConfig = {
  headers: {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Type': 'image/webp',
  },
};

export function getImageCacheKey(src: string, width: number, format: string): string {
  return `${src}-${width}-${format}`;
}

export function setupImageLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });
}
import type { ImageMetadata } from 'astro';
import credits from './image-credits.json';

/**
 * Photo registry. Drop a .jpg/.png/.webp into src/assets/images and refer to it by file
 * name (without extension) in the data files. Astro generates responsive WebP sizes.
 * Add the photographer and licence to image-credits.json so it appears on /credits.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

const byKey: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const key = path.split('/').pop()!.replace(/\.(jpe?g|png|webp)$/i, '');
  byKey[key] = mod.default;
}

export function getImage(key: string | undefined): ImageMetadata | undefined {
  return key ? byKey[key] : undefined;
}

export interface ImageCredit {
  key: string;
  title: string;
  author: string;
  license: string;
  licenseUrl?: string;
  source: string;
}

export const imageCredits = (credits as ImageCredit[]).filter((c) => c.key in byKey);

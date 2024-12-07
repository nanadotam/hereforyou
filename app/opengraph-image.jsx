import { ImageResponse } from 'next/og';

// Import the static image
import OGImage from '../public/OG-image.png';

export const runtime = 'edge';
export const alt = 'Here for You - A space for meaningful conversations';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return OGImage;
} 
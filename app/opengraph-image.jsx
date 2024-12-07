import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Here for You - A space for meaningful conversations';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #9F7AEA, #805AD5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Playfair Display',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              fontStyle: 'italic',
            }}
          >
            Here for You
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: '800px',
              fontStyle: 'italic',
            }}
          >
            A space for meaningful conversations
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 
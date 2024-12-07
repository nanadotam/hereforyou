import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Here for You - A space for meaningful conversations';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  try {
    const playfairDisplay = await fetch(
      new URL('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap')
    ).then((res) => res.arrayBuffer());

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
                fontFamily: '"Playfair Display"',
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
                fontFamily: '"Playfair Display"',
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
        fonts: [
          {
            name: 'Playfair Display',
            data: playfairDisplay,
            weight: 400,
            style: 'italic',
          },
        ],
      }
    );
  } catch (error) {
    console.error('Error loading Playfair Display font:', error);
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
                fontFamily: '"Playfair Display"',
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
                fontFamily: '"Playfair Display"',
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
        fonts: [],
      }
    );
  }
} 
'use client';

import Error from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.log(props.error);
  }, [props.error]);

  return (
    <html lang="kr">
      <body>
        {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
        <Error statusCode={undefined as any} />
      </body>
    </html>
  );
}

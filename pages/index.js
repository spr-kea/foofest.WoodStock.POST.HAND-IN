import { useRouter } from 'next/router';
import React from 'react';
export default function Home() {
  const router = useRouter();

  // Redirect to "/schedule" page
  React.useEffect(() => {
    router.push('/bands');
  }, []);

  // Render null or a loading indicator while redirecting
  return null;
}

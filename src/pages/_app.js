import "../styles/globals.css";

import { useRouter } from "next/router";
import { useState } from "react";
import { AuthProvider } from "/contexts/auth";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    
        <Component {...pageProps} />
  
  );
}

export default MyApp;

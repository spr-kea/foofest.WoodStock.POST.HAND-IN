import Head from "next/head";
import { useAuth } from "/hooks/authFun";



export default function Home() {

  return  <>
  <Head>
    <title>EDC Buyer Research Generator</title>
  </Head>

  </>

}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return {
    redirect: {
      destination: "/schedule",
      permanent: false,
    },
  };
};

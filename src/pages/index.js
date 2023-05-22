import Head from "next/head";

export default function Home() {
  const { signOut, auth } = useAuth();
  return <div>Hello</div>;
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



import { useContext } from "react";
import singleBand from "../../../components/single-band/singleBand";

function singleBandPage(props) {
  return (
    <>
      <singleBand
        user={props.user}
        bandName={props.data.name}
        genre={props.data.genre}
        description={props.data.bio}
        members={props.data.members}
        slug={props.slug}
        logo={props.data.logo}
        credits={props.data.logoCredits}
      />
    </>
  );
}
export async function getServerSideProps(context) {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(context);
  // Check if we have a session
  const slug = context.params.slug;
  const res = await fetch("https://bittersweet-painted-willow.glitch.me/bands");
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  const band = data.filter((entry) => entry.slug === slug);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      props: {
        data: band[0],
        initialSession: null,
        user: null,
        slug: slug,
      },
    };
  }

  return {
    props: {
      data: band[0],
      initialSession: session,
      user: session.user,
      slug: slug,
    },
  };
}

export default singleBandPage;
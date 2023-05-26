import { useRouter } from 'next/router';

const TentSetPage = () => {
  const router = useRouter();
  const { regularTickets, vipTickets, greenCamping } = router.query;

  return (
    <div>
      <h1>Tent Set</h1>
      <p>Regular Tickets: {regularTickets}</p>
      <p>VIP Tickets: {vipTickets}</p>
      <p>Green Camping: {greenCamping}</p>
    </div>
  );
};

export default TentSetPage;

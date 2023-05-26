import { useRouter } from 'next/router';

const GreenPage = () => {
  const router = useRouter();
  const { regularTickets, vipTickets } = router.query;

  return (
    <div>
      <h1>Green Page</h1>
      <p>Regular Tickets: {regularTickets}</p>
      <p>VIP Tickets: {vipTickets}</p>
    </div>
  );
};

export default GreenPage;

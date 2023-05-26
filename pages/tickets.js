import { useState } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const [regularTickets, setRegularTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const router = useRouter();

  const handleRegularTicketChange = (e) => {
    const selectedTickets = parseInt(e.target.value);
    const remainingTickets = 10 - vipTickets;

    if (selectedTickets <= remainingTickets) {
      setRegularTickets(selectedTickets);
    } else {
      setRegularTickets(remainingTickets);
    }
  };

  const handleVipTicketChange = (e) => {
    const selectedTickets = parseInt(e.target.value);
    const remainingTickets = 10 - regularTickets;

    if (selectedTickets <= remainingTickets) {
      setVipTickets(selectedTickets);
    } else {
      setVipTickets(remainingTickets);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary logic here, such as processing the ticket purchase

    // Reset the ticket counts
    setRegularTickets(0);
    setVipTickets(0);

    // Redirect to Green Page with ticket counts in the query string
    router.push({
      pathname: '/green',
      query: { regularTickets, vipTickets },
    });
  };

  console.log('Regular Tickets:', regularTickets);
  console.log('VIP Tickets:', vipTickets);

  return (
    <div>
      <h1>Tickets</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Regular Tickets:
            <select value={regularTickets} onChange={handleRegularTicketChange}>
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            VIP Tickets:
            <select value={vipTickets} onChange={handleVipTicketChange}>
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Buy Tickets</button>
      </form>
    </div>
  );
};

export default IndexPage;

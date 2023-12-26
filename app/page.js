"use client";
import TicketCard from "./(components)/TicketCard";
import axios from "axios";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/api/Tickets");
      setTickets(data.tickets);
      setLoading(false);
    };
    fetchTickets();
  }, []);
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  if (loading) return <p className="text-center text-2xl pt-5">Loading...</p>
  if(tickets.length==0) return <p className="text-center text-2xl pt-5">No Tickets</p>
  return (
    <div className="p-5">
    <div>
      {tickets &&
        uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    key={_index}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}
export default Dashboard;


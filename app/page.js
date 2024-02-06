"use client";
import TicketCard from "./(components)/TicketCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ticketsGet } from "@/Redux/api/postApi";
const Dashboard = () => {
  const { tickets, loading, error } = useSelector((state) => state.Ticket);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTickets = () => {
      dispatch(ticketsGet());
    };
    fetchTickets();
  }, [dispatch]);
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      {error && <p className="text-center text-2xl pt-5">Something is wrong</p>}
      {(loading && tickets.length === 0) && <p className="text-center text-2xl pt-5">Loading...</p>}
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
      {(tickets.length === 0 && loading === false) && <p className="text-center text-2xl pt-5">No Tickets Available</p>}
    </div>
  )
}
export default Dashboard;


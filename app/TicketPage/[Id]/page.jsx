"use client";
import TicketForm from "../../(components)/TicketForm";
import axios from "axios";
const getTicketById = async (id) => {
  try {
    const res = await axios.get(`api/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
let updateTicketData = {};
const ticketpage = async ({ params }) => {
  const EDITMODE = params.Id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.Id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};
export default ticketpage;

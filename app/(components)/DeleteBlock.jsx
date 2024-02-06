"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ticketdelete } from "@/Redux/api/postApi";
export default function DeleteBlock({ id }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { tickets, error, loading } = useSelector((state) => state.Ticket);
  const deleteTicket = async () => {
    dispatch(ticketdelete(id));
  };
  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
}

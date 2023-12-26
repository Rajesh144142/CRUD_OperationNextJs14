"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import  axios from "axios";
export default function DeleteBlock({id}) {
  const router=useRouter()
  const deleteTicket = async () => {
    try {
      const res=await axios.delete(`/api/${id}`);
      console.log(res.data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
}

import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Events from "../../components/events/Events"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from 'axios';
import { useLocation } from "react-router-dom"

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default function Home() {
  const [eventList,setEvents] = useState([]);
  const { search } = useLocation();

  useEffect(()=>{
    console.log(process.env.REACT_APP_API_URL);
    const fetchEvents = async ()=>{
      const res = await axiosClient.get("/events" + search);
      setEvents(res.data);

    }
    fetchEvents();

  },[search]

  )
  return (
    <>
    <Header/>
    <div className="home">
        <Events eventList={eventList}/>
        <Sidebar/>
    </div>
    </>
  )
}

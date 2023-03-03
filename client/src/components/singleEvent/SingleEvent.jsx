import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './singleEvent.css'
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default function SingleEvent() {
    const location = useLocation();
    const eventId = location.pathname.split("/")[2];
    const[event,setEvent] = useState({})
    useEffect(()=>{
        const getEvent = async ()=>{
            const resp = await axiosClient.get("/events/" + eventId)
            setEvent(resp.data);
        };
        getEvent();
    },[eventId]);
    return (
        <div className="singlePost">
            <div className='singlePostWrapper'>
                <img
                    src={event.photo ? event.photo : "https://khqa.com/resources/media/e0db4d6c-cfb7-41eb-9591-f1b82cffcd91-jumbo16x9_worldtravelguy.jpg?1641239930038"}
                    alt=""
                    className='singlePostImg'
                />
                <h1 className='singlePostTitle'> {event.title}
                <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostName'>Author: 
                    <Link to={`/?user=${event.username}`} className="link">
                    <b>{event.username}</b>
                    </Link>
                    </span>
                    <span className='singlePostDate'>{ new Date (event.createdAt).toDateString()}</span>
                </div>
               <div className="pcat">
                <p className='singlePostDesc'>
                    {event.desc}
                </p>
               </div>

            </div>
        </div>
    )
}

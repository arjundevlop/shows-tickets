import React, { useState,useEffect } from 'react';
import {useNavigate,useParams} from "react-router-dom";

const InfoPage = ({match}) => {

  const [show, setShow] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID is=>>>>",id)

  useEffect(() => {
    
    fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
      .then(response => response.json())
      .then(data => {
        
        setShow(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);
  console.log(show)

  const handleBooking = ()=>{
    navigate(`/booking/${show.externals.thetvdb}`)
  }

  return (
    
        
           
                <div className='info-div'>
                    <h1>{show.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: show && show.summary }} />
                    <div className='genre-div'>Genres - {show.genres.map((item)=>{
                        return <span>{item}</span>
                    })}</div>
                    <div className="status-div">Status - {show.status}</div>
                    <div className="schedule-div">Schedule - {show.schedule.time}
                    ({show.schedule.days.map((item)=>{
                        return <span>{item}</span>
                    })})</div>
                    <button onClick={handleBooking}>Book Ticket</button>
                </div>
            
        
    
  )
}

export default InfoPage
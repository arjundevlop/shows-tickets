import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const BookingPage = () => {
const { id } = useParams();
const [data, setData] = useState([]);


useEffect(() => {
    
    fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        setData(data);
        setshowName(data.name)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]); 

  const handleSubmit = (e)=>{
     e.preventDefault();
     localStorage.setItem("userName",userName);
     localStorage.setItem("email",userEmail);
     localStorage.setItem("userMobile",userMobile);
     setuserName("");
     setuserEmail("");
     setuserMobile("");
     alert("Ticket Booked");
  }
  const [showName, setshowName] = useState('');
  var today = new Date().toISOString().split("T")[0];
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userMobile, setuserMobile] = useState("");

  return (
    <div className='form-outer-div'>
        <form onSubmit={handleSubmit}>
        <div className="form-inner-div">
        <div className="form-element">
        <label htmlFor="showName">Show Name </label>
        <input type='text' value={showName} onChange={(e)=>{setshowName(e.target.value)}}/>
        </div>
        <div className="form-element">
            <label htmlFor="date">Date</label>
            <input type="date" min={today} />
        </div>
        <div className="form-element">
            <label htmlFor="user-name">Your Name </label>
            <input type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}}/>
        </div>
        <div className="form-element">
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" value={userEmail} onChange={(e)=>{setuserEmail(e.target.value)}} />
        </div>
        <div className="form-element">
            <label htmlFor="phone">Enter Your Phone Number</label>
            <input type="number" value={userMobile} onChange={(e)=>{setuserMobile(e.target.value)}} />
        </div>
        <div className="form-element">
            <button type='submit'>Book</button>
        </div>
        </div>
        

        </form>
    </div>
  )
}

export default BookingPage
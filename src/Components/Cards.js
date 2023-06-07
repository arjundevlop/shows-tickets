import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({data}) => {
    
  return (
    <div className='cards-container'>
        {data.map((item, index)=>{
            return (
                <div className='card'>
                    <div className='card-img'>
                        <img src={item.show.image.medium} alt="photo" />
                    </div>
                    <div className='name-div'>
                        {item.show.name}
                    </div>
                    <div className='rating-div'>
                       Rating - {(item.show.rating.average) ? item.show.rating.average : "N.A"}
                    </div>
                    <div className='language-div'>
                        Language - {item.show.language}
                    </div>
                    <div className='button-div'>
                    <Link to={`/${item.show.externals.thetvdb}`}>Click to See more..</Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Cards
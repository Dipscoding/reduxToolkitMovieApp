import React from 'react';
import "./MovieCard.scss";
const MovieCard = (props) => {
    const {data}=props;
    return (
        <div className='card-item'>
            <div className='card-inner'>
            <div className='card-top'>
                <img src={data.Poster} alt={data.title}/>
            
            </div>
            <div className='card-bottom'>
            <div className='card-info'>
                <h4>{data.Title}</h4>
                <p>{data.year}</p>
            
            </div>
            
        </div>
            
            </div>
        </div>
    );
};

export default MovieCard;
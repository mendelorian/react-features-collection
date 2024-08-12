import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRating({numOfStars = 5}) {

  const [stars, setStars] = useState(0);
  const [hoverStars, setHoverStars] = useState(0);

  function handleClick(i) {
    setStars(i);
  }

  function handleMouseEnter(i) {
    setHoverStars(i);
  }

  function handleMouseLeave() {
    setHoverStars(0);
  }

  return (
    <div className='star-rating'>
      <h1>Rate this app:</h1>
      {
        [...Array(numOfStars)].map((_, index) => {
          index += 1;

          return <FaStar
            key={index}
            className={index <= (hoverStars || stars) ? 'activeStar' : 'inactiveStar'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            />
        })
      }
    </div>
  )
}
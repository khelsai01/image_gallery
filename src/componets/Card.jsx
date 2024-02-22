import React from 'react'
import "../styles/Card.css"
const Card = ({id}) => {
let title;
// let currprice = Date.now();
let price =  new Date(Date.now()).getMilliseconds()
  const generateRandomTitle = () => {
    const adjectives = ['Beautiful', 'Stunning', 'Gorgeous', 'Amazing', 'Lovely'];
    const nouns = ['Landscape', 'Sunset', 'Mountain', 'Beach', 'Nature'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  };

  if (!title) {
    title = generateRandomTitle();
  }
  return (
    <div className='card'>
      <img src="https://dummyimage.com/300" alt={title} />
      <div className='details'>
      <h4>{title}</h4>
      <p>${price+id}.00</p>
      </div>

    </div>
  )
}

export default Card
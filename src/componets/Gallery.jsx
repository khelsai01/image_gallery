import React, { useState } from 'react'
import "../styles/Gallery.css"
import Card from './Card'
const data =[
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  },
  {
    id:5
  },
  {
    id:6
  },
  {
    id:7
  },
  {
    id:8
  },
  {
    id:9
  },
  {
    id:10
  },{
    id:11
  },
  {
    id:12
  },
  {
    id:13
  },
  {
    id:14
  },
  {
    id:15
  }
]
const Gallery = () => {

  const[images] = useState(data)
  // console.log(images)
  return (
    <div className='image-container'>
      {images?.map(el=>(
        <Card key={el.id} {...el} />
      ))}
    </div>
  )
}

export default Gallery
import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


const MovieCard = ({movie}) => {
    return (
          <Card style={{ width: '19rem',height: '600px', background: 'rgb(247, 60, 60)'}} className="mx-4 my-5">
  <Card.Img variant="top" src={movie.posterUrl } style={{height:"70%"}}/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    <ReactStars
    count={5}
    isHalf={true}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Text>
<div style={{marginTop:"20px", justifyContent: "center"}}>
<a href={movie.trailer}><Button variant="primary">Play</Button></a>

</div>
  </Card.Body>
</Card>
    )
}

export default MovieCard

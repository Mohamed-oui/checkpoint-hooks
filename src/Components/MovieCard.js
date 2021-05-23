import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "300px", height:"400px",marginBottom:"250px"}} className="mx-3">
      <Card.Img variant="top" src={movie.posterUrl} style={{height: "100%" }} />
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
        <a href={movie.trailer}><Button style={{marginBottom:"0px"}}>Play</Button></a>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
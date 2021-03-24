import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";

function movieCard({ movie }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.posterUrl} height="60%" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="movieButton">
          Enjoy It
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default movieCard;

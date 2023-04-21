import { ListGroup, Card, Carousel } from "react-bootstrap";

import { Room } from "../types";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Card className="mt-4">
      <Carousel>
        {room.images.map((image, index) => (
          <Carousel.Item key={image.url + index}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={image.alt ? image.alt : "room"}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{room.name}</Card.Title>
        <Card.Text>{room.longDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Room Type :</strong> {room.bedConfiguration}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Max Children:</strong> {room.occupancy.maxChildren}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default RoomCard;

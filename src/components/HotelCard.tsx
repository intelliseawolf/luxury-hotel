import { ListGroup, Card, Carousel } from "react-bootstrap";

import { Hotel } from "../types";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <Card className="mt-4">
      <Carousel>
        {hotel.images.map((image, index) => (
          <Carousel.Item key={image.url + index}>
            <img className="d-block w-100" src={image.url} alt="hotel" />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>{hotel.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Address:</strong> {hotel.address1}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Location:</strong> {hotel.town}, {hotel.country}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Star:</strong> {hotel.starRating}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={`/hotel/${hotel.id}`}>More Detail</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;

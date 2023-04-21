import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHotelList } from "../store/modules/hotelSlice";
import HotelCard from "../components/HotelCard";

const Home = () => {
  const dispatch = useAppDispatch();
  const [starInput, setStarInput] = useState<number>(0);
  const { hotelList, status } = useAppSelector((state) => state.hotel);

  const filteredHotelList = useMemo(() => {
    return hotelList.filter((hotel) => Number(hotel.starRating) >= starInput);
  }, [hotelList, starInput]);

  useEffect(() => {
    dispatch(getHotelList());
  }, [dispatch]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="d-flex align-items-center">
            <Form.Label htmlFor="starInput" className="me-2 mb-0">
              Star:
            </Form.Label>
            <Form.Control
              type="number"
              id="starInput"
              style={{ width: "200px" }}
              value={starInput}
              onChange={(e) => setStarInput(Number(e.target.value))}
            />
          </div>
        </Col>
      </Row>
      <Row>
        {status === "loading" ? (
          <Spinner />
        ) : (
          filteredHotelList.map((hotel) => (
            <Col md={3} key={hotel.id}>
              <HotelCard hotel={hotel} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Home;

import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Spinner from "../components/Spinner";
import RoomCard from "../components/RoomCard";
import { getHotelDetail } from "../store/modules/hotelSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Room } from "../types";

interface FilterOptions {
  adult: number;
  child: number;
}

const HotelDetail = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    adult: 0,
    child: 0,
  });
  const dispatch = useAppDispatch();
  const { status, hotelItem } = useAppSelector((state) => state.hotel);
  const { id: hotelId } = useParams();

  const filteredRooms = useMemo(() => {
    return hotelItem.rooms.filter(
      (room) =>
        room.occupancy.maxAdults >= Number(filterOptions.adult) &&
        room.occupancy.maxChildren >= Number(filterOptions.child)
    );
  }, [filterOptions, hotelItem]);

  useEffect(() => {
    if (hotelId) dispatch(getHotelDetail(hotelId));
  }, [hotelId, dispatch]);

  return (
    <Container className="mt-5">
      <Row>
        <Col md="9">
          <div className="d-flex align-items-center">
            <Form.Label htmlFor="adultInput" className="me-2 mb-0">
              Adult:
            </Form.Label>
            <Form.Control
              type="number"
              id="adultInput"
              style={{ width: "200px" }}
              className="me-2"
              value={filterOptions.adult}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  adult: Number(e.target.value),
                })
              }
            />
            <Form.Label htmlFor="childInput" className="me-2 mb-0">
              Child:
            </Form.Label>
            <Form.Control
              type="number"
              id="childInput"
              style={{ width: "200px" }}
              value={filterOptions.child}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  child: Number(e.target.value),
                })
              }
            />
          </div>
        </Col>
        <Col md="3">
          <div className="d-flex justify-content-end">
            <Button variant="primary" href="/">
              Back
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        {status === "loading" ? (
          <div className="mt-4">
            <Spinner />
          </div>
        ) : (
          filteredRooms.map((room: Room) => (
            <Col md={3} key={room.id}>
              <RoomCard room={room} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default HotelDetail;

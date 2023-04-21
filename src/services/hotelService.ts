import axios from "axios";

const fetchHotelList = () => {
  return axios.get(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
  );
};

const fetchHotelDetail = (id: string) => {
  return axios.get(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`);
};

export { fetchHotelList, fetchHotelDetail };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import { fetchHotelList, fetchHotelDetail } from "../../services/hotelService";
import { Hotel, RatePlan, Room } from "../../types";

interface HotelSliceState {
  hotelList: Hotel[];
  status: "idle" | "loading" | "failed";
  hotelItem: {
    rooms: Room[];
    ratePlans: RatePlan[];
  };
}

const initialState: HotelSliceState = {
  hotelList: [],
  status: "idle",
  hotelItem: {
    rooms: [],
    ratePlans: [],
  },
};

export const getHotelList = createAsyncThunk("hotel/getHotelList", async () => {
  const response: AxiosResponse = await fetchHotelList();

  return response.data;
});

export const getHotelDetail = createAsyncThunk(
  "hotel/getHotelDetail",
  async (id: string) => {
    const response: AxiosResponse = await fetchHotelDetail(id);

    return response.data;
  }
);

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotelList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHotelList.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotelList = action.payload;
      })
      .addCase(getHotelList.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getHotelDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHotelDetail.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotelItem = action.payload;
      })
      .addCase(getHotelDetail.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default hotelSlice.reducer;

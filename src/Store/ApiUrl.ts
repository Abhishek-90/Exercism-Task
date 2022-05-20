import { createSlice } from "@reduxjs/toolkit";

interface ITestimonialUrlProps {
  order?: string;
  page: number;
  track?: string;
  exercise?: string;
  totalPage?: number;
  isLoading: boolean;
}

const testimonialUrlProps: ITestimonialUrlProps = {
  order: "newest_first",
  page: 1,
  totalPage: 0,
  isLoading: true,
  track:"",
};

export const testimonialSlice = createSlice({
  name: "testimonialsUrl",
  initialState: testimonialUrlProps,
  reducers: {
    changePageByOne: (state, action) => {
      state.page = state.page + action.payload;
    },
    changeOrder: (state, action) => {
      state.page = 1;
      state.order = action.payload;
    },
    getTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    changeTrack: (state, action) => {
      state.page = 1;
      state.track = action.payload;
    },
    changePageByPayload: (state, action) => {
      state.page = action.payload;
    },
    changeExercise: (state, action) => {
      state.page = 1;
      state.exercise = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  changePageByOne,
  changeOrder,
  getTotalPage,
  changeTrack,
  changePageByPayload,
  changeExercise,
  setIsLoading,
} = testimonialSlice.actions;
export default testimonialSlice.reducer;

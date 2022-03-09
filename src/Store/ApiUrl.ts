import { createSlice } from '@reduxjs/toolkit' 

interface ITestimonialUrlProps {
    order?: string,
    page: number,
    track?: string,
    exercise?: string, 
    totalPage?: number
}

const testimonialUrlProps: ITestimonialUrlProps = {
    order: 'oldest_first',
    page: 1,
}

export const testimonialSlice = createSlice({
    name: 'testimonialsUrl',
    initialState:testimonialUrlProps,
    reducers:{
      changePageByOne: (state, action)=>{
        state.page = state.page + action.payload
      },
      changeOrder: (state, action) => {
        state.page = 1;
        state.order = action.payload
      },
      getTotalPage: (state, action) => {
        state.totalPage = action.payload
      },
      changeTrack: (state, action) => {
        state.page = 1
        state.track = action.payload
      },
      changePageByPayload: (state,action) => {
        state.page = action.payload;
      },
      changeExercise: (state, action) => {
        state.page = 1
        console.log("redux :", action.payload)
        state.exercise = action.payload
      }
    }
})

export const { changePageByOne, changeOrder, getTotalPage,changeTrack, changePageByPayload, changeExercise } = testimonialSlice.actions
export default testimonialSlice.reducer

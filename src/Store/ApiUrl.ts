import { createSlice } from '@reduxjs/toolkit' 

interface ITestimonialUrlProps {
    order?: string,
    page: number,
    track?: string,
    exercise?: string
}

const testimonialUrlProps: ITestimonialUrlProps = {
    order: 'newest_first',
    page: 1,
}

export const testimonialSlice = createSlice({
    name: 'testimonialsUrl',
    initialState:testimonialUrlProps,
    reducers:{
      changePage: (state, action)=>{
          state.page = state.page + action.payload
      },
      changeOrder: (state, action) => {
          state.order = action.payload
      }
    }
})

export const {changePage, changeOrder} = testimonialSlice.actions
export default testimonialSlice.reducer

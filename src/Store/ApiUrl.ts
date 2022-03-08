import { createSlice } from '@reduxjs/toolkit' 

interface ITestimonialUrlProps {
    order?: string,
    page: number,
    track?: string,
    exercise?: string
}

const testimonialUrlProps: ITestimonialUrlProps = {
    order: 'oldest_first',
    page: 1,
}

export const testimonialSlice = createSlice({
    name: 'testimonialsUrl',
    initialState:testimonialUrlProps,
    reducers:{
      changePage: (state, action)=>{
        console.log(action.payload)
        state.page = state.page + action.payload
        console.log(state.page)
      },
      changeOrder: (state, action) => {
          state.order = action.payload
      }
    }
})

export const {changePage, changeOrder} = testimonialSlice.actions
export default testimonialSlice.reducer

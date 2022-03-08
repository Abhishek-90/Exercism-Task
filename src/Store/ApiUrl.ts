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
      changePage: (state, action)=>{
        state.page = state.page + action.payload
      },
      changeOrder: (state, action) => {
          state.order = action.payload
      },
      getTotalPage: (state, action) => {
        state.totalPage = action.payload
      }
    }
})

export const {changePage, changeOrder, getTotalPage} = testimonialSlice.actions
export default testimonialSlice.reducer

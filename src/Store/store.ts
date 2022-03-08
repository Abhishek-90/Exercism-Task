import { configureStore } from '@reduxjs/toolkit' 
import testimonialReducer from '../Store/ApiUrl'

export default configureStore({
    reducer: {
        testimonialReducer: testimonialReducer
    }
})

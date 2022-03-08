import axios, { AxiosResponse } from "axios";
import { testimonials } from "../../constants/ApiEndpoint";

export const getTestimonials = async () => {
  try {
    const res: AxiosResponse<any> = await axios.get(testimonials) 
    console.log("inside Function",res) 
    return res.data  
  } catch (error) {
    console.error(error)
  }
};

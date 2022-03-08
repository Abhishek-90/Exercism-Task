import axios, { AxiosResponse } from "axios";
import { testimonials } from "../../constants/ApiEndpoint";

export const getTestimonials = async (page:string, order?:string) => {
  try {
    const res: AxiosResponse<any> = await axios.get(
      `${testimonials}?page=${page}&order=${order}`
    ) 

    return res.data  
  } catch (error) {
    console.error(error)
  }
};

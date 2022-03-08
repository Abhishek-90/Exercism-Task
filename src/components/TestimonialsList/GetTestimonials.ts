import axios, { AxiosResponse } from "axios";
import { testimonials } from "../../constants/ApiEndpoint";

export const getTestimonials = async (page:string, order?:string) => {
  console.log(`${testimonials}?page=${page}&order=${order}`)
  try {
    const res: AxiosResponse<any> = await axios.get(
      `${testimonials}?page=${page}&order=${order}`
    ) 

    return res.data  
  } catch (error) {
    console.error(error)
  }
};

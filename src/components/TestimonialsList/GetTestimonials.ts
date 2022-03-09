import axios, { AxiosResponse } from "axios";
import { testimonials } from "../../constants/ApiEndpoint";

export const getTestimonials = async (page?:string, order?:string, track?:string, exercise?:string) => {
  console.log(`${testimonials}?page=${page}&order=${order}${track ? `&track=${track}`:``}${exercise ? `&exercise=${exercise}`:``}`)
  try {
    const res: AxiosResponse<any> = await axios.get(
      `${testimonials}?page=${page}&order=${order}${track ? `&track=${track}`:``}${exercise ? `&exercise=${exercise}`:``}`
    ) 

    return res.data  
  } catch (error) {
    console.error(error)
  }
  
};

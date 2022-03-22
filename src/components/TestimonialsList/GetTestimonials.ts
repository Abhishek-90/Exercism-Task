import axios, { AxiosResponse } from "axios";
import { testimonials } from "../../constants/ApiEndpoint";

export const getTestimonials = async (page:number, order?:string, track?:string, exercise?:string) => {
  const changedPage:number = (page/2) + (page%2) 
  try {
    const res: AxiosResponse<any> = await axios.get(
      `${testimonials}?page=${changedPage}&order=${order}${track ? `&track=${track}`:``}${exercise ? `&exercise=${exercise}`:``}`
    ) 

    return res.data  
  } catch (error) {
    console.error(error)
  }
};

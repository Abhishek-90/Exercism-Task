import axios, { AxiosResponse } from "axios";
import { testimonialsEndpoint } from "../../constants/ApiEndpoint";

export const getTestimonials = async () => {
  try {
    const res: AxiosResponse<any> = await axios.get(testimonialsEndpoint) 
    console.log("inside Function",res) 
    return res.data  
  } catch (error) {
    console.error(error)
  }
};

import axios from "axios";
import { testimonialsEndpoint } from "../../constants/ApiEndpoint";

export const getTestimonials = async () => {

  const res = await (await fetch(testimonialsEndpoint)).json()
  console.log(res)
  return res;
};

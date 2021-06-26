import axios from "axios";

export default axios.create({
  baseURL: "https://api.covidactnow.org/v2",
});

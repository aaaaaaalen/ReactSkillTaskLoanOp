import axios from "axios";

const Uni = () => {
  const uni = axios({
    method: "GET",
    url: "http://universities.hipolabs.com/search?country=Australia"
  });

  return uni;
};

export default Uni;
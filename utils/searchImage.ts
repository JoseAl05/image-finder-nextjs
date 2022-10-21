import axios from "axios";
import { getQuery } from "./cookies";

const searchImages = async ({
  page = 1,
  setPage,
  setHasMore
}) => {
  const query = getQuery();
  const { data } = await axios.get("/api/getImages", {
    params: {
      query,
      page,
    },
  });

  setPage((prevPage:number) => prevPage + 1);
  if(data.length < 15){
    setHasMore(false)
  }else{
    setHasMore(true)
  }
  return data;
};

export default searchImages;

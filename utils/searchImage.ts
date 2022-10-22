import axios from "axios";
import { SearchFormProps } from "../types";
import { getQuery } from "./cookies";

const searchImages = async ({
  page = 1,
  setPage,
  setHasMore,
}: SearchFormProps) => {
  const query = getQuery();
  const { data } = await axios.get("/api/getImages", {
    params: {
      query,
      page,
    },
  });

  setPage((prevPage: number) => prevPage + 1);
  if (data.length < 15) {
    setHasMore(false);
  } else {
    setHasMore(true);
  }
  return data;
};

export default searchImages;

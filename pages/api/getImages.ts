import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ImageProps } from "../../types/index";
import { createClient } from "pexels";

const ApiKey:string = process.env.PEXELS_API_KEY;


const client = createClient(ApiKey);

const getImages = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: {
      query,
      page
    },
  } = req;

  if (method !== "GET") {
    return res.status(405).send("Method not Allowed");
  }

  if (!query || !page) {
    return res.status(400).send("Bad Request");
  }


  const result = await client.photos.search({ query, page });
  const images = result.photos.map((image:ImageProps) => {
    return {
      photographer:image.photographer,
      photographer_url:image.photographer_url,
      src:image.src,
      alt:image.alt
    }
  });


  return res.send(images);
};

export default getImages;

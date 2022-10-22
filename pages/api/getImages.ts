import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ImageProps } from "../../types/index";
import { createClient } from "pexels";

const ApiKey:string | undefined = process.env.PEXELS_API_KEY;


const client = createClient(ApiKey!);

const getImages = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
  } = req;
  const query= req.query.query as string;
  const page = req.query.page as unknown as number;

  if (method !== "GET") {
    return res.status(405).send("Method not Allowed");
  }

  if (!query || !page) {
    return res.status(400).send("Bad Request");
  }


  await client.photos.search({ query, page })
  .then((result:any) => {
    const images = result.photos.map((image:ImageProps) => {
      return {
        photographer:image.photographer,
        photographer_url:image.photographer_url,
        src:image.src,
        alt:image.alt
      }
    });
    return res.send(images);
  })
  .catch((error)=>{
    return res.send(error);
  })
  // const images = result.photos.map((image:ImageProps) => {
  //   return {
  //     photographer:image.photographer,
  //     photographer_url:image.photographer_url,
  //     src:image.src,
  //     alt:image.alt
  //   }
  // });


  // return res.send(images);
};

export default getImages;

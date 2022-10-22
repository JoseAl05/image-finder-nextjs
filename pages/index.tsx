import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from './components/Banner/Banner';
import SearchForm from './components/SearchForm/SearchForm';
import React, { useState } from 'react';
import Images from './components/Images/Images';
import InfiniteScroll from "react-infinite-scroll-component";
import searchImages from '../utils/searchImage';
import { SearchFormProps } from '../types';
import Loader from './components/Loader/Loader';
import EndMessage from './components/EndMessage/EndMessage';


const fetchNextImages = ({ page, setImages, setPage, setHasMore }: SearchFormProps) => async () => {
  const images = await searchImages({
    page,
    setPage,
    setHasMore,
    setImages
  })

  setImages((prevImg: any) => prevImg.concat(images))
}



const Home: NextPage = () => {

  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const searchFormProps = {
    page,
    setImages,
    setPage,
    setHasMore,
  }
  console.log(hasMore);
  return (
    <>
      <Head>
        <title>Image Finder</title>
        <meta name="description" content="Page to find and download any image that you want!." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <SearchForm {...searchFormProps} />
        <InfiniteScroll dataLength={images.length} hasMore={hasMore} next={fetchNextImages({ page, setImages, setPage, setHasMore })} loader={<Loader />} endMessage={<EndMessage/>}>
          <Images images={images} />
        </InfiniteScroll>
      </Banner>
    </>
  )
}


export default Home

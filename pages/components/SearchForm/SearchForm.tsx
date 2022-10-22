import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from "next";
import { setQuery } from "../../../utils/cookies";
import searchImages from "../../../utils/searchImage";
import { SearchFormProps } from "../../../types";


const SearchForm: React.FC<SearchFormProps> = ({ setImages,setPage,setHasMore }:SearchFormProps) => {

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ query: "" });
        }
    }, [formState, reset]);

    const onSubmit = async (data: any) => {

        setPage(1);

        const images = await searchImages({setPage,setHasMore,setImages});

        setImages(images);
    }

    const handleChange = (e: { target: { value: string; }; }) => {
        setQuery(e.target.value);
    }

    return (
        <>
            <div className="flex flex-col items-center relative h-[70vh]">
                <h1 className="text-5xl text-white text-center pt-64">IMAGES</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
                    <label className="block relative w-1/2">
                        <span className="absolute inset-y-10 rounded-md left-0 right-20 flex items-center w-8 bg-slate-500 h-10 ">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="pointer-events-none w-8 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </span>
                        <input {...register("query", { required: true })} className="rounded-lg mt-10 p-2 w-full pl-10" onChange={handleChange} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </label>
                    <button type="submit" className="text-white mt-5 bg-[#006482] p-1 text-lg rounded-lg w-1/2 opacity-70">Search!</button>
                </form>
            </div>
        </>
    );
}

export default SearchForm;
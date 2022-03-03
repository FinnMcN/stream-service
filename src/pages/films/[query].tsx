import { useEffect } from "react";

//next
import type { NextPage } from "next";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";

import { getAllPosterPaths, getPosterData } from "@/utils/getPosters";
import type { IPoster } from "@/types/PosterData";

interface IFilm extends IPoster {
    children?: React.ReactNode;
}

const Film: NextPage = ({ filmData }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { title, query, certificate, runtime, genre, rating, poster } = filmData;
    useEffect(() => {
        console.log(filmData);
    });

    return (
        <>
            {filmData ? (
                <>
                    <Link href="/">
                        <a>Назад</a>
                    </Link>
                    <div>{title}</div>
                    <div>{certificate}</div>
                    <div>{runtime}</div>
                    <div>{genre}</div>
                    <div>{rating}</div>
                </>
            ) : (
                <div>Loading</div>
            )}
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPosterPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const filmData = getPosterData(params!.query);
    return {
        props: {
            filmData,
        },
    };
};

export default Film;

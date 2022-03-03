import { useEffect, useState } from "react";
//Next
import type { NextPage } from "next";
import Head from "next/head";

//Components
import Header from "../components/header/Header";
import PostersBlock from "../components/postersSlider/PostersSlider";
import Footer from "../components/footer/Footer";

//Utils
import filmsData from "../utils/films.json";

//Hooks
import { useTheme } from "../utils/themeContext";

//Types
import type { IPoster } from "@/types/PosterData";

const Home: NextPage = () => {
    const [films, setFilms] = useState<IPoster[]>([]);
    const { isDark } = useTheme();

    useEffect(() => {
        setFilms(filmsData);
    }, []);

    return (
        <>
            <Head>
                <title>Rewind</title>
            </Head>
            <div className={isDark ? "app dark" : "app light"}>
                <Header />
                <PostersBlock data={films} />
                <Footer />
            </div>
        </>
    );
};

export default Home;

//hooks
import { useEffect, useState, useRef } from "react";
import useIntersectionObserver from "@/hooks/useObserver";

//components
import Poster from "./poster/Poster";
import Container from "../container/Container";

//styles
import styles from "./postersSlider.module.scss";

//types
import type { IPoster } from "@/types/PosterData";

/* import { FixedSizeList } from "react-window"; */

export default function PostersBlock({ data }: { data: IPoster[] }) {
    const [posters, setPosters] = useState<typeof data>([]);
    const INITIAL_AMOUNT_OF_POSTERS = 12;

    const [isVisibleBtn, setIsVisibleBtn] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const btn = useRef<HTMLButtonElement | null>(null);
    const onScreen = useIntersectionObserver(btn, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });

    const getNewPosters = (postersLength: number) => {
        const postersToShow = 4;
        const endDisplayedPosters = postersLength + postersToShow;

        const newPosters = data.slice(postersLength, endDisplayedPosters);

        return newPosters;
    };

    const updatePosters = () => {
        setPosters((posters) => [...posters, ...getNewPosters(posters.length)]);
    };

    const postersLimit = () => {
        const allPostersLength = data.length;
        if (allPostersLength) {
            return posters.length >= allPostersLength;
        }
    };

    const click = () => {
        updatePosters();
        setIsClicked(true);
    };

    useEffect(() => {
        const initialPosters = data.slice(0, INITIAL_AMOUNT_OF_POSTERS);
        setPosters(initialPosters);
    }, [data]);

    useEffect(() => {
        if (postersLimit()) {
            setIsVisibleBtn(false);
        }
    }, [posters]);

    useEffect(() => {
        if (onScreen && isClicked) {
            updatePosters();
        }
    }, [onScreen]);

    return (
        <Container>
            <div className={styles.posters}>
                {posters.map((film, index) => {
                    const { title, poster, query, certificate } = film;
                    return (
                        <div className={styles.posters__item} key={index + title!}>
                            <Poster data={{ title, poster, query, certificate }} />
                        </div>
                    );
                })}
            </div>
            {isVisibleBtn ? (
                <button className={styles.btn} onClick={click} ref={btn}>
                    Показать еще
                </button>
            ) : null}
        </Container>
    );
}

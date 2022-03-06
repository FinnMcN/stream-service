//hooks
import { useEffect, useState, useCallback, useRef, useMemo } from "react";

//components
import Poster from "./poster/Poster";
import Container from "../container/Container";

//styles
import styles from "./postersSlider.module.scss";

//types
import { MouseEvent } from "react";
import type { IPoster } from "@/types/PosterData";

/* import { FixedSizeList } from "react-window"; */

export default function PostersBlock({ data }: { data: IPoster[] }) {
    const [posters, setPosters] = useState<typeof data>([]);
    const INITIAL_AMOUNT_OF_POSTERS = 12;
    const displayedPosters = useRef(INITIAL_AMOUNT_OF_POSTERS);

    console.log("render");

    const getNewPosters = () => {
        const postersToShow = 4;
        const endDisplayedPosters = displayedPosters.current + postersToShow;

        const newPosters = data.slice(displayedPosters.current, endDisplayedPosters);
        displayedPosters.current = endDisplayedPosters;

        return newPosters;
    };

    const click = () => {
        setPosters((state) => [...state, ...getNewPosters()]);
    };

    useEffect(() => {
        const initialPosters = data.slice(0, displayedPosters.current);
        setPosters(initialPosters);
    }, [data]);

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
            <div className={styles.btn} onClick={click}>
                Показать еще
            </div>
        </Container>
    );
}

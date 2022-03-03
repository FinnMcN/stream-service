//hooks
import { useEffect, useState, useCallback, useRef } from "react";

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
    console.log(posters);

    const loadPosters = useCallback(
        (e: MouseEvent): void => {
            const postersToShow = 4;
            const endDisplayedPosters = displayedPosters.current + postersToShow;

            const newPosters = data.slice(displayedPosters.current, endDisplayedPosters);
            setPosters((state) => [...state, ...newPosters]);

            displayedPosters.current = endDisplayedPosters;
        },
        [data],
    );

    useEffect(() => {
        const initialPosters = data.slice(0, INITIAL_AMOUNT_OF_POSTERS);
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
            <div className={styles.btn} onClick={loadPosters}>
                Show more
            </div>
        </Container>
    );
}

import { useState } from "react";
import { MouseEvent } from "react";

//components
import Poster from "./poster/Poster";
import Container from "../container/Container";

//styles
import styles from "./postersSlider.module.scss";

//types
import type { IPoster } from "@/types/PosterData";

/* import { FixedSizeList } from "react-window"; */

export default function PostersBlock({ data }: { data: IPoster[] }) {
    const loadPosters = (e: MouseEvent): void => {};

    return (
        <Container>
            <div className={styles.posters}>
                {data.map((film, index) => {
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

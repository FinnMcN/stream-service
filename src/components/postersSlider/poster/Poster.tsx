import styles from "./poster.module.scss";
import LinkRouter from "../../linkRouter/LinkRouter";
import { memo } from "react";

import type { IPoster } from "@/types/PosterData";

//props have type any because of next/image src type
function Poster({ data }: any) {
    const { title, poster, query, certificate } = data;

    return (
        <LinkRouter path={`/films/${query}`}>
            <div className={styles.poster}>
                <div className={styles.poster__inner}>
                    <div className={styles.poster__side}>
                        <img className={styles.poster__img} src={poster} alt="" />
                        {certificate !== "" ? (
                            <div className={styles.poster__rating}>{certificate}</div>
                        ) : null}
                    </div>
                    <div className={`${styles.poster__side} ${styles.poster__about}`}>
                        <div className={styles.poster__title}>{title}</div>
                    </div>
                </div>
            </div>
        </LinkRouter>
    );
}

const comparePosterProps = (prev: IPoster, next: IPoster) =>
    prev.title === next.title &&
    prev.poster === next.poster &&
    prev.query === next.query &&
    prev.certificate === next.certificate;

//prevent re-renders already displayed posters
export default memo(Poster, comparePosterProps);

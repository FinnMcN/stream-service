import Image from "next/image";

import styles from "./poster.module.scss";
import LinkRouter from "../../linkRouter/LinkRouter";

//props have type any because of next/image src type
export default function Poster({ data }: any) {
    const { title, poster, query, certificate } = data;

    return (
        <LinkRouter path={`/films/${query}`}>
            <div className={styles.poster}>
                <div className={styles.poster__inner}>
                    <div className={styles.poster__side}>
                        <img className={styles.poster__img} src={poster} alt="" />
                        <div className={styles.poster__rating}>{certificate}</div>
                    </div>
                    <div className={`${styles.poster__side} ${styles.poster__about}`}>
                        <div className={styles.poster__title}>{title}</div>
                    </div>
                </div>
            </div>
        </LinkRouter>
    );
}

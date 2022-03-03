import Link from "next/link";
import styles from "./styles.module.scss";
import Input from "../../inputs/Input";
import DropList from "./DropList";

interface Categories {
    films: string[];
    serials: string[];
}

const qwe: Categories = {
    films: [
        "Вестерны",
        "Семейные",
        "Фэнтези",
        "Биографические",
        "Боевики",
        "Военные",
        "Детективы",
        "Криминал",
        "Приключения",
        "Драмы",
        "Спортивные",
        "Фантастика",
        "Комедии",
        "Триллеры",
        "Ужасы",
    ],
    serials: [
        "Военные",
        "Боевики",
        "Триллеры",
        "Ужасы",
        "Приключения",
        "Семейные",
        "Фантастика",
        "Фэнтези",
        "Драмы",
        "Комедии",
        "Детективы",
    ],
};

export default function NavMenu() {
    return (
        <div className={styles.nav}>
            <div className={styles.nav__block}>
                <Link href="/films">
                    <a className={styles.nav__item}>Фильмы</a>
                </Link>
                <DropList categories={qwe.films} />
            </div>
            <Link href="/serials">
                <a className={styles.nav__item}>Сериалы</a>
            </Link>
            <Input type="text" />
        </div>
    );
}

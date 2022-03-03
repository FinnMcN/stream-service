import styles from "./styles.module.scss";
interface IDropList {
    categories: string[];
    children?: React.ReactNode;
}

export default function DropList({ categories }: IDropList) {
    return (
        <div className={styles.nav__categories}>
            {categories?.map((category, index) => {
                return (
                    <div className={styles.nav__category} key={index + category}>
                        {category}
                    </div>
                );
            })}
        </div>
    );
}

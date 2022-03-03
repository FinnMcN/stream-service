import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.scss";

export default function Logo() {
    return (
        <Link href="/">
            <a className={styles.logo}>
                <Image src="/img/custom-spiral.svg" width={35} height={35} alt="" />
                <Image src="/img/Rewind.svg" width={70} height={30} alt="" />
            </a>
        </Link>
    );
}

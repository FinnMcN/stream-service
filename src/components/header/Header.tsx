//next
import Link from "next/link";

//components
import Container from "../container/Container";
import Logo from "../logo/Logo";
import NavMenu from "./navMenu/NavMenu";
import ThemeButtom from "../themeButton/ThemeButton";

//icons
import { FaUser } from "react-icons/fa";

//styles
import styles from "./header.module.scss";

export default function Header() {
    const isLogin = true;
    return (
        <div>
            <Container>
                <div className={styles.header}>
                    <Logo />
                    <NavMenu />
                    <ThemeButtom />
                    <>
                        {isLogin ? (
                            <Link href="/profile">
                                <a className={styles.user}>
                                    <FaUser className={styles.user__icon} color="white" />
                                </a>
                            </Link>
                        ) : (
                            <div>Sign Up</div>
                        )}
                    </>
                </div>
            </Container>
        </div>
    );
}

import styles from "./footer.module.scss";
import Logo from "../logo/Logo";
import { FaTelegram, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Container from "../container/Container";

export default function Footer() {
    return (
        <Container>
            <footer className={styles.footer}>
                <Logo />
                <div className={styles.footer__socials}>
                    <FaTelegram size={24} />
                    <FaInstagram size={24} />
                    <FaYoutube size={24} />
                    <FaTiktok size={24} />
                </div>
                <span>© LoremIpsum, 2022-2023</span>
            </footer>
        </Container>
    );
}

/* import styles from "./themeButton.module.scss"; */
import { useTheme } from "../../utils/themeContext";
import Button from "@mui/material/Button";

export default function ThemeButton() {
    const { toggleTheme } = useTheme();
    return (
        <Button variant="contained" onClick={toggleTheme}>
            Сериалы
        </Button>
    );
}

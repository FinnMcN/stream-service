import { useRef, useEffect, useState, useCallback } from "react";
import styles from "./input.module.scss";

interface IInput {
    type: string;
    placeholder?: string;
}

export default function Input({ type }: IInput) {
    const input = useRef<HTMLInputElement>(null);
    const [focus, setFocus] = useState<boolean>(false);

    const focusListener = () => {
        if (!focus) {
            input.current?.focus();
            setFocus(true);
        }
    };

    const clickListener = useCallback(
        (e: any) => {
            if (focus && e.target !== input.current) {
                setFocus(false);
            }
        },
        [focus],
    );

    useEffect(() => {
        document.addEventListener("click", clickListener);

        return () => {
            document.removeEventListener("click", clickListener);
        };
    }, [clickListener]);

    return (
        <input
            className={focus ? `${styles.input} ${styles.input_focus}` : styles.input}
            type={type}
            ref={input}
            onClick={focusListener}
        />
    );
}

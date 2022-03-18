import { useState, useEffect } from "react";
import { RefObject } from "react";

interface IObserverOptions {
    root: HTMLElement | null;
    rootMargin: string;
    threshold: number;
}

type Observer = (ref: RefObject<HTMLButtonElement> | null, options: IObserverOptions) => boolean;

const useObserver: Observer = (ref, options) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        const node = ref.current;

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return isIntersecting;
};

export default useObserver;

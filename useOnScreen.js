import { useEffect, useState } from "react";

export default function useOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []); //CHECK!

    return isIntersecting;
}

import { useEffect, useState } from "react";

const useMousePosition = () => {
    const getMousePosition = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setMousePosition({ mouseX, mouseY });
    };

    const [mousePosition, setMousePosition] = useState({
        mouseX: 0,
        mouseY: 0,
    });

    useEffect(() => {
        document.addEventListener("mousemove", getMousePosition);

        return () =>
            document.removeEventListener("mousemove", getMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;

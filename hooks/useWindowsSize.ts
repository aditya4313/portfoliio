
import { useState, useEffect } from "react";

export const UsewindowSize = () => {
    const[windowSize, setwindowsSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        function handleResize(){
            setwindowsSize ({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);
    }, []);
    return windowSize;
}


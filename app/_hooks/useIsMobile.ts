import {useEffect, useState} from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        setIsMobile(window.screen.width <= 1024)
    }, []);

    return isMobile
}
import {useEffect, useState} from "react";

export const usePlayedAnimation = () => {
    const [playedAnimation, setPlayedAnimation] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const triggerPoint = 0.75; // Adjust this value as needed

        if (!playedAnimation && scrollY > windowHeight * triggerPoint) {
            setPlayedAnimation(true);
        }
    };

    useEffect(() => {
        window.addEventListener('', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}
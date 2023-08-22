import React from 'react';
import Image from "next/image";
import styles from "@/app/_components/Footer/styles.module.css";

import ellipse1 from "@/public/ellipse1.png";
import ellipse2 from "@/public/ellipse2.png";
import ellipse3 from "@/public/ellipse3.png";

const FooterItems = () => {
    return (
        <>
            <Image className={`${styles.ellipse} ${styles.ellipse1}`} src={ellipse1} alt={'ellipse1'} quality={100}/>
            <Image className={`${styles.ellipse} ${styles.ellipse2}`} src={ellipse2} alt={'ellipse2'} quality={100}/>
            <Image className={`${styles.ellipse} ${styles.ellipse3}`} src={ellipse3} alt={'ellipse3'} quality={100}/>
        </>
    );
};

export default FooterItems;
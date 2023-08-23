import React from 'react';
import Image from "next/image";
import styles from "@/app/_components/Prices/styles.module.css";
import price1 from "@/public/price1.png";
import price2 from "@/public/price2.png";

const PricesElements = () => {
    return (
        <div>
            <Image className={styles.price1} src={price1} alt={'price'} quality={100}/>
            <Image className={styles.price2} src={price2} alt={'price'} quality={100}/>
        </div>
    );
};

export default PricesElements;
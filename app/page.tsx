import {Footer, Header, Introduction, Payments, Prices} from "@/app/_components";

import styles from './styles.module.css'
import Description from "@/app/_components/Description";
import React from "react";
import PricesElements from "@/app/_components/Prices/PricesElements";

import looter from "@/public/mainLooter.png";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <Header/>
            <Introduction>
                <Image className={styles.mainLooter} src={looter} alt={'looter'} quality={100}/>
            </Introduction>
            <Description/>
            <Prices>
                <PricesElements/>
            </Prices>
            <Payments/>
            <Footer/>
        </main>
    )
}

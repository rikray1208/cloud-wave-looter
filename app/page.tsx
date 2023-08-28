"use client"

import {Footer, Header, Introduction, Payments, Prices} from "@/app/_components";

import styles from './styles.module.css'
import Description from "@/app/_components/Description";
import React, {useEffect} from "react";
import PricesElements from "@/app/_components/Prices/PricesElements";

import Image from "next/image";
import l1 from '@/public/l1.png'

export default function Home() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    return (
        <main className={styles.mainContainer}>
            <Header/>
            <Introduction>
                <Image className={styles.l1} src={l1} alt={'looter1'} quality={100}/>
                <Image className={styles.l2} src={l1} alt={'looter2'} quality={100}/>
                <Image className={styles.l3} src={l1} alt={'looter3'} quality={100}/>
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

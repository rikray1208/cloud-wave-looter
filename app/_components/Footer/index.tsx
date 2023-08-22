import React from 'react';

import Image from "next/image";


import ellipse1 from '@/public/ellipse1.png'
import ellipse2 from '@/public/ellipse2.png'
import ellipse3 from '@/public/ellipse3.png'

import styles from './styles.module.css'
import Link from "next/link";
import {TG_LINK} from "@/utils/constants";
import FooterItems from "@/app/_components/Footer/FooterItems";

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <div>
                    <h1 className={styles.title}>
                        ЗАИНТЕРЕСОВАЛО
                        <br/>
                        <span>ИЛИ</span>
                    </h1>
                    <h1 className={styles.title}>
                        ОСТАЛИСЬ ВОПРОСЫ?
                    </h1>
                </div>
                <span>ТОГДА ПИШИ НАМ!</span>
                <Link href={TG_LINK} className={styles.infoBtn}>
                    Связаться с нами
                </Link>
            </div>
            <div className={styles.videoContainer}>
                <video
                    className={styles.video}
                    width={540}
                    height={771}
                    autoPlay
                    muted
                    loop
                >
                    <source className={styles.source} src={'panel.mp4'} type="video/mp4"/>
                </video>
                <div className={styles.mask}/>
            </div>
            <FooterItems/>
        </section>
    );
};

export default Footer;
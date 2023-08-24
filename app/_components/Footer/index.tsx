import React from 'react';

import styles from './styles.module.css'
import Link from "next/link";
import {TG_LINK} from "@/utils/constants";
import FooterItems from "@/app/_components/Footer/FooterItems";

import telegram from '@/public/footerTelegram.png'
import Image from "next/image";

import ds from '@/public/ds.png'
import vk from '@/public/vk.png'
import tg from '@/public/telegramWhite.png'

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <div>
                    <h1 className={styles.title}>
                        ПОКУПКА ПРОИСХОДИТ
                        <br/>
                        <span>ЧЕРЕЗ</span>
                    </h1>
                    <h1 className={styles.title}>
                        ТЕЛЕГРАМ БОТА
                    </h1>
                </div>
                <div className={styles.socialContainer}>
                    <Link href={'https://discord.gg/BkgQwVnB5'}>
                        <Image src={ds} alt={'ds'} width={48} quality={100}/>
                    </Link>
                    <Link href={'https://vk.com/rexto.blog'}>
                        <Image src={vk} alt={'vk'} width={48} quality={100}/>
                    </Link>
                    <Link href={'https://t.me/RostyslavPotapov'}>
                        <Image src={tg} alt={'tg'} width={48} quality={100}/>
                    </Link>
                </div>
                <Link href={TG_LINK} className={styles.infoBtn}>
                    <Image className={styles.tgIcon} src={telegram} alt={'telegram'} width={48} quality={100}/>
                    Приобрести
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
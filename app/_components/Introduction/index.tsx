import React from 'react';
import Image from "next/image";

import looter from '@/public/mainLooter1.png'
import mobileLooter from '@/public/mobileMainLooter.png'

import styles from './styles.module.css'

const Introduction = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.h1}>CloudWave <span>Steam Inventory Looter</span></h1>
                <p className={styles.p}><span>Удобный инструмент</span> для быстрой  передачи вещей с N аккаунтов на 1.</p>
                <p className={styles.p}>Выбор нужных игр, <span>фильтрация</span> предметов, <span>автоматическое принятие трейдов, статистика.</span></p>
            </div>
            <Image className={styles.looter} src={looter} alt={'looter'} quality={100}/>
            <Image className={styles.mobileLooter} src={mobileLooter} alt={'mobileLooter'} quality={100}/>

        </section>
    );
};

export default Introduction;
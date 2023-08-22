"use client"

import React from 'react';
import Image from "next/image";

import looter from '@/public/mainLooter1.png'
import mobileLooter from '@/public/mobileMainLooter.png'

import styles from './styles.module.css'

import {motion, Variants} from "framer-motion"

const title: Variants = {
    hide: {
        x: -1000,
    },
    show: {
        x: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        },
    },
};

const imageAnimation: Variants = {
    hide: {
        x: 810,
    },
    show: {
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
};

const Introduction = () => {
    return (
        <section className={styles.container}>
            <div>
                <motion.div
                    viewport={{ once: true }}
                    variants={title}
                    whileInView="show"
                    initial="hide"
                    className={styles.textContainer}
                >
                    <h1 className={styles.h1}>CloudWave <span>Steam Inventory Looter</span></h1>
                    <p className={styles.p}><span>Удобный инструмент</span> для быстрой  передачи вещей с N аккаунтов на 1.</p>
                    <p className={styles.p}>Выбор нужных игр, <span>фильтрация</span> предметов, <span>автоматическое принятие трейдов, статистика.</span></p>
                </motion.div>
            </div>
            <motion.div
                viewport={{ once: true }}
                variants={imageAnimation}
                whileInView="show"
                initial="hide"
            >
                <Image className={styles.looter} src={looter} alt={'looter'} quality={100}/>
            </motion.div>
            <Image className={styles.mobileLooter} src={mobileLooter} alt={'mobileLooter'} quality={100}/>
        </section>
    );
};

export default Introduction;
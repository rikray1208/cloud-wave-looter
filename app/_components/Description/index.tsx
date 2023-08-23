"use client"

import React from 'react';
import Image from "next/image";

import triangles1 from '@/public/triangles1.png'
import triangles2 from '@/public/triangles2.png'
import footer from '@/public/footer.png'

import styles from './styles.module.css'
import {BlockTitle, Card} from "@/app/_components/ui";

import {motion, Variants} from "framer-motion"
import {useIsMobile} from "@/app/_hooks/useIsMobile";

const items = [
    {key: 1, value: <>Поддержка <span>прокси</span></>},
    {key: 2, value: <><span>Несколько</span> трейд ссылок</>},
    {key: 3, value: <><span>Автоматическое</span> принятие входящих трейдов</>},
    {key: 4, value: <><span>Фильтры</span> для популярных стим игр</>},
    {key: 5, value: <>Возможность обрабатывать <span>разные</span> инвентари</>},
    {key: 6, value: <><span>Отслеживание</span> аккаунтов с КТ</>},
    {key: 7, value: <>Авторизация по <span>токену</span></>},
    {key: 8, value: <>Разные <span>режимы</span> работы</>},
    {key: 9, value: <>Удобная <span>таблица</span> аккаунтов</>},
    {key: 10, value: <>Статистика</>},
]

const descriptionAnimation: Variants = {
    hide: {
        y: 500,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const trianglesLeft: Variants = {
    hide: {
        x: '-100%',
    },
    show: {
        x: 0,
        transition: {
            x: {duration: 0.7, stiffness: 1000, velocity: -100},
            ease: "linear",
        },
    },
};

const trianglesRight: Variants = {
    hide: {
        x: '100%',
    },
    show: {
        x: 0,
        transition: {
            x: {duration: 0.7, stiffness: 1000, velocity: -100},
            ease: "linear",
        },
    },
};

const Description = () => {
    const isMobile = useIsMobile()

    return (
        <section id={'description'} className={styles.container}>
            <motion.div
                viewport={{ once: true }}
                variants={trianglesLeft}
                whileInView="show"
                initial="hide"
            >
                <Image className={styles.triangles1} src={triangles1} alt={'triangle'} width={814} height={814} quality={100}/>
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                variants={trianglesRight}
                whileInView="show"
                initial="hide"
            >
                <Image className={styles.triangles2} src={triangles2} alt={'triangle'} width={814} height={814} quality={100}/>
            </motion.div>

            <motion.div
                viewport={{ once: true }}
                variants={descriptionAnimation}
                whileInView="show"
                initial="hide"
                className={styles.cardsContainer}
            >
                <BlockTitle>Функционал софта</BlockTitle>
                <Card>
                    <ul className={styles.list}>
                        {
                            items.map(item =>
                                <li key={item.key} className={styles.item}>
                                    {isMobile ?
                                        <Image src={`/list/${item.key}.png`} alt={`${item.key}`} width={38} height={38} quality={100} />
                                        :
                                        <Image src={`/list/${item.key}.png`} alt={`${item.key}`} width={60} height={60} quality={100}/>
                                    }
                                    <p>{item.value}</p>
                                </li>
                            )
                        }
                    </ul>
                </Card>
                <Image className={styles.looter} src={footer} alt={'looter'} quality={100} height={550}/>
            </motion.div>
        </section>
    );
};

export default Description;
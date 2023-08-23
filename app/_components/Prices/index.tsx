"use client"

import React from 'react';
import {BlockTitle, Card} from "@/app/_components/ui";

import styles from './styles.module.css'

import { orbitron } from '@/fonts'
import {motion, Variants} from "framer-motion"

const items = [
    {key: 1, title: 'Подписка 1 месяц', value: '5.99$'},
    {key: 2, title: 'Подписка 6 месяц', value: '19.99$'},
    {key: 3, title: 'Подписка 1 год', value: '24.99$'},
    {key: 4, title: 'Подписка LT', value: '49.99$'},
]

const list: Variants = {
    open: {
        transition: { staggerChildren: 1.07, delayChildren: 1.04 }
    },
    closed: {
        transition: { staggerChildren: 0.1, staggerDirection: 1 }
    }
};

const child: Variants = {
    open: {
        y: 500,
    },
    closed: {
        y: 0,
        transition: {
            y: {duration: 0.3, stiffness: 1000, velocity: -100},
            ease: "linear",
        },
    },
};


interface PricesProps {
    children: React.ReactNode
}

const Prices: React.FC<PricesProps> = ({ children }) => {

    return (
        <section className={styles.container}>
            <BlockTitle>Цены</BlockTitle>
            <motion.ul
                className={styles.list}
                viewport={{ once: true }}
                variants={list}
                whileInView="closed"
                initial="open"
            >
                {
                    items.map((item) =>
                        <motion.div
                            key={item.key}
                            viewport={{ once: true }}
                            variants={child}
                        >
                            <Card>
                                <li className={styles.item}>
                                    <div className={styles.itemClaudWave}>
                                        <p style={orbitron.style}>CloudWave</p>
                                        <p style={orbitron.style}>looter</p>
                                    </div>
                                    <p>{item.title}</p>
                                    <span>{item.value}</span>
                                </li>
                            </Card>
                        </motion.div>
                    )
                }
            </motion.ul>
            {children}
        </section>
    );
};

export default Prices;
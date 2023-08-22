"use client"

import React from 'react';
import {BlockTitle} from "@/app/_components/ui";

import {motion, Variants} from "framer-motion"

import styles from './styles.module.css'

const list1 = [
    {id: 1, value: 'криптовалюта'},
    {id: 3, value: 'банковская карта'},
    {id: 4, value: 'webmoney'},
    {id: 5, value: 'advcash'},
]

const list2 = [
    {id: 6, value: 'ключи tf2'},
    {id: 7, value: 'qiwi'},
    {id: 8, value: 'payeer'},
    {id: 9, value: 'boosty'},
    {id: 10, value: 'lolz'},
]

const listAnm1: Variants = {
    hide: {
        x: -1000,
    },
    show: {
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
    },
};

const listAnm2: Variants = {
    hide: {
        x: 1000,
    },
    show: {
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
    },
};

const Payments = () => {
    return (
        <section className={styles.container}>
            <BlockTitle light={true}>Способы оплаты</BlockTitle>
            <div className={styles.listContainer}>
                <motion.ul
                    viewport={{ once: true }}
                    variants={listAnm1}
                    className={styles.list}
                    initial="hide"
                    whileInView="show"
                >
                    {
                        list1.map(el =>
                            <li key={el.id} className={styles.item}>{el.value}</li>
                        )
                    }
                </motion.ul>
                <motion.ul
                    viewport={{ once: true }}
                    variants={listAnm2}
                    className={styles.list}
                    initial="hide"
                    whileInView="show"
                >
                    {
                        list2.map(el =>
                            <li key={el.id} className={styles.item}>{el.value}</li>
                        )
                    }
                </motion.ul>
            </div>
        </section>
    );
};

export default Payments;
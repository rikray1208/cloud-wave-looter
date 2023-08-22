import {Footer, Header, Introduction, Payments, Prices} from "@/app/_components";

import styles from './styles.module.css'
import Description from "@/app/_components/Description";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <Header/>
            <Introduction/>
            <Description/>
            <Prices/>
            <Payments/>
            <Footer/>
        </main>
    )
}

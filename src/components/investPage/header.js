import styles from '@/styles/investments.module.css'
import Wave from './wave'

export default function IHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.titleText}>
                    Explore and Invest
                </h1>
            </div>

            <Wave />
        </div>
    );
}
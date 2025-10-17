import React from 'react';
import styles from './Alert.module.css';

export default function Alert({ text, callback }) {
    const handleConfirm = () => {
        if (callback) {
            callback();
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.alertContent}>
                <div className={styles.contentWrap}>{text}</div>
                <div className={styles.buttonWrap}>
                    <button onClick={handleConfirm}>확인</button>
                </div>
            </div>
        </div>
    );
}

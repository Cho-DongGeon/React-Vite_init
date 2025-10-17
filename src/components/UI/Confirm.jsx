import React from 'react';
import styles from './Confirm.module.css';
import styles from './'

export default function Confirm({ text, onConfirm, onCancel }) {
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.alertContent}>
                <div className={styles.contentWrap}>{text}</div>
                <div className={styles.buttonWrap}>
                    <button onClick={handleConfirm}>확인</button>
                    <button onClick={handleCancel}>취소</button>
                </div>
            </div>
        </div>
    );
}

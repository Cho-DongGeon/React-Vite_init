import { Link } from 'react-router-dom';
import styles from './GNB.module.css';

function GNB() {
    return (
        <nav className={styles.gnb}>
            <div className={styles.gnbContainer}>
                <Link to="/" className={styles.gnbLogo}>
                    React Router Test
                </Link>
                <ul className={styles.gnbMenu}>
                    <li>
                        <Link to="/" className={styles.gnbLink}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={styles.gnbLink}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/list" className={styles.gnbLink}>
                            List
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default GNB;

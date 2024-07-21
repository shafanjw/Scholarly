import styles from '../styles/Subscription.module.css';

const AdditionalFooter = () => {
    return (
        <div className={styles.section1}>
            <div className={styles.container1}>
                <div className={styles.content1}>
                    <div className={styles.footerText}>© 2024 Scholarly. All Rights Reserved</div>
                    <div className={styles.socialIcons}>
                        <img className={styles.socialIcon} alt="Social Icon 1" src="Social icon1.png" />
                        <img className={styles.socialIcon} alt="Social Icon 2" src="Social icon2.png" />
                        <img className={styles.socialIcon} alt="Social Icon 3" src="Social icon3.png" />
                        <img className={styles.socialIcon} alt="Social Icon 4" src="Social icon4.png" />
                        <img className={styles.socialIcon} alt="Social Icon 5" src="Social icon6.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalFooter;

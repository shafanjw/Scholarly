import styles from '../styles/ProfileNavbar.module.css';

const ProfileNavbar = () => {
    return (
        <div className={styles.navbarHome2}>
            <div className={styles.navbarHome2Child} />
            <div className={styles.logo11Parent}>
                <img className={styles.logo11} alt="Logo" src="logoPutih.png" />
                <div className={styles.homeParent}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/tryout" className={styles.navLink}>Try Out</a>
                    <a href="/qna" className={styles.navLink}>QNA</a>
                    <a href="/leaderboard" className={styles.navLink}>Leaderboard</a>
                    <a href="/subscription" className={styles.navLink}>Subscription</a>
                </div>
                <a href="/profile"><img className={styles.frameChild} alt="Profile" src="fotoProfil.png" /></a>

            </div>
        </div>
    );
};

export default ProfileNavbar;

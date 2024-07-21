import styles from '../styles/Navbar.module.css';

const HomeNavbar = () => {
    return (
        <div className={styles.navbarHome2}>
            <div className={styles.navbarHome2Child} />
            <div className={styles.logo11Parent}>
                <img className={styles.logo11} alt="Logo" src="logoIjo.png" />
                <div className={styles.homeParent}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/tryout" className={styles.navLink}>Try Out</a>
                    <a href="/qna" className={styles.navLink}>QNA</a>
                    <a href="/leaderboard" className={styles.navLink}>Leaderboard</a>
                    <a href="/subscription" className={styles.subscription}>Subscription</a>
                </div>
                <img className={styles.frameChild} alt="Profile" src="fotoProfil.png" />
            </div>
        </div>
    );
};

export default HomeNavbar;

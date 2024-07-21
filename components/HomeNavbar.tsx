import styles from '../styles/Navbar.module.css';

const HomeNavbar = () => {
    return (
        <div className={styles.navbarHome2}>
            <div className={styles.navbarHome2Child} />
            <div className={styles.logo11Parent}>
                <img className={styles.logo11} alt="Logo" src="logoIjo.png" />
                <div className={styles.homeParent}>
                    <div className={styles.home}>Home</div>
                    <div className={styles.home}>Try Out</div>
                    <div className={styles.home}>QNA</div>
                    <div className={styles.home}>Leaderboard</div>
                    <b className={styles.subscription}>Subscription</b>
                </div>
                <img className={styles.frameChild} alt="Profile" src="fotoProfil.png" />
            </div>
        </div>
    );
};

export default HomeNavbar;

import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from '../styles/Home.module.css';
import React from 'react';


const Masuk:NextPage = () => {
  	
  	const onGroupContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.masuk}>
      			<img className={styles.sideRightIcon} alt="" src="sideRight1.png" />
      			<div className={styles.edumindsAllRights}>© 2024 eduMinds. All Rights Reserved</div>
      			<img className={styles.logo12} alt="" src="logoIjo.png" />
      			<b className={styles.masuk1}>Masuk</b>
      			<div className={styles.groupParent}>
        				<div className={styles.frameParent} onClick={onGroupContainerClick}>
          					<div className={styles.nomerPonselAtauEmailWrapper}>
            						<div className={styles.nomerPonselAtau}>Nomer Ponsel atau Email</div>
          					</div>
          					<div className={styles.frameWrapper}>
            						<div className={styles.kataSandiParent}>
              							<div className={styles.kataSandi}>Kata Sandi</div>
              							<img className={styles.fieyeOffIcon} alt="" src="fi:eye-off.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.lupaKataSandiContainer}>
          					<span className={styles.lupaKataSandiContainer1}>
            						<span>Lupa kata sandi?</span>
              							<span className={styles.span}>{` `}</span>
              							<span className={styles.klikDisini}>Klik disini</span>
              							</span>
              							</div>
              							<div className={styles.belumPunyaAkunParent}>
                								<div className={styles.belumPunyaAkun}>{`Belum punya akun? `}</div>
                								<div className={styles.daftarSekarang} onClick={onGroupContainerClick}>Daftar Sekarang</div>
              							</div>
              							<div className={styles.lineParent}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.atauMasukDengan}>atau masuk dengan</div>
              							</div>
              							<div className={styles.masukWrapper}>
                								<div className={styles.masuk2}>Masuk</div>
              							</div>
              							<div className={styles.button}>
                								<div className={styles.download1Parent}>
                  									<img className={styles.download1Icon} alt="" src="buttonGoogle.png" />
                  									<div className={styles.google}>Google</div>
                								</div>
              							</div>
              							</div>
              							</div>);
            						};
            						
            						export default Masuk;
            						
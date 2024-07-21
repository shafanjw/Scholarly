import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import styles from '../styles/Home.module.css';
import React from 'react';
import { TextInput, PasswordInput } from '../components/LoginInput';
import { useRouter } from 'next/router';

const Masuk:NextPage = () => {
  	
	const [phoneOrEmail, setPhoneOrEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
  
	const onGroupContainerClick = useCallback(() => {
	  setPhoneOrEmail('aksa@aksamail.com');
	  setPassword('password123');
	}, []);

	const daftarSekarangClick = useCallback(() => {
		router.push('/signup'); // Navigasi ke halaman Signup
	  }, [router]);

	const masukButtonClick = useCallback(() => {
		router.push('/subscription'); // Navigasi ke halaman subscription
	  }, [router]);
  	
  	return (
    		<div className={styles.masuk}>
      			<img className={styles.sideRightIcon} alt="" src="sideRight1.png" />
      			<div className={styles.edumindsAllRights}>© 2024 eduMinds. All Rights Reserved</div>
      			<img className={styles.logo12} alt="" src="logoIjo.png" />
      			<b className={styles.masuk1}>Masuk</b>
      			<div className={styles.groupParent}>
        				<div className={styles.frameParent} onClick={onGroupContainerClick}>
						<TextInput
						label="Nomer Ponsel atau Email"
						value={phoneOrEmail}
						onChange={(e) => setPhoneOrEmail(e.target.value)}
					/>
						<PasswordInput
						label="Kata Sandi"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
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
                								<div className={styles.daftarSekarang} onClick={daftarSekarangClick}>Daftar Sekarang</div>
              							</div>
              							<div className={styles.lineParent}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.atauMasukDengan}>atau masuk dengan</div>
              							</div>
              							<div className={styles.masukWrapper}>
                								<div className={styles.masuk2} onClick={masukButtonClick}>Masuk</div>
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
            						
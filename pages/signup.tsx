import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import styles from '../styles/Daftar.module.css';
import React from 'react';
import { TextInput, PasswordInput, PickInput } from '../components/LoginInput';
import TanggalLahirInput from '../components/TanggalLahirInput';
import { useRouter } from 'next/router';


const Signup:NextPage = () => {
  	
	const [phoneOrEmail, setPhoneOrEmail] = useState('');
	const [namaLengkap, setNamaLengkap] = useState('');
	const [jurusanYangDiminati, setJurusanYangDiminati] = useState('');
	const [password, setPassword] = useState('');
	const [tanggalLahir, setTanggalLahir] = useState({ dd: '', mm: '', yyyy: '' });
	const router = useRouter();
  
	const onGroupContainerClick = useCallback(() => {
        setPhoneOrEmail('aksa@aksamail.com');
        setJurusanYangDiminati('Sistem Informasi');
        setNamaLengkap('Aksa Dewantara');
	  setPhoneOrEmail('aksa@aksamail.com');
	  setPassword('password123');
	  setTanggalLahir({ dd: '01', mm: '01', yyyy: '2000' });
	}, []);

	const daftarButtonClick = useCallback(() => {
		router.push('/'); // Navigasi ke halaman Login
	  }, [router]);
  	
  	return (
    		<div className={styles.daftar}>
      			<img className={styles.sideRightIcon} alt="" src="sideRight2.png" />
      			<div className={styles.edumindsAllRights}>© 2024 eduMinds. All Rights Reserved</div>
      			<img className={styles.logo12} alt="" src="logoIjo.png" />
      			<b className={styles.daftar1}>Daftar</b>
      			<div className={styles.groupParent}>
        				<div className={styles.frameParent} onClick={onGroupContainerClick}>
                        <TextInput
						label="Nama Lengkap"
						value={namaLengkap}
						onChange={(e) => setNamaLengkap(e.target.value)}
					/>
						<TanggalLahirInput
						label="Tanggal Lahir"
						value={tanggalLahir}
						onChange={setTanggalLahir}
					/>
						<PickInput
						label="Jurusan Yang Diminati"
						value={jurusanYangDiminati}
						onChange={(e) => setJurusanYangDiminati(e.target.value)}
					/>
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
						<PasswordInput
						label="Konfirmasi Kata Sandi"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
        				</div>
                        <div className={styles.daftarWrapper}>
                								<div className={styles.daftar2} onClick={daftarButtonClick}>Daftar</div>
              							</div>
              							</div>
              							</div>);
            						};
            						
            						export default Signup;
            						
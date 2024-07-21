import { useState, useCallback } from 'react';
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import styles from '../styles/Profile.module.css';
import HomeNavbar from '../components/HomeNavbar'
import ProfileNavbar from '../components/ProfileNavbar'
import HomeFooters from '../components/HomeFooters'


const Profile = () => {
  	const [isFrameOpen, setFrameOpen] = useState(false);
  	
  	const openFrame = useCallback(() => {
    		setFrameOpen(true);
  	}, []);
  	
  	const closeFrame = useCallback(() => {
    		setFrameOpen(false);
  	}, []);
  	
  	return (<>
    		<div className={styles.profile}>
      			<div className={styles.backgroundUserInfo} />
      			<div className={styles.profileInner}>
        				<div className={styles.aksaDewantaraParent}>
          					<div className={styles.aksaDewantara}>Aksa Dewantara</div>
          					<div className={styles.tentangSaya}>Tentang Saya</div>
          					<div className={styles.haloKenalinNama}>Halo! Kenalin nama gue Aksa, hobi main bola sama masak!</div>
          					<div className={styles.groupWrapper}>
            						<div className={styles.frameParent}>
              							<div className={styles.bergabungSejak2019Parent}>
                								<div className={styles.bergabungSejak2019}>Bergabung Sejak 2019</div>
                								<div className={styles.kotaBandung}>Kota Bandung</div>
                								<div className={styles.tryoutSelesai}>5 Tryout Selesai</div>
                								<div className={styles.frameChild} />
                								<div className={styles.frameItem} />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
          					</div>
          					<div className={styles.tujuan}>Tujuan</div>
          					<div className={styles.kampusImpian}>Kampus Impian</div>
          					<div className={styles.mendapatkanSkorUtbk}>Mendapatkan skor utbk diatas 680</div>
          					<div className={styles.universitasGadjahMada}>Universitas Gadjah Mada</div>
        				</div>
      			</div>
      			<img className={styles.profileItem} alt="" src="Frame 1078.png" onClick={openFrame} />
      			<img className={styles.backgroundKotakIcon} alt="" src="background-kotak.png" />
      			<div className={styles.frameGroup}>
        				<div className={styles.skorTryOutRataRataParent}>
          					<div className={styles.skorTryOutContainer}>
            						<p className={styles.skorTryOut}>Skor Try Out</p>
            						<p className={styles.skorTryOut}>Rata-Rata</p>
          					</div>
          					<div className={styles.rectangleParent}>
            						<div className={styles.groupItem} />
            						<div className={styles.wrapper}>
              							<div className={styles.div}>677</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.rankingKamuSaatIniParent}>
          					<div className={styles.skorTryOutContainer}>
            						<p className={styles.skorTryOut}>Ranking Kamu</p>
            						<p className={styles.skorTryOut}>Saat Ini</p>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupItem} />
            						<div className={styles.wrapper}>
              							<div className={styles.div}>
                								<span>2</span>
                								<span className={styles.span}>/250</span>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.waktuTryOutRataRataParent}>
          					<div className={styles.skorTryOutContainer}>
            						<p className={styles.skorTryOut}>Waktu Try Out</p>
            						<p className={styles.skorTryOut}>Rata-Rata</p>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupItem} />
            						<div className={styles.wrapper}>
              							<div className={styles.div}>
                								<span>120</span>
                								<span className={styles.menit1}>menit</span>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.subjekYangBisaDitingkatkanParent}>
        				<div className={styles.subjekYangBisa}>Subjek yang Bisa Ditingkatkan Lagi</div>
        				<div className={styles.groupDiv}>
          					<div className={styles.groupChild1} />
          					<div className={styles.penalaranUmum}>Penalaran Umum</div>
        				</div>
        				<div className={styles.saatIniSkor}>Saat ini, skor rata-rata kamu pada subjek ini masih di bawah rata-rata, dan kamu sering menghabiskan waktu lebih lama untuk menyelesaikan soal-soal dalam subjek ini. Meningkatkan kemampuan dalam penalaran umum akan membantu kamu menjadi lebih cepat dan efisien dalam memahami dan menjawab soal.</div>
      			</div>
      			<div className={styles.kamuJagoDalamMenyelesaikanParent}>
        				<div className={styles.kamuJagoDalam}>Kamu jago dalam menyelesaikan pengetahuan kuantitatif dengan cepat dan akurat. Skor kamu pada subjek ini selalu konsisten tinggi dalam beberapa tryout terakhir. Ini menunjukkan bahwa kamu memiliki pemahaman yang kuat dalam konsep- dan mampu menerapkannya dengan baik dalam soal-soal yang diberikan.</div>
        				<div className={styles.penilaianUmum}>Penilaian Umum</div>
        				<div className={styles.groupParent}>
          					<div className={styles.lineParent}>
            						<div className={styles.lineDiv} />
            						<div className={styles.kekurangan}>Kekurangan</div>
          					</div>
          					<div className={styles.lineGroup}>
            						<div className={styles.groupChild2} />
            						<div className={styles.kelebihan}>Kelebihan</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.rekomendasiParent}>
        				<div className={styles.rekomendasi}>Rekomendasi</div>
        				<div className={styles.berdasarkanAnalisisPerforma}>Berdasarkan analisis performa, kamu perlu mengerjakan minimal 3 soal tryout Penalaran Umum setiap hari. Dengan konsistensi ini, kamu akan lebih terbiasa dengan tipe soal dan pola yang sering     muncul.</div>
        				<div className={styles.frameDiv}>
          					<div className={styles.frameInner} />
          					<img className={styles.buttonIcon} alt="" src="PU.png" />
          					<div className={styles.penalaranUmum1}>{`Penalaran Umum `}</div>
        				</div>
        				<div className={styles.frameChild1} />
        				<div className={styles.kerjakanTryout}>Kerjakan Tryout</div>
      			</div>
                
      			<div className={styles.rectangleParent1}>
        				<div className={styles.groupChild3} />
        				<div className={styles.logOut}>Log Out</div>
        				<img className={styles.groupIcon} alt="" src="Group 427318255.png" />
      			</div>
      			<img className={styles.settingsIcon} alt="" src="settings.svg" />
      			<b className={styles.laporanHasilBelajar}>Laporan Hasil Belajar Kamu</b>
      			<div className={styles.backgroundKotakParent}>
        				<div className={styles.backgroundKotak} />
        				<div className={styles.lineContainer}>
          					<div className={styles.groupChild4} />
          					<img className={styles.lineIcon} alt="" src="Line 15.svg" />
          					<img className={styles.groupChild5} alt="" src="Line 17.svg" />
          					<img className={styles.groupChild6} alt="" src="Line 18.svg" />
          					<div className={styles.groupChild7} />
          					<div className={styles.penalaranUmumParent}>
            						<div className={styles.penalaranUmum2}>
              							<p className={styles.penalaran}>Penalaran</p>
              							<p className={styles.skorTryOut}> Umum</p>
            						</div>
            						<div className={styles.memahamiBacaanDanContainer}>
              							<p className={styles.penalaran}>{`Memahami `}</p>
              							<p className={styles.skorTryOut}>Bacaan dan Menulis</p>
            						</div>
            						<div className={styles.pengetahuanKuantitatif}>
              							<p className={styles.penalaran}>{`Pengetahuan `}</p>
              							<p className={styles.skorTryOut}>Kuantitatif</p>
            						</div>
            						<div className={styles.pengetahuanDanPemahamanContainer}>
              							<p className={styles.penalaran}>Pengetahuan dan</p>
              							<p className={styles.skorTryOut}> Pemahaman Umum</p>
            						</div>
          					</div>
          					<div className={styles.rectangleParent2}>
            						<div className={styles.groupChild8} />
            						<img className={styles.rectangleIcon} alt="" src="RectangleBiru.png" />
            						<div className={styles.groupChild9} />
          					</div>
          					<div className={styles.rectangleParent3}>
            						<div className={styles.groupChild10} />
            						<img className={styles.groupChild11} alt="" src="RectangleBiru.png" />
            						<div className={styles.groupChild12} />
          					</div>
          					<div className={styles.rectangleParent4}>
            						<div className={styles.groupChild13} />
            						<img className={styles.groupChild14} alt="" src="RectangleBiru.png" />
            						<div className={styles.groupChild15} />
          					</div>
          					<div className={styles.rectangleParent5}>
            						<div className={styles.groupChild16} />
            						<img className={styles.groupChild17} alt="" src="RectangleBiru.png" />
            						<div className={styles.groupChild18} />
          					</div>
          					<div className={styles.div2}>0</div>
          					<div className={styles.div3}>50</div>
          					<div className={styles.div4}>100</div>
        				</div>
        				<div className={styles.frameContainer}>
          					<div className={styles.rectangleParent6}>
            						<div className={styles.frameChild2} />
            						<div className={styles.mei}>Mei</div>
          					</div>
          					<div className={styles.rectangleParent6}>
            						<div className={styles.frameChild3} />
            						<div className={styles.mei}>Juni</div>
          					</div>
          					<div className={styles.rectangleParent6}>
            						<div className={styles.frameChild4} />
            						<div className={styles.mei}>Juli</div>
          					</div>
        				</div>
      			</div>
            <HomeFooters></HomeFooters>
            <ProfileNavbar></ProfileNavbar>
    		</div></>);
};

export default Profile;

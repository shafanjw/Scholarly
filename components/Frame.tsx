import { useCallback } from 'react';
import {useRouter} from "next/router";
import PropTypes from "prop-types";
import styles from '../styles/Frame.module.css';


const Frame = ({ className="" }) => {
  	const router = useRouter();
  	
  	const onGroupContainerClick = useCallback(() => {
    		router.push("/");
  	}, [router]);
  	
  	return (
    		<div className={[styles.frameParent, className].join(' ')}>
      			<div className={styles.pilihIconProfilmuParent}>
        				<div className={styles.pilihIconProfilmu}>Pilih Icon Profilmu</div>
        				<div className={styles.jawabanYangTelah}>{`Jawaban yang telah disubmit tidak bisa diubah. Cek jawaban anda dan pastikan semua sudah sesuai dengan pilihan anda. `}</div>
      			</div>
      			<div className={styles.frameGroup}>
        				<img className={styles.frameChild} alt="" src="Frame 1171275398.png" />
        				<img className={styles.frameItem} alt="" src="Ellipse 192.png" />
        				<img className={styles.frameInner} alt="" src="Frame 1171275405.png" />
        				<img className={styles.frameIcon} alt="" src="Frame 1171275404.png" />
      			</div>
      			<div className={styles.groupWrapper}>
        				<div className={styles.rectangleParent} onClick={onGroupContainerClick}>
          					<div className={styles.groupChild} />
          					<div className={styles.simpan}>Simpan</div>
        				</div>
      			</div>
    		</div>);
};

Frame.propTypes = {
  	className: PropTypes.string
};

export default Frame;

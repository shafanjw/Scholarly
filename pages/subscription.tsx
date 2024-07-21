import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import styles from '../styles/Subscription.module.css';
import HomeNavbar from '../components/HomeNavbar';
import HomeFooters from '../components/HomeFooters';


const Subscription:NextPage = () => {
  	return (
    		<div className={styles.pageSubscription}>
      			<img className={styles.pageSubscriptionChild} alt="" src="Silinder2.png" />
      			<img className={styles.pageSubscriptionItem} alt="" src="Silinder1.png" />
      			<div className={styles.component1Parent}>
        				<div className={styles.component1}>
          					<img className={styles.component1Child} alt="" src="Group 817.svg" />
          					<div className={styles.diamond}>Diamond</div>
          					<div className={styles.rp12500000}>
            						<span>Rp.</span>
            						<span className={styles.span}>125.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaketContainer}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>Benefit 1</li>
              							<li className={styles.soalPaketTry}>Benefit 2</li>
              							<li className={styles.soalPaketTry}>Benefit 3</li>
              							<li className={styles.soalPaketTry}>Benefit 4</li>
              							<li>Benefit 5</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant3}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
        				</div>
        				<div className={styles.component5}>
          					<img className={styles.component1Child} alt="" src="Group 817.svg" />
          					<div className={styles.platinum}>Platinum</div>
          					<div className={styles.rp12500000}>
            						<span>Rp.</span>
            						<span className={styles.span}>125.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaketContainer}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>Benefit 1</li>
              							<li className={styles.soalPaketTry}>Benefit 2</li>
              							<li className={styles.soalPaketTry}>Benefit 3</li>
              							<li className={styles.soalPaketTry}>Benefit 4</li>
              							<li>Benefit 5</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant3}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
        				</div>
        				<div className={styles.component3}>
          					<img className={styles.component1Child} alt="" src="Group 817.svg" />
          					<div className={styles.gold}>Gold</div>
          					<div className={styles.rp12500000}>
            						<span>Rp.</span>
            						<span className={styles.span}>125.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaketContainer}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>Benefit 1</li>
              							<li className={styles.soalPaketTry}>Benefit 2</li>
              							<li className={styles.soalPaketTry}>Benefit 3</li>
              							<li className={styles.soalPaketTry}>Benefit 4</li>
              							<li>Benefit 5</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant3}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
        				</div>
        				<div className={styles.component4}>
          					<img className={styles.component1Child} alt="" src="Group 817.svg" />
          					<div className={styles.platinum1}>Silver</div>
          					<div className={styles.rp12500000}>
            						<span>Rp.</span>
            						<span className={styles.span}>125.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaketContainer}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>Benefit 1</li>
              							<li className={styles.soalPaketTry}>Benefit 2</li>
              							<li className={styles.soalPaketTry}>Benefit 3</li>
              							<li className={styles.soalPaketTry}>Benefit 4</li>
              							<li>Benefit 5</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant3}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.component1Group}>
        				<div className={styles.component11}>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupChild} />
            						<div className={styles.groupItem} />
          					</div>
          					<div className={styles.component1Item} />
          					<img className={styles.component1Inner} alt="" src="Silinder1.png" />
          					<img className={styles.component1Inner} alt="" src="Silinder2.png" />
          					<div className={styles.platinum2}>Diamond</div>
          					<div className={styles.rp125000004}>
            						<span>Rp.</span>
            						<span className={styles.span}>900.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaket8}>Akses seluruh fasilitas belajar tanpa terkecuali</div>
          					<div className={styles.benefit1BenefitContainer4}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>250+ Soal Paket Try Out</li>
              							<li className={styles.soalPaketTry}>{`Unlimited latihan soal `}</li>
              							<li className={styles.soalPaketTry}>Unlimited materi dan rangkuman belajar</li>
              							<li className={styles.soalPaketTry}>Keanggotaan 12 Bulan</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant34}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
          					<div className={styles.ellipseDiv} />
          					<img className={styles.maskGroupIcon} alt="" src="image 1.png" />
        				</div>
        				<div className={styles.component11}>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupInner} />
            						<div className={styles.groupItem} />
          					</div>
          					<div className={styles.component1Item} />
          					<img className={styles.component1Inner} alt="" src="Silinder2.png" />
          					<img className={styles.component1Inner} alt="" src="Silinder1.png" />
          					<div className={styles.platinum3}>Platinum</div>
          					<div className={styles.rp125000004}>
            						<span>{`Rp. `}</span>
            						<span className={styles.span}>750.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaket8}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer4}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>200 Soal Paket Try Out</li>
              							<li className={styles.soalPaketTry}>35 latihan soal per hari</li>
              							<li className={styles.soalPaketTry}>Unlimited materi dan rangkuman belajar</li>
              							<li className={styles.soalPaketTry}>Keanggotaan 12 Bulan</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant34}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
          					<div className={styles.ellipseDiv} />
          					<img className={styles.maskGroupIcon} alt="" src="image 2.png" />
        				</div>
        				<div className={styles.component11}>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupChild2} />
            						<div className={styles.groupItem} />
          					</div>
          					<div className={styles.component1Item} />
          					<img className={styles.component1Inner} alt="" src="Silinder2.png" />
          					<img className={styles.component1Inner} alt="" src="Silinder1.png" />
          					<div className={styles.platinum4}>Gold</div>
          					<div className={styles.rp125000004}>
            						<span>Rp.</span>
            						<span className={styles.span}>550.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaket8}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer4}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>150 Soal Paket Try Out</li>
              							<li className={styles.soalPaketTry}>25 latihan soal perhari</li>
              							<li className={styles.soalPaketTry}>Unlimited materi dan rangkuman belajar</li>
              							<li>Keanggotaan 12 Bulan</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant34}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
          					<div className={styles.ellipseDiv} />
          					<img className={styles.maskGroupIcon} alt="" src="image 3.png" />
        				</div>
        				<div className={styles.component11}>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupChild4} />
            						<div className={styles.groupItem} />
          					</div>
          					<div className={styles.component1Item} />
          					<img className={styles.component1Inner} alt="" src="Silinder2.png" />
          					<img className={styles.component1Inner} alt="" src="Silinder1.png" />
          					<div className={styles.platinum5}>Silver</div>
          					<div className={styles.rp125000004}>
            						<span>Rp.</span>
            						<span className={styles.span}>300.000,</span>
            						<span>00</span>
          					</div>
          					<div className={styles.deskripsiPendekPaket8}>
            						<p className={styles.deskripsiPendekPaket}>Deskripsi Pendek Paket</p>
            						<p className={styles.deskripsiPendekPaket}>{`Deskripsi Pendek Paket `}</p>
          					</div>
          					<div className={styles.benefit1BenefitContainer4}>
            						<ul className={styles.soalPaketTryOutUnlimitedL}>
              							<li className={styles.soalPaketTry}>75 Soal Paket Try Out</li>
              							<li className={styles.soalPaketTry}>15 latihan soal perhari</li>
              							<li className={styles.soalPaketTry}>Unlimited materi dan rangkuman belajar</li>
              							<li>Keanggotaan 6 Bulan</li>
            						</ul>
          					</div>
          					<div className={styles.frame1334variant34}>
            						<div className={styles.rectangleParent}>
              							<div className={styles.frameChild} />
              							<b className={styles.langgananSekarang}>Langganan Sekarang !</b>
            						</div>
          					</div>
          					<div className={styles.ellipseDiv} />
          					<img className={styles.maskGroupIcon} alt="" src="image 4.png" />
        				</div>
      			</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.rectangleIcon} alt="" src="Rectangle 4452.png" />
        				<div className={styles.silver}>Silver</div>
        				<div className={styles.paketAndaSaat}>Paket Anda Saat Ini</div>
        				<div className={styles.lineDiv} />
      			</div>
                <HomeFooters></HomeFooters>
                <HomeNavbar></HomeNavbar>
    		</div>);
};

export default Subscription;

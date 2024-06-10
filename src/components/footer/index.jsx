import React from 'react';
import './style.css';
import Logo2 from '../../assets/Logo2.png';
import Twitter from '../../assets/Twitter.jpg';
import facebook from '../../assets/facebook.jpg';
import Nblog from '../../assets/Nblog.jpg';
import Youtube from '../../assets/Youtube.jpg';

const Footer = () => {
	return (
		<div className='Footer_Container DC'>
			<div className='DR Footer_Layer'>
				<div className='DC Footer_Layout'>
					<div className='DR gapgap'>
						<div>AppSuit Premium</div>
						<div>|</div>
						<div>AppSuit Keypad</div>
						<div>|</div>
						<div>AppSuit AV</div>
						<div>|</div>
						<div>AppSuit RemoteBlock</div>
						<div>|</div>
						<div>AppSuit VPNBlock</div>
					</div>

					<div className='DR gapgap'>
						<div>AppSuit MacroBlock</div>
						<div>|</div>
						<div>AppSuit Anti-Capture</div>
						<div>|</div>
						<div>AppSuit Unit</div>
						<div>|</div>
						<div>AppSuit Hybrid</div>
						<div>|</div>
						<div>AppSuit Radar</div>
					</div>
				</div>
				<div className='DR gap'>
					<img src={Twitter} alt='' />
					<img src={facebook} alt='' />
					<img src={Nblog} alt='' />
					<img src={Youtube} alt='' />
				</div>
			</div>

			<div className='Footer_Line'></div>

			<div className='DR DDR'>
				<div className='DDDR'>
					<img src={Logo2} alt='' />
				</div>
				<div>
					주소 : 서울특별시 용산구 원효로90길 11, 더프라임타워 업무동 12층
					(주)스틸리언 <br /><br /> TEL : 02-2038-4792 FAX: 02-2038-4794
					<br /><br />
					E-mail : contact@stealien.com <br /><br /> COPYRIGHT © 2020 STEALIEN Inc.
					ALL RIGHTS RESERVED.
					<br />
				</div>
			</div>
		</div>
	);
};

export default Footer;

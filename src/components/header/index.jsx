import React from 'react';
import './style.css';
import Logo from '../../assets/Logo.jpg';

const Header = () => {
	return (
		<div className='Container'>
			<img className='Logo' src={Logo} alt='' />
			<div className='Menu'>
				<div className="option">회사소개</div>
				<div className="option">제품</div>
				<div className="option">서비스</div>
				<div className="option">채용</div>
				<div className="option">Resources</div>
				<div className="option">KO</div>
			</div>
		</div>
	);
};

export default Header;

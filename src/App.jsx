import React from 'react';
import Header from './components/header';
import boarding1 from './assets/1.jpg';
import boarding2 from './assets/2.jpg';
import boarding3 from './assets/3.jpg';
import Container1 from './assets/Container1.jpg';
import Container2 from './assets/Container2.jpg';
import Container3 from './assets/Container3.jpg';
import Container4 from './assets/Container4.jpg';
import Book from './assets/Book.png';
import a1 from './assets/a1.jpg';
import a2 from './assets/a2.jpg';
import a3 from './assets/a3.jpg';
import a4 from './assets/a4.jpg';
import './App.css';
import Footer from './components/footer';

const App = () => {
	return (
		<div className='App_Container'>
			<Header />
			<img
				className='boardingImg'
				src={boarding1}
				alt='boarding'
				width={1900}
			/>

			<div className='App_Layout'>
				<div className='App_Title'>우리를 소개합니다.</div>
				<div className='App_Videos'>
					<div className='App_Content'>
						<img src={Container1} alt='' />
						<div className='Content_Desc'>
							스틸리언 2023 해외 워크샵 여행영상!
						</div>
					</div>
					<div className='App_Content'>
						<img src={Container2} alt='' />
						<div className='Content_Desc'>
							[스틸리언 해커들에게 묻는다!] <br /> 인싸담당자 제이콥의 인터뷰
						</div>
					</div>
					<div className='App_Content'>
						<img src={Container3} alt='' />
						<div className='Content_Desc'>
							복지가 쏟아진다! 젊은 회사, 일하기 <br /> 좋은 회사는 어디?
						</div>
					</div>
					<div className='App_Content'>
						<img src={Container4} alt='' />
						<div className='Content_Desc'>
							모바일 앱 보안 통합 솔루션, AppSuit!
						</div>
					</div>
				</div>
			</div>

			<div className='App_Layout2'>
				<div className='Layout2_Left'>
					<div className='Left_Title'>APPSUIT SERIES</div>
					<div className='Left_Desc'>
						앱수트(AppSuit) 시리즈는 스틸리언에서 100% 자체 개발한 모바일 앱
						보안 솔루션으로,
						<br />
						<br />
						앱수트 프리미엄을 포함하여 고객 모바일 보안을 위한 제품 라인업을
						'앱수트 시리즈'로 통합 관리하고
						<br />
						<br />
						있습니다. 국가 공인 GS(Good Software) 인증 1등급을 획득한 앱수트는
						<br />
						<br />
						다수의 고객사 경쟁 평가에서 최우수 기술력 보유 제품으로
						선정되었습니다.
					</div>
					<div className='Left_Desc'>
						경쟁력 있는 보안 솔루션, 앱수트 시리즈를 지금 만나보세요!
					</div>
					<div className='Left_Option'>
						<div>제품보기 ➡️</div>
						<div>도입사례 ➡️</div>
					</div>
				</div>
				<div>
					<img src={Book} alt='' />
				</div>
			</div>

			<div className='App_Layout3'>
				<div>
					<div className='Layout3_Title'>앱수트의 필요성</div>
					<div className='Layout3_Desc'>
						앱수트 시리즈 적용을 통해 서비스 운영에 요구되는 보안 평가 항목을
						준수 및 충족할 수 있습니다.
					</div>
				</div>

				<div className='Layout3'>
					<div className='Layer'>
						<div className='Layer_Title'>금융보안원</div>
						<div className='Line1' />
						<div className='Item'>
							<div className='Items'>
								<img src={a1} alt='' />
								<div className='Desc'>
									전자금융기반시설 <br /> 취약점 분석 평가 항목
								</div>
							</div>
							<div className='Items'>
								<img src={a2} alt='' />
								<div className='Desc'>
									스마트폰 전자금융서비스 <br /> 안전대책 체크리스트
								</div>
							</div>
							<div className='Items'>
								<img src={a3} alt='' />
								<div className='Desc'>
									핀테크 서비스 취약점 점검 가이드 <br /> 점검 기준
								</div>
							</div>
						</div>
					</div>

					<div className='Layer'>
						<div className='Layer_Title'>행정안전부</div>
						<div className='Line2' />
						<div className='Item'>
							<div className='Items'>
								<img src={a4} alt='' />
								<div className='Desc'>
									모바일 대민 서비스 구축 <br /> 평가기준
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


      <div className='App_Layout4'>

      </div>
			{/*  */}

      <Footer/>
		</div>
	);
};

export default App;

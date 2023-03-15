import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarTimetable from '../components/NavbarTimetable';
import './timeTable.css';

const Timetable = () => {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate(-1);
	};

	return (
		<section className='bg-black-gradient-2 timetable'>
			<NavbarTimetable />

			<main className='timetable-section'>
				<div className='timetables-container'>
					<div className='table-container'>
						<h2 className='box-text'>Box Arenal</h2>
						<iframe
							src='https://docs.google.com/spreadsheets/d/e/2PACX-1vQg5Zen_EcnGdVb5zKFLUaxa2_a-a3NlC4scDnxV8QfbskxDqlXwUTV6iYjHobeF6B9rNGcbD27uEBm/pubhtml?gid=0&amp;single=true&amp;headers=false&amp;range=B3:H14&amp;widget=false&amp;chrome=false'
							scrolling='no'
							className='table-box'
						/>
					</div>
					<div className='table-container'>
						<h2 className='zenter-text'>Zenter</h2>
						<iframe
							src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTVvJlsovPi9p03kflYN6gsd2mFwtTC1bq1INRjCAIrd9lU8st-_yOUCk6KCby3RcLHgO8MUqSxBzIX/pubhtml?gid=0&amp;single=true&amp;headers=false&amp;range=B2:H8&amp;widget=false&amp;rm=minimal&amp;chrome=false'
							scrolling='no'
							className='table-zenter'
						/>
					</div>
				</div>
			</main>

			<button className='btn-rounded' onClick={handleLogoClick}>
				<HiOutlineArrowLeftOnRectangle className='door-icon' />
				<span className='hidden sm:flex'>atrás</span>
			</button>
			<Footer color='#171620' />
		</section>
	);
};

export default Timetable;

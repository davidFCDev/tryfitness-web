import './navbar.css';
import { useState } from 'react';
import { navLinks } from '../constants/index';
import {
	RiMoneyEuroCircleFill,
	RiCalendar2Line,
	RiInstagramLine,
} from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import menu from '/assets/images/menu.svg';
import close from '/assets/images/close.svg';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleContactClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<nav className='navbar'>
			<div>
				<a href='#'>
					<img
						src='/assets/images/logoTryBold.png'
						className='navbar-logo'
						alt='try'
					/>
				</a>
			</div>

			<ul className='navbar-horizontal'>
				{navLinks.map((nav, i) => (
					<li key={nav.id}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
				<Link
					to={{ pathname: '/prices', hash: '#top' }}
					onClick={event => {
						if (!window.confirm('¿Quieres acceder a las tarifas?')) {
							event.preventDefault();
						} else {
							handleContactClick();
						}
					}}
				>
					<li>TARIFAS</li>
				</Link>
				<Link
					to={{ pathname: '/timetable', hash: '#top' }}
					onClick={event => {
						if (!window.confirm('¿Quieres acceder a los horarios?')) {
							event.preventDefault();
						} else {
							handleContactClick();
						}
					}}
				>
					<li>HORARIOS</li>
				</Link>
				<a
					target='_blank'
					href='https://www.instagram.com/tryfitness._/'
					onClick={event => {
						if (!window.confirm('¿Quieres acceder a instagram?')) {
							event.preventDefault();
						} else {
							handleContactClick();
						}
					}}
					rel='noreferrer'
				>
					<li>
						<GrInstagram className='text-[15px] sm:text-[20px] md:text-[25px] hover:cursor-pointer hover:scale-110' />
					</li>
				</a>
			</ul>

			<div className='navbar-vertical'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain'
					onClick={() => setToggle(!toggle)}
				/>

				<div
					className={`${
						!toggle ? 'hidden' : 'flex'
					} navbar-vertical-container`}
				>
					<ul className='vertical-list'>
						<Link to={'/prices'}>
							<li>
								<span>Tarifas</span>
								<RiMoneyEuroCircleFill />
							</li>
						</Link>
						<Link to={'/timetable'}>
							<li>
								<span>Horarios</span>
								<RiCalendar2Line />
							</li>
						</Link>
						<a href='https://www.instagram.com/tryfitness._/'>
							<li>
								<span>Instagram</span>
								<RiInstagramLine />
							</li>
						</a>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

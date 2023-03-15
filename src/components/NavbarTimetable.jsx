import { Link } from 'react-router-dom';

const NavbarTimetable = () => {
	return (
		<nav className='nav-sections'>
			<Link to={'/links'} className='logo-try'>
				<img src='/assets/images/logoTry.png' alt='logo' />
			</Link>
		</nav>
	);
};

export default NavbarTimetable;

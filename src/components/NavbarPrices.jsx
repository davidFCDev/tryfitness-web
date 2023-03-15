import { Link } from 'react-router-dom';

const NavbarPrices = () => {
	return (
		<nav className='nav-sections'>
			<Link to={'/links'} className='logo-try'>
				<img src='/assets/images/logoTry.png' alt='logo' />
			</Link>
		</nav>
	);
};

export default NavbarPrices;

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Hero from '../components/Hero';
import Class from '../components/Class';
import Centers from '../components/Centers';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import ButtonBack from '../components/ButtonBack';
import Form from '../components/Form';

function Home() {
	const [showButtonBack, setShowButtonBack] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const aboutSection = document.querySelector('#about');
			if (aboutSection && window.scrollY >= aboutSection.offsetTop) {
				setShowButtonBack(true);
			} else {
				setShowButtonBack(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<div className='screen'>
				<div className='screen-gradient'>
					<Navbar />
					<Hero />
				</div>
			</div>
			<div>
				<About />
				<div className='form-container'>
					<Form />
				</div>
			</div>
			<div className='paddingX'>
				<Centers />
				<Class />
				{showButtonBack && <ButtonBack />}
			</div>
			<div>
				<Partners />
				<Footer />
				<Toaster />
			</div>
		</div>
	);
}

export default Home;

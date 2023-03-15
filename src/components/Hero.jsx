import { motion } from 'framer-motion';
import { SlArrowDown } from 'react-icons/sl';
import Form from './Form';
import './hero.css';

const Hero = () => {
	return (
		<section id='hero' className='hero'>
			<motion.div
				className='hero-container'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }}
			>
				<div className='hero-text col-start-2 col-span-2 '>
					<div className='hero-title'>
						<h1>
							<span>TRY</span> again,
						</h1>
						<h1>
							fail <span>BETTER</span>
						</h1>
					</div>
					<a href='#about'>
						<button className='arrow-btn'>
							<SlArrowDown className='text-3xl' />
						</button>
					</a>
				</div>

				<div className='main-form-container col-start-4 col-span-1'>
					<Form />
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;

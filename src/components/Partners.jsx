import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './partners.css';

const Partners = () => {
	const animationOptions = {
		opacity: 0.5,
		y: 0,
		transition: { duration: 1.5 },
	};

	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

	return (
		<section className='partners'>
			<motion.div
				className='partners-container'
				initial={{ opacity: 0, y: 50 }}
				animate={inView ? animationOptions : {}}
				ref={ref}
			>
				<img src='/assets/images/logoRogue.png' alt='logoRogue' />
				<img src='/assets/images/logoReebok.png' alt='logoReebok' />
				<img src='/assets/images/logoTLF.png' alt='logoTLF' />
				<img src='/assets/images/logoCrossfit.png' alt='logoCF' />
				<img src='/assets/images/logoCrossfit.png' alt='logoCF' />
				<img src='/assets/images/logoNocco.png' alt='logoNocco' />
			</motion.div>
		</section>
	);
};

export default Partners;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css';

const About = () => {
	const animationOptions = {
		opacity: 1,
		y: 0,
		transition: { duration: 1.5 },
	};

	const animationOptions2 = {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2 },
	};

	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
	const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });
	const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true });

	return (
		<section id='about' className='about'>
			<div className='about-text-container'>
				<motion.div
					className='about-box'
					initial={{ opacity: 0, x: 50 }}
					animate={inView1 ? animationOptions2 : {}}
					ref={ref1}
				>
					<h1 className='img-container'>
						¿Qué es <span>TRY</span>?
					</h1>
				</motion.div>
				<motion.div
					className='about-box'
					initial={{ opacity: 0, x: 50 }}
					animate={inView2 ? animationOptions2 : {}}
					ref={ref2}
				>
					<p className='img-container'>
						Bienvenidos a Try Fitness, dos centros deportivos diseñados para
						ayudarte a alcanzar tus objetivos de salud y bienestar.{' '}
					</p>
				</motion.div>
				<motion.div
					className='about-box'
					initial={{ opacity: 0, x: 50 }}
					animate={inView3 ? animationOptions2 : {}}
					ref={ref3}
				>
					<p className='img-container'>
						Ofrecemos una amplia gama de clases y actividades deportivas en un
						ambiente moderno y acogedor, con entrenadores experimentados que te
						guiarán en cada paso del camino. Ya sea que estés buscando mejorar
						tu condición física, aumentar tu fuerza, o simplemente disfrutar de
						un estilo de vida más activo, ¡estamos aquí para ayudarte a alcanzar
						tus metas!
					</p>
				</motion.div>
			</div>

			<motion.ul
				initial={{ opacity: 0, y: 50 }}
				animate={inView ? animationOptions : {}}
				ref={ref}
			>
				<li>
					<img
						src='/assets/images/icons8-kettlebell-100.png'
						alt='kb'
						className='max-w-[85px] sm:max-w-[100px] hover:scale-110'
					/>
					<p>Fuerza</p>
				</li>
				<li>
					<img
						src='/assets/images/icons8-velocímetro-100.png'
						alt='speed'
						className='max-w-[85px] sm:max-w-[100px] hover:scale-110'
					/>
					<p>Velocidad</p>
				</li>
				<li>
					<img
						src='/assets/images/icons8-corazón-con-pulso-100.png'
						alt='heart'
						className='max-w-[85px] sm:max-w-[100px] hover:scale-110'
					/>
					<p>Resistencia</p>
				</li>
				<li>
					<img
						src='/assets/images/icons8-ejercicio-100.png'
						alt='pot'
						className='max-w-[85px] sm:max-w-[100px] hover:scale-110'
					/>
					<p>Potencia</p>
				</li>
				<li>
					<img
						src='/assets/images/icons8-balanza-100.png'
						alt='bal'
						className='max-w-[85px] sm:max-w-[100px] hover:scale-110'
					/>
					<p>Equilibrio</p>
				</li>
				<li>
					<img
						src='/assets/images/icons8-meditación-gurú-100.png'
						alt='med'
						className='max-w-[85px] sm:max-w-[100px] hover:scale-110'
					/>
					<p>Concentración</p>
				</li>
			</motion.ul>
		</section>
	);
};

export default About;

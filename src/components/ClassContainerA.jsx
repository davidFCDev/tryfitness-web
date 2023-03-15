import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClassContainerA = () => {
	const animationOptions = {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	};

	const [ref1, inView1] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });

	return (
		<section className='classA'>
			<div className='wod' ref={ref1}>
				<div className='class-large'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView1 ? animationOptions : {}}
						className='class-text'
					>
						<h2>WOD</h2>
						<p>Nuestra clase más dura</p>
					</motion.div>
				</div>
			</div>

			<div className='aerial' ref={ref2}>
				<div className='class-large'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView2 ? animationOptions : {}}
						className='class-text'
					>
						<h2>Aerial</h2>
						<p>Clase de aéreos con telas y barra</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ClassContainerA;

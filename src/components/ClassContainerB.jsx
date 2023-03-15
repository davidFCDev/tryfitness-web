import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClassContainerB = () => {
	const animationOptions = {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	};

	const [ref1, inView1] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref3, inView3] = useInView({ threshold: 0.7, triggerOnce: true });

	return (
		<section className='classB'>
			<div className='openbox' ref={ref1}>
				<div className='class-small'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView1 ? animationOptions : {}}
						className='class-text'
					>
						<h2>Open box</h2>
						<p>Ven cuando quieras y entrena lo que necesites</p>
					</motion.div>
				</div>
			</div>

			<div className='try45' ref={ref2}>
				<div className='class-small'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView2 ? animationOptions : {}}
						className='class-text'
					>
						<h2>Try 45</h2>
						<p>Entrenamientos personalizados y reducidos</p>
					</motion.div>
				</div>
			</div>

			<div className='endurance' ref={ref3}>
				<div className='class-small'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView3 ? animationOptions : {}}
						className='class-text'
					>
						<h2>Endurance</h2>
						<p>Clase enfocada en máquinas y peso corporal</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ClassContainerB;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CentersB = () => {
	const animationOptions = {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	};

	const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
	const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });

	return (
		<section className='center-container'>
			<div className='box' ref={ref1}>
				<div className='center-large'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView1 ? animationOptions : {}}
						className='center-text'
					>
						<p>Rúa do Areal, 140, 36201 Vigo, Pontevedra</p>
						<div className='center-btn'><h3 className='text-[14px] sm:text-[12px] md:text-[16px]'>ARENAL</h3></div>
					</motion.div>
				</div>
			</div>
			<div className='zenter' ref={ref2}>
				<div className='center-large'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView2 ? animationOptions : {}}
						className='center-text'
					>
						<p>Estrada Fragosiño, 30, 36214 Vigo, Pontevedra</p>
						<div className='center-btn'><h3 className='text-[14px] sm:text-[12px] md:text-[16px]'>ZENTER</h3></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CentersB;

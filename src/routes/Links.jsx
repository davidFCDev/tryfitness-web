import { Link } from 'react-router-dom';
import './links.css';

const Links = () => {
	return (
		<section className='links bg-black-gradient-2'>
			<img src='/assets/images/logoTry.png' alt='logo' className='w-[150px]' />
			<div className='links-title'>
				<h2>TRY | Centros deportivos</h2>
				<p>
					Entrenamientos de WOD, endurance, aéreos, funcional y mucho más...
				</p>
			</div>
			<div className='links-container'>
				<Link
					to={'/'}
					className='links-container-box'
					style={{
						backgroundImage: 'url("/assets/images/webLink.png")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className='shadow-link'>
						<div className='border-link-left'>
							<h1>Web</h1>
						</div>
					</div>
				</Link>
				<Link
					to={'/timetable'}
					className='links-container-box'
					style={{
						backgroundImage: 'url("/assets/images/webLink2.png")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className='shadow-link'>
						<div className='border-link-right'>
							<h1>Horarios</h1>
						</div>
					</div>
				</Link>

				<Link
					to={'/prices'}
					className='links-container-box'
					style={{
						backgroundImage: 'url("/assets/images/webLink3.png")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className='shadow-link'>
						<div className='border-link-left'>
							<h1>Tarifas</h1>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Links;

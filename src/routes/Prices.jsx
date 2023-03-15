import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import NavbarPrices from '../components/NavbarPrices';
import Footer from '../components/Footer';
import './prices.css';

const Prices = () => {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate(-1);
	};

	return (
		<section className='bg-black-gradient-2 prices'>
			<NavbarPrices />

			<main className='prices-section'>
				<div className='general-prices'>
					<div className='prices-title'>
						<h1>Generales</h1>
						<p>Acceso a ambos centros, incluídos la sala de máquinas del gymnasio Arenal y la sala de zenter.</p>
					</div>
					<div className='prices-container'>
						<div className='card'>
							<div className='content'>
								<div className='title-container'>
									<h2 className='title'>INTRO</h2>
								</div>
								<h2 className='price'>59.90€</h2>
								<p className='subtitle'>2 clases / semana</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala máquinas</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='content'>
								<div className='title-container'>
									<h2 className='title'>PRO</h2>
								</div>
								<h2 className='price'>69.90€</h2>
								<p className='subtitle'>3 clases / semana</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala máquinas</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='content'>
								<div className='title-container'>
									<h2 className='title'>RX</h2>
								</div>
								<h2 className='price'>79.90€</h2>
								<p className='subtitle'>4 clases / semana</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala máquinas</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='content'>
								<div className='title-container'>
									<h2 className='title'>ELITE</h2>
								</div>
								<h2 className='price'>89.90€</h2>
								<p className='subtitle'>Ilimitadas</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala máquinas</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='exclusive-prices'>
					<div className='prices-title'>
						<h1>Exclusivas Zenter</h1>
						<p>Incluye únicamente las clases de Try zenter y acceso libre a la misma sala en cualquier horario.</p>
					</div>
					<div className='prices-container'>
						<div className='card'>
							<div className='content'>
								<div className='title-container-zenter'>
									<h2 className='title'>BASIC</h2>
								</div>
								<h2 className='price'>40€</h2>
								<p className='subtitle-zenter'>2 clases / semana</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='content'>
								<div className='title-container-zenter'>
									<h2 className='title'>LITE</h2>
								</div>
								<h2 className='price'>55€</h2>
								<p className='subtitle-zenter'>3 clases / semana</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='content'>
								<div className='title-container-zenter'>
									<h2 className='title'>PREMIUM</h2>
								</div>
								<h2 className='price'>70€</h2>
								<p className='subtitle-zenter'>Ilimitadas</p>
								<div className='description'>
									<p>Incluye:</p>
									<p>- Sala zenter</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<button className='btn-rounded' onClick={handleLogoClick}>
				<HiOutlineArrowLeftOnRectangle className='text-4xl' />
				<span className='hidden sm:flex'>atrás</span>
			</button>
			<Footer color="#171620"/>
		</section>
	);
};

export default Prices;

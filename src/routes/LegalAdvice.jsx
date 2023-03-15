import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './legal.css';

const LegalAdvice = () => {
	return (
		<section id='legal' className='legal'>
			<header className='legal-header'>
				<Link to={'/'}>
					<img src='/assets/images/logoTry.png' alt='logo' />
				</Link>
			</header>

			<main className='legal-text'>
				<h1>Aviso Legal</h1>

				<div className='legal-parraf'>
					<h2>1. Datos identificativos del titular del sitio web:</h2>
					<p>
						<span>TryFitness, S.L</span>, con domicilio social en{' '}
						<span>Rúa do Areal, 140, 36201 Vigo, Pontevedra</span>, y con número
						de identificación fiscal <span>NIF</span>, es el titular del sitio
						web{' '}
						<a href='#' className='hover:underline text-red-400 font-semibold'>
							www.tryfitness.com
						</a>
						.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>2. Objeto del sitio web:</h2>
					<p>
						El sitio web{' '}
						<a href='#' className='hover:underline text-red-400 font-semibold'>
							www.tryfitness.com
						</a>{' '}
						tiene por objeto facilitar al público en general información
						relativa a{' '}
						<a href='#' className='hover:underline text-red-400 font-semibold'>
							www.tryfitness.com
						</a>
						. El titular del sitio web se reserva el derecho a modificar en
						cualquier momento la presentación, configuración y contenido del
						sitio web, así como suspender temporalmente el acceso al mismo para
						realizar operaciones de mantenimiento, actualización o mejora.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>3. Condiciones de uso del sitio web:</h2>
					<p>
						El usuario se compromete a hacer un uso adecuado y lícito del sitio
						web y de sus contenidos, de conformidad con la legislación
						aplicable, el presente aviso legal y las demás condiciones,
						reglamentos e instrucciones que, en su caso, puedan ser de
						aplicación.
					</p>
				</div>

				<p>El usuario se obliga a abstenerse de:</p>
				<div className='legal-parraf'>
					<p>
						a. Realizar actividades ilícitas, ilegales o contrarias a la buena
						fe y al orden público;
					</p>
					<p>
						b. Difundir contenidos o propaganda de carácter racista, xenófobo,
						pornográfico, de apología del terrorismo o que atenten contra los
						derechos humanos;
					</p>
					<p>
						c. Provocar daños en los sistemas físicos y lógicos del titular del
						sitio web, de sus proveedores o de terceras personas;
					</p>
					<p>
						d. Introducir o difundir en la red virus informáticos o cualesquiera
						otros sistemas físicos o lógicos que sean susceptibles de provocar
						daños en los sistemas físicos o lógicos del titular del sitio web,
						de sus proveedores o de terceras personas.
					</p>
				</div>
				<p>
					El titular del sitio web no se responsabiliza del uso que los usuarios
					puedan hacer del contenido del sitio web.
				</p>
				<div className='legal-parraf'>
					<h2>4. Propiedad intelectual:</h2>
					<p>
						Los derechos de propiedad intelectual sobre los contenidos del sitio
						web{' '}
						<a href='#' className='hover:underline text-red-400 font-semibold'>
							www.tryfitness.com
						</a>
						, su diseño gráfico y códigos fuente, son titularidad del titular
						del sitio web, salvo que se indique lo contrario. La reproducción,
						distribución, comercialización o transformación no autorizada de
						tales contenidos constituye una infracción de los derechos de
						propiedad intelectual del titular del sitio web.
					</p>
				</div>
				<div className='legal-parraf'>
					<h2>5. Protección de datos personales:</h2>
					<p>
						El titular del sitio web cumple con la normativa vigente en materia
						de protección de datos personales, en concreto con el Reglamento
						(UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril
						de 2016, relativo a la protección de las personas físicas en lo que
						respecta al tratamiento de datos personales y a la libre circulación
						de estos datos.
					</p>
				</div>
				<p>Para más información, consulte nuestra Política de Privacidad.</p>
			</main>
			<Footer />
		</section>
	);
};

export default LegalAdvice;

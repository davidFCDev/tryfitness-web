import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Cookies = () => {
	return (
		<section className='legal'>
			<header className='legal-header'>
				<Link to={'/'}>
					<img src='/assets/images/logoTry.png' alt='logo' />
				</Link>
			</header>

			<main className='legal-text'>
				<h1>Política de cookies</h1>
				<div className='legal-parraf'>
					<h2>1. ¿Qué son las cookies?</h2>
					<p>
						Las cookies son pequeños archivos de texto que se descargan en el
						dispositivo del usuario al acceder a determinadas páginas web. Las
						cookies permiten a una página web, entre otras cosas, almacenar y
						recuperar información sobre los hábitos de navegación del usuario o
						de su dispositivo y, dependiendo de la información que contengan y
						de la forma en que se utilice el dispositivo, pueden utilizarse para
						reconocer al usuario.
					</p>
				</div>
				<div className='legal-parraf'>
					<h2>2. ¿Qué tipos de cookies utiliza este sitio web?</h2>
					<div className='legal-parraf'>
						<p>Este sitio web utiliza los siguientes tipos de cookies:</p>
						<p>
							<span className='font-semibold'>Cookies técnicas:</span> Son
							aquellas que permiten al usuario la navegación a través del sitio
							web y la utilización de las diferentes opciones o servicios que
							existen en el mismo. Por ejemplo, las cookies técnicas permiten
							controlar el tráfico y la comunicación de datos, identificar la
							sesión o acceder a partes de acceso restringido.
						</p>
						<p>
							<span className='font-semibold'>Cookies de análisis:</span> Son
							aquellas que permiten al responsable de las mismas el seguimiento
							y análisis del comportamiento de los usuarios en el sitio web al
							que están vinculadas. La información recogida mediante este tipo
							de cookies se utiliza para la medición de la actividad del sitio
							web y para la elaboración de perfiles de navegación de los
							usuarios, con el fin de introducir mejoras en función del análisis
							de los datos de uso que hacen los usuarios del servicio.
						</p>
						<p>
							<span className='font-semibold'>Cookies de personalización:</span>{' '}
							Son aquellas que permiten al usuario acceder al servicio con
							algunas características de carácter general predefinidas en
							función de una serie de criterios establecidos por el usuario,
							como por ejemplo el idioma, el tipo de navegador a través del cual
							se accede al servicio, la configuración regional desde donde se
							accede al servicio, etc.
						</p>
					</div>
				</div>
				<div className='legal-parraf'>
					<h2>3. ¿Cómo puedo desactivar o eliminar las cookies?</h2>
					<p>
						El usuario puede configurar su navegador para que notifique y
						rechace la instalación de las cookies enviadas por este sitio web.
						Sin embargo, se advierte al usuario que la desactivación de las
						cookies puede afectar al correcto funcionamiento de algunas
						funcionalidades del sitio web.
					</p>
					<p>
						El usuario puede eliminar las cookies previamente instaladas en su
						dispositivo a través de las opciones de configuración del navegador
						utilizado para acceder al sitio web.
					</p>
				</div>
				<div className='legal-parraf'>
					<h2>4. ¿Quién utiliza las cookies de este sitio web?</h2>
					<p>
						Las cookies utilizadas en este sitio web son utilizadas por el
						titular del sitio web y por terceros, que actúan en su nombre.
					</p>
				</div>
				<div className='legal-parraf'>
					<h2>5. Actualización de la Política de Cookies:</h2>
					<p>
						El titular del sitio web puede modificar esta Política de Cookies en
						función de las exigencias normativas, técnicas o por motivos
						estratégicos. Por ello, se aconseja a los usuarios que la visiten
						periódicamente. En caso de cambios significativos en esta Política
						de Cookies, el titular del sitio web informará a los usuarios
						mediante un aviso en la página web.
					</p>
				</div>
			</main>

			<Footer />
		</section>
	);
};

export default Cookies;

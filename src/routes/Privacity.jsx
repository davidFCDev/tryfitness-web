import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Privacity = () => {
	return (
		<section className='legal'>
			<header className='legal-header'>
				<Link to={'/'}>
					<img src='/assets/images/logoTry.png' alt='logo' />
				</Link>
			</header>

			<main className='legal-text'>
				<h1>Política de privacidad</h1>

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
						.En el presente documento se describe la política de privacidad que
						se aplica al tratamiento de los datos personales de los usuarios que
						visitan o utilizan el sitio web.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>2. Recopilación y tratamiento de datos personales:</h2>
					<p>
						El titular del sitio web recopila datos personales de los usuarios a
						través de los formularios de contacto, registros de usuario,
						suscripciones a boletines informativos, y/o mediante el uso de
						cookies.
					</p>
					<p>
						Los datos personales que se recopilan pueden incluir: nombre y
						apellidos, dirección de correo electrónico, dirección postal, número
						de teléfono, información de pago, información sobre preferencias y/o
						intereses deportivos, y otra información relevante para la finalidad
						del tratamiento.
					</p>
					<p>
						El titular del sitio web se compromete a tratar los datos personales
						de los usuarios de forma confidencial y a utilizarlos únicamente
						para las finalidades para las que fueron recopilados.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>3. Finalidades del tratamiento de datos personales:</h2>
					<p>
						El tratamiento de datos personales se realiza con las siguientes
						finalidades:
					</p>
					<div>
						<p>
							a. Gestionar las consultas y solicitudes de información que los
							usuarios realicen a través de los formularios de contacto.
						</p>
						<p>
							b. Gestionar el registro de usuarios y la gestión de los servicios
							prestados a través del sitio web relacionados con el deporte.
						</p>
						<p>
							c. Gestionar la suscripción a boletines informativos y la remisión
							de información deportiva y promocional.
						</p>
						<p>
							d. Realizar estudios y análisis sobre el comportamiento de los
							usuarios y la utilización del sitio web con la finalidad de
							mejorar su funcionamiento y/o adaptar los contenidos a los
							intereses deportivos de los usuarios.
						</p>
					</div>
				</div>

				<div className='legal-parraf'>
					<h2>4. Base jurídica del tratamiento de datos personales:</h2>
					<p>
						La base jurídica para el tratamiento de datos personales es el
						consentimiento prestado por el usuario en el momento de la
						recopilación de los mismos.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>5. Destinatarios de los datos personales:</h2>
					<p>
						El titular del sitio web no cederá los datos personales de los
						usuarios a terceros, salvo que sea necesario para el cumplimiento de
						las finalidades para las que fueron recopilados.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>
						6. Derechos de los usuarios en relación con sus datos personales:
					</h2>
					<p>
						Los usuarios pueden ejercer los derechos de acceso, rectificación,
						supresión, limitación, portabilidad y oposición al tratamiento de
						sus datos personales, en los términos previstos por la normativa
						vigente en materia de protección de datos.
					</p>
					<p>
						Para ejercer estos derechos, el usuario deberá dirigirse por escrito
						al titular del sitio web, indicando su nombre completo, su dirección
						postal o electrónica, y el derecho que desea ejercer.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>7. Uso de cookies:</h2>
					<p>
						El sitio web utiliza cookies para mejorar la experiencia de
						navegación de los usuarios y ofrecerles contenidos deportivos
						personalizados. Para más información, consulte nuestra Política de
						Cookies.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>8. Modificaciones de la Política de Privacidad:</h2>
					<p>
						El titular del sitio web se reserva el derecho a modificar la
						presente Política de Privacidad en cualquier momento. En caso de
						modificación, se informará a los usuarios a través del sitio web o
						mediante comunicación individualizada.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>9. Aceptación:</h2>
					<p>
						La utilización del sitio web implica la aceptación de la presente
						Política de Privacidad por parte de los usuarios.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>10. Menores de edad:</h2>
					<p>
						El sitio web está dirigido a mayores de edad. No se recopilan datos
						personales de menores de edad sin el consentimiento expreso de sus
						padres o tutores legales.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>11. Seguridad de los datos personales:</h2>
					<p>
						El titular del sitio web ha adoptado medidas técnicas y
						organizativas adecuadas para garantizar la seguridad y
						confidencialidad de los datos personales recopilados, evitando su
						alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo
						con lo establecido en la normativa vigente en materia de protección
						de datos.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>12. Vigencia de la Política de Privacidad:</h2>
					<p>
						La presente Política de Privacidad tiene un carácter indefinido. El
						titular del sitio web se reserva el derecho a modificarla en
						cualquier momento, en cuyo caso se informará a los usuarios a través
						del sitio web o mediante comunicación individualizada.
					</p>
				</div>

				<div className='legal-parraf'>
					<h2>13. Contacto:</h2>
					<p>
						Para cualquier consulta o duda en relación con la presente Política
						de Privacidad, los usuarios pueden ponerse en contacto con el
						titular del sitio web a través del formulario de contacto disponible
						en el sitio web o mediante correo electrónico dirigido a
						tryfitness@gmail.com.
					</p>
				</div>
			</main>

			<Footer />
		</section>
	);
};

export default Privacity;

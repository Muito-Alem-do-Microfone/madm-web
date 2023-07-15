import logo from "../../../assets/madm-logo.png"
import { ReactComponent as InstagramLogo } from '../../../assets/instagram.svg'
import { ReactComponent as TwitterLogo } from '../../../assets/twitter.svg'
import { ReactComponent as FacebookLogo } from '../../../assets/facebook.svg'
import "./style.scss"


function Footer() {
	return (
		<div className='footer'>
			<div className="footer__container">
				<img src={logo} alt="logo" className='footer__logo' />
				<div className='footer__content'>
					<h1>Siga-nos nas redes sociais!</h1>
					<div className='footer__socials'>
						<InstagramLogo />
						<TwitterLogo />
						<FacebookLogo />
					</div>
				</div>
			</div>
			<p className='footer__copyright'>
				Feito com amor por <a href="https://www.instagram.com/gabsmoraez_/" className='footer__copyright'>Gabriel Moraes</a>
			</p>
		</div>
	)
}

export default Footer
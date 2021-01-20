import "./styles.css";
import { ReactComponent as YoutubeLogo } from './youtube.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';
import { ReactComponent as InstagramLogo } from './instagram.svg';


export default function Footer() {
    return(
        <footer className='main-footer'>
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className='footer-icons'>
                <a href='https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g' target='_new'>
                    <YoutubeLogo/>
                </a>
                <a href='https://www.linkedin.com/school/devsuperior' target='_new'>
                    <LinkedinLogo/>
                </a>
                <a href='https://www.instagram.com/devsuperior.ig' target='_new'>
                    <InstagramLogo/>
                </a>
            </div>
        </footer>
    )
}
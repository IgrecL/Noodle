import React from 'react';
import '../styles/Footer.css';
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import youtubeIcon from '../assets/youtube-icon.png';
import githubIcon from '../assets/github-icon.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="upper-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <a href="https://www.facebook.com/tcinsalyon/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                      <img src={facebookIcon} alt="Facebook" style={{ height: '24px' }} />
                  </a>
                  <a href="https://twitter.com/tc_insalyon?lang=en" target="_blank" rel="noopener noreferrer">
                      <img src={twitterIcon} alt="twitter" style={{ height: '24px'}} />
                  </a>
                  <a href="https://www.instagram.com/tcinsalyon/?hl=en" target="_blank" rel="noopener noreferrer">
                      <img src={instagramIcon} alt="instagram" style={{ height: '24px'}} />
                  </a>
                  <a href="https://www.youtube.com/channel/UC263-HvGo9n2bTLfWW_oygw" target="_blank" rel="noopener noreferrer">
                      <img src={youtubeIcon} alt="youtube" style={{ height: '24px'}} />
                  </a>
                  <a href="https://github.com/IgrecL/noodle.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="github" style={{ height: '24px'}} />
                  </a>
                </p> 
                <p>Email : contact.noodle0@gmail.com</p>
              </div>
              <div className="col-md-6">
                <p>
                  <a href="/politique-cookies">Politique de cookies</a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="connecté">
          
        </div>
        <div className="authors">
          <div className="container">
            <p className="author-text">
              © 2023 Noodle. Tous droits réservés. <br />
              Yohan LARBRE, Adam ABOUCAYA, Adam LAALOUJ, Frédéric ODDON, Valentin RENAUD, Aziz BEN JEBALIA
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer
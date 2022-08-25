import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Me</span>
        <span>Neo</span>
      </a>
      <div>
        <p>
          This Site is made with <img src={reactIcon} alt="React" /> and much
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/tushar-kumar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/a.t.u.l_kumar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}


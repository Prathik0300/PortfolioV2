import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { contactContainer } from "./styles";

const ContactMe = () => {
  return (
    <div data-aos="fade-left" className={contactContainer}>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/prathik-pugazhenthi-487855177/"
      >
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/Prathik0300">
        <GitHubIcon />
      </a>
      <a target="_blank" href="https://www.instagram.com/prathik._.03/">
        <InstagramIcon />
      </a>
      <a target="_blank" href="mailto:prathik0300@gmail.com">
        <EmailIcon />
      </a>
    </div>
  );
};

export default ContactMe;

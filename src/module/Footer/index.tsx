import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { offsetDiv } from "@/src/lib/common.styles";
import { container } from "@/styles/layout.style";
import classNames from "classnames";
import {
  footerContainer,
  directContactContainer,
  directContactLinks,
  directContactTitle,
} from "./style";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import dynamic from "next/dynamic";

// Dynamically load MapComponent without SSR (only loads on the client side)
const MapComponent = dynamic(() => import("@/src/components/Maps"), {
  ssr: false,
});
const Footer = () => {
  const { footerRef } = useAppContextValues();
  return (
    <>
      <div className={offsetDiv} ref={footerRef} />
      <div className={classNames(container, footerContainer)} id="contact">
        <div className={directContactContainer}>
          <div className={directContactTitle}>Contact Me Directly</div>
          <div className={directContactLinks}>
            <PhoneIcon />
            <a href="tel:+13128893640">(312)-889-3640</a>
          </div>
          <div className={directContactLinks}>
            <EmailIcon />
            <a href="mailto:prathik.pugazhenthi0300@gmail.com">
              prathik.pugazhenthi0300@gmail.com
            </a>
          </div>
        </div>
        <MapComponent />
      </div>
    </>
  );
};

export default Footer;

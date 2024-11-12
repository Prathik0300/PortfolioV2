import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import HireMeForm from "../HireMeForm";

const Popup = ({ anchor, id }) => {
  return (
    <Popper
      placement="bottom"
      id={id}
      anchorEl={anchor}
      open
      transition
      style={{ zIndex: "3" }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={300}>
          <div>
            <HireMeForm />
          </div>
        </Fade>
      )}
    </Popper>
  );
};

export default Popup;

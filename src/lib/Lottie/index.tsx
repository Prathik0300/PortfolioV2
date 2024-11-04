import { LOTTIE_DEFAULT_SETTINGS } from "@/src/constants";
import Lottie from "react-lottie";
import { lottieStyles } from "./styles";
const LottieApp = ({
  isCursorPointer,
  animationData,
  height,
  width,
  onClickHandler,
}: any) => {
  const handleLottieClick = () => {
    if (onClickHandler) {
      onClickHandler();
    }
  };

  return (
    <div
      onClick={handleLottieClick}
      className={lottieStyles(isCursorPointer, width, height)}
    >
      <Lottie
        width={width}
        height={height}
        options={{ ...LOTTIE_DEFAULT_SETTINGS, animationData }}
      />
    </div>
  );
};

export default LottieApp;

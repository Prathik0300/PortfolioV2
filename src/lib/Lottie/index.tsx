import { LOTTIE_DEFAULT_SETTINGS } from "@/src/constants";
import dynamic from "next/dynamic";
import { lottieStyles } from "./styles";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
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

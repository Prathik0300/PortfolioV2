import { LOTTIE_DEFAULT_SETTINGS } from "@/src/constants";
import Lottie from "react-lottie";
import { lottieStyles } from "./styles";
const LottieApp = ({ isCursorPointer, animationData, height, width }: any) => {
  return (
    <div className={lottieStyles(isCursorPointer, width, height)}>
      <Lottie
        width={width}
        height={height}
        options={{ ...LOTTIE_DEFAULT_SETTINGS, animationData }}
      />
    </div>
  );
};

export default LottieApp;

import React from "react";
import Lottie from "lottie-react";

export default function LottieAnimation(props) {
  const { animationData, height } = props;
  return (
    <Lottie
      animationData={animationData}
      style={{ height }}
      loop={true}
      autoplay={true}
    />
  );
}

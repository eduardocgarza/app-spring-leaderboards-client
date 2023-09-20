import React from "react";
import { Link } from "react-router-dom";
import errorAnimation from "../../assets/errorAnimation.json";
import LottieAnimation from "../../components/general/LottieAnimation";

export default function ErrorPage() {
  const homePath = "/";
  return (
    <section className="flex items-center justify-center min-h-screen max-h-screen">
      <Link to={homePath}>
        <LottieAnimation animationData={errorAnimation} height={250} />
      </Link>
    </section>
  );
}

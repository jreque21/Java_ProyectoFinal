/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../components/custom/header";
import Footer from "../components/custom/footer";
import { render } from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function withLayout(Component: any) {
  return function (props: any) {
    return (
      <>
        <Header />
        <Carousel />
        <main /*className="h-dvh"*/>
          <Component {...props} />
        </main>
        <Footer />
      </>
    );
  };
}

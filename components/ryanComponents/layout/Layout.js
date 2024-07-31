import { Fragment, useEffect } from "react";
import ContentModal from "../components/popup/ContentModal.js";
import ImageGallery from "../components/popup/ImageGallery.js";
import ImageView from "../components/popup/ImageView.js";
import VideoPopup from "../components/popup/VideoPopup.js";
import { createSkillsDot, dotResize } from "../utils.js";
import Background from "./Background.js";
import ContentSidebar from "./ContentSidebar.js";
import Link from "next/link";

const Layout = ({
  children,
  noSkin,
  bg,
  containerCls,
  bgImgUrl,
  animationIn,
  animationOut,
}) => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <>
      <div dir="" className="ryan">
        <Fragment>
          <VideoPopup />
          <ImageView />
          <ImageGallery />
          <ContentModal />
          <div className={`page ${!noSkin ? "new-skin" : ""}`}>
            <Background bg={bg} img={bgImgUrl} />
            <div
              className={`${
                containerCls
                  ? containerCls
                  : "container opened layout-rounded-style minimal-icons-style"
              }`}
              data-animation-in={animationIn ? animationIn : "fadeInLeft"}
              data-animation-out={animationOut ? animationOut : "fadeOutLeft"}
            >
              {children}
            </div>
            <ContentSidebar />
          </div>
        </Fragment>
      </div>

      <div className=" hellpo z-50">
        sssss
      </div>
    </>
  );
};
export default Layout;

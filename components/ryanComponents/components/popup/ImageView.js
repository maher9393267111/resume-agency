import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

const ImageViewer = ({ onClose, imageSrc }) => {
	const viewerRef = useClickOutside(() => onClose());

	return (
		<>
			<div className="mfp-bg mfp-ready" onClick={onClose} />
			<div
				className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
				tabIndex={-1}
			>
				<div className="mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container">
					<div className="mfp-content" ref={viewerRef}>
						<div className="mfp-iframe-scaler">
							<img className="mfp-img" src={imageSrc} alt="" />
						</div>
					</div>
					<div className="mfp-preloader">Loading...</div>
				</div>
			</div>
		</>
	);
};

const ImageView = () => {
	const [img, setImg] = useState(false);
	const [imgValue, setImgValue] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			const a = document.querySelectorAll("a");
			a.forEach((a) => {
				if (a.href.includes("/images")) {
					if (a.getAttribute("download") === null) {
						a.addEventListener("click", (e) => {
							e.preventDefault();
							setImgValue(a.href);
							setImg(true);
						});
					}
				}
			});
		}, 1500);
	}, []);
	return (
		<Fragment>
			{img && <ImgViews close={() => setImg(false)} src={imgValue} />}
		</Fragment>
	);
};
export default ImageView;

import { useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

const ContentModalComponent = ({ content, onClose }) => {
	const containerRef = useClickOutside(onClose);

	return (
		<>
			<div className="mfp-bg mfp-fade popup-box-inline mfp-ready" />

			<div
				className="mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready"
				tabIndex={-1}
				style={{ overflow: "hidden auto" }}
			>
				<div className="mfp-container mfp-s-ready mfp-inline-holder">
					<div className="mfp-content" ref={containerRef}>
						<div id="popup-2" className="popup-box mfp-fade">
							<div dangerouslySetInnerHTML={{ __html: content.outerHTML }} />
							<button title="Close (Esc)" type="button" className="mfp-close">
								×
							</button>
						</div>
					</div>
					<div className="mfp-preloader">Loading...</div>
				</div>
			</div>
		</>
	);
};

const ContentModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState(null);

	useEffect(() => {
		const handlePopupClick = (event) => {
			const popupElement = event.target
				.closest(".has-popup-media")
				?.querySelector(".mfp-hide");
			if (popupElement) {
				setContent(popupElement.querySelector(".content"));
				setIsOpen(true);
			}
		};

		const popupLinks = document.querySelectorAll(".has-popup-media");
		popupLinks.forEach((link) => {
			link.addEventListener("click", handlePopupClick);
		});

		return () =>
			popupLinks.forEach((link) =>
				link.removeEventListener("click", handlePopupClick)
			);
	}, []);

	return isOpen ? (
		<Content content={content} close={() => setIsOpen(false)} />
	) : null;
};
export default ContentModal;

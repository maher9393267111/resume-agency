import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio ,textColor }) => {
	return (
		<Fragment>
			<div className="content about">
				{/* title */}
				<div className="title text-center">
					<span className="first-word">About</span> Me
				</div>
				{/* content */}
				<div className="row">
					<div className=" container  co col-d-12 col-t-12 col-m-12 border-line-v">

						<div dir="rtl"
							className={` ${textColor}  text-box arabicfont`}
							 dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
						>





						</div>
					</div>
					{/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="info-list">
							<ul>
								<li>
									<strong>Age . . . . .</strong> 29
								</li>
								<li>
									<strong>Residence . . . . .</strong> USA
								</li>
								<li>
									<strong>Address . . . . .</strong> Atlanta, GA
								</li>
							</ul>
						</div>
					</div> */}
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default AboutMe;

export const AboutMeClassic = () => {
	return (
		<div className="content about">
			{/* title */}
			<div className="title">About Me</div>
			{/* content */}
			<div className="row">
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<div className="text-box">
						<p>
							I am Ryan Adlard, web designer from USA, California. I have rich
							experience in web site design and building and customization, also
							I am good at wordpress. I love to talk with you about our unique.
						</p>
					</div>
					<div className="info-list">
						<ul>
							<li>
								<strong>Age . . . . .</strong> 24
							</li>
							<li>
								<strong>Residence . . . . .</strong> USA
							</li>
							<li>
								<strong>Freelance . . . . .</strong> Available
							</li>
							<li>
								<strong>Address . . . . .</strong> California, USA
							</li>
						</ul>
					</div>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};

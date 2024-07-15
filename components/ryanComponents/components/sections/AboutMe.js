import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio }) => {
	return (
		<Fragment>
			<div className="content about">
				{/* title */}
				<div className="title">
					<span className="first-word">About</span> Me
				</div>
				{/* content */}
				<div className="row">
					<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
						<div dir="rtl"
							className="text-box arabicfont"
							// dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
						>


ד"ר איהאב הנו רופא שיניים בוגר אוניבסיטת תל אביב בית ספר לרפואה, הפקולטה לרפואת שיניים. בעל נסיון רב בתחום, עבר הרבה השתלמיות מקומיות ובין לאומיות, בנוסף ד"ר איהאב הנו בוגר הפקולטה לרפואה הדסה עין כרם-בית הספר לרוקחות האוניברסיטה העברית.
ד"ר איהאב רופא ותיק בקופת חולים ובמרכז רפואי פרטי אשר עובד עם צוות של רופאי שיניים מומחים ומתמחים בכל התחומים השונים ברפואת שיניים

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

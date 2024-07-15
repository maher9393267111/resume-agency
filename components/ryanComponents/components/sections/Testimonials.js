import SwiperCore, {
	Autoplay,
	EffectFade,
	Grid,
	Navigation,
	Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Testimonials = () => {
	const props = {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	};
	return (
		<div className="content testimonials">
			{/* title */}
			<div className="title">Testimonials</div>
			{/* content */}
			<div className="row testimonials-items">
				{/* client item */}
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<div className="revs-carousel default-revs">
						<Swiper {...props} className="owl-carousel">
							<SwiperSlide className="item">
								<div className="revs-item">
									<div className="text">
										I can&apos;t thank the team at PHAH enough! Their
										compassionate care and expertise helped my beloved furry
										friend recover from a serious illness. They treated us like
										family, and I wouldn&apos;t trust anyone else with my
										dog&apos;s health.
									</div>
									<div className="user">
										<div className="img">
											<img src="images/testi1.jpg" alt="" />
										</div>
										<div className="info">
											<div className="name">Mike Stewart</div>
											<div className="company">Dog Owner</div>
										</div>
										<div className="clear" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="item">
								<div className="revs-item">
									<div className="text">
										The staff and doctors at PHAH are the best! They take such
										good care of our dogs that I&apos;d have a hard time
										bringing them anywhere else.
									</div>
									<div className="user">
										<div className="img">
											<img src="images/testi2.jpg" alt="" />
										</div>
										<div className="info">
											<div className="name">Tim Rollins</div>
											<div className="company">Dog Owner / Farmer</div>
										</div>
										<div className="clear" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="item">
								<div className="revs-item">
									<div className="text">
										This was the best vet experience! I was really nervous about
										bringing my cat “tubs” to a new vet because I previously had
										a horrible experience at a vet clinic that I worked at.
									</div>
									<div className="user">
										<div className="img">
											<img src="images/testi3.png" alt="" />
										</div>
										<div className="info">
											<div className="name">Kim Busby</div>
											<div className="company">Cat Owner</div>
										</div>
										<div className="clear" />
									</div>
								</div>
							</SwiperSlide>
							<div className="swiper-pagination"></div>
						</Swiper>
					</div>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};
export default Testimonials;

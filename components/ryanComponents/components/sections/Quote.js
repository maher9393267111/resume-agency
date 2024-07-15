import { Fragment } from "react";
const Quote = () => {
	return (
		<Fragment>
			<div className="content quote">
				{/* title */}
				<div className="title">
					<span>Quote</span>
				</div>
				{/* content */}
				<div className="row">
					<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
						<div className="revs-item">
							<div className="text">
								<div>
									Never believe that animals suffer less than humans. Pain is
									the same for them that it is for us. Even worse, because they
									cannot help themselves.
								</div>
							</div>
							<div className="user">
								<div className="img">
									<img src="images/man1.jpg" alt="Louis J. Camuti" />
								</div>
								<div className="info">
									<div className="name">Louis J. Camuti</div>
									<div className="company">Veterinarian</div>
								</div>
								<div className="clear" />
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default Quote;

import React from "react";
import Step from "./Step";
import data from "../assets/data.json";
import PropTypes from "prop-types";

const ProductTutorial = React.forwardRef(({ id, setModalOpen }, ref) => {
	return (
		<div className="how-it-works" ref={ref} id={id}>
			<div className="section-images">
				<img src="/baby-book.jpg" alt="Parent reading to baby" />
				<img src="/baby-hike.jpg" alt="Family hiking with baby gear" />
			</div>
			<h2>How It Works</h2>
			<div className="steps-grid">
				<div className="step">
					<h3>Snap a photo</h3>
					<p>
						Our AI auto-detects the item, suggests a price, and
						writes your listing.
					</p>
				</div>
				<div className="step">
					<h3>List it everywhere</h3>
					<p>Post to multiple marketplaces with one click.</p>
				</div>
				<div className="step">
					<h3>Sell & ship hassle-free</h3>
					<p>We offer pickup, storage, and shipping support.</p>
				</div>
			</div>
			<button className="cta-button" onClick={() => setModalOpen(true)}>
				Join the Waitlist
			</button>

			<div className="testimonials">
				<h2>Why Parents Love Akaboo</h2>
				<div className="testimonial">
					<p>
						💬 "Listing used gear used to be a nightmare—Akaboo made
						it a breeze! Sold my stroller in 2 days."
					</p>
					<cite>– Sarah, NYC</cite>
				</div>
				<div className="testimonial">
					<p>💬 "Love the price estimator! No more guessing."</p>
					<cite>– Jake, Chicago</cite>
				</div>
			</div>
		</div>
	);
});

ProductTutorial.propTypes = {
	id: PropTypes.string.isRequired,
	setModalOpen: PropTypes.func.isRequired,
};

ProductTutorial.displayName = "ProductTutorial";

export default ProductTutorial;

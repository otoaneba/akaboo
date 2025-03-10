import React from "react";
import PropTypes from "prop-types";

const ProductTutorial = React.forwardRef(({ id, setModalOpen }, ref) => {
	return (
		<div className="how-it-works" ref={ref} id={id}>
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
						💬 &ldquo;Listing used gear used to be a
						nightmare—Akaboo made it a breeze! Sold my stroller in 2
						days.&rdquo;
					</p>
					<cite>– Sarah, NYC</cite>
				</div>
				<div className="testimonial">
					<p>
						💬 &ldquo;Love the price estimator! No more
						guessing.&rdquo;
					</p>
					<cite>– Jake, Chicago</cite>
				</div>
				<div className="section-images">
					<img src="/baby-book.jpg" alt="Parent reading to baby" />
					<img src="/dad-stroller.jpg" alt="Parent with stroller" />
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

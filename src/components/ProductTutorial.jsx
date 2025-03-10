import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductTutorial = React.forwardRef(({ id, setModalOpen }, ref) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const testimonials = [
		{
			img: "/baby-book.jpg",
			text: "It used to be a nightmare, but akaboo made it a breeze! I sold my stroller in just two days.",
			author: "– Sarah, a busy mom, found herself overwhelmed with the task of selling her used baby gear. After discovering akaboo, she was amazed at how easy it was to list her stroller.",
		},
		{
			img: "/dad-stroller.jpg",
			text: "No more guessing! I love how straightforward it is!",
			author: "– Jake, a father, found himself unsure of how to price his used baby gear. After discovering akaboo, he was amazed at how easy it was to list his stroller.",
		},
		{
			img: "/kid-toy.jpg",
			text: "I love the one-click posting! It's so easy to use.",
			author: "– Julia, a mom of two, found herself overwhelmed with the task of selling her used baby gear. After discovering akaboo, she was amazed at how easy it was to list her stroller.",
		},
	];

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

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
				<h2 className="testimonials-title">Who is akaboo for?</h2>
				<div className="testimonial-carousel">
					<button
						onClick={prevTestimonial}
						className="carousel-button"
					>
						❮
					</button>
					<div className="testimonial">
						<img
							src={testimonials[currentIndex].img}
							alt="Parent reading to baby"
						/>
						<p>{testimonials[currentIndex].text}</p>
						<cite>{testimonials[currentIndex].author}</cite>
					</div>
					<button
						onClick={nextTestimonial}
						className="carousel-button"
					>
						❯
					</button>
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

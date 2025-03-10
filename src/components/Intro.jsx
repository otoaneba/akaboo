import React from "react";
import { addDoc } from "firebase/firestore";
import { userCollection, app } from "../firebase";
import "firebaseui/dist/firebaseui.css";
import { getFunctions, httpsCallable } from "firebase/functions";
import Modal from "./Modal";
import PropTypes from "prop-types";

const Intro = React.forwardRef(({ modalOpen, setModalOpen }, ref) => {
	const [formSubmitted, setFormSubmitted] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		zipCode: "",
		ageRange: "",
		interest: [],
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			if (checked) {
				setFormData((prevState) => ({
					...prevState,
					[name]: [...prevState[name], value],
				}));
			} else {
				setFormData((prevState) => ({
					...prevState,
					[name]: prevState[name].filter((item) => item !== value),
				}));
			}
		} else {
			setFormData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm();
	};

	async function submitForm() {
		setLoading(true);
		const newNote = { ...formData, createdAt: Date.now() };
		try {
			const newNoteRef = await addDoc(userCollection, newNote);
			console.log("Document added with ID: ", newNoteRef.id);
			setFormSubmitted(true);
			const sendEmail = httpsCallable(getFunctions(app), "sendEmail");
			await sendEmail({ email: formData.email, name: formData.name });
		} catch (error) {
			console.error("Error in submitting form or sending email: ", error);
			if (error.code === "permission-denied") {
				alert("Permission denied");
			} else {
				alert("An error occurred. Please try again.");
			}
		} finally {
			setFormData({
				name: "",
				email: "",
				zipCode: "",
				ageRange: "",
				interest: [],
			});
			setLoading(false);
		}
	}

	const closeModal = () => {
		setModalOpen(false);
		setFormSubmitted(false);
	};

	return (
		<div className="intro" ref={ref} id="intro">
			<div className="hero-section">
				<div className="hero-content">
					<h1 className="tagline">
						Sell Baby Gear. Save Money. Reduce Waste.
					</h1>
					<p className="action-call">
						The smart, easy way to sell used strollers, car seats,
						and more—powered by AI.
					</p>
					<button
						className="cta-button"
						onClick={() => setModalOpen(true)}
					>
						Join the Waitlist
					</button>
				</div>
				<div className="hero-image">
					<img
						src="/baby-hike.jpg"
						alt="Family hiking with baby gear"
					/>
				</div>
			</div>

			<div className="why-akaboo">
				<h2>Why Akaboo?</h2>
				<p>
					Parents spend thousands on baby gear that&apos;s barely
					used. We make reselling easy with AI-driven pricing, smart
					photo tools, and automated listings for marketplaces like
					Facebook, Craigslist, eBay, Poshmark, OfferUp, and more.
				</p>
				<div className="benefits-with-images">
					<div className="benefit-item">
						<div className="benefit-content image-left">
							<img
								src="/baby-swaddle.jpg"
								alt="Baby gear"
								className="benefit-image"
							/>
							<div className="benefit-text">
								<h3>Maximize your resale value</h3>
								<p>
									Get the best price for your baby gear with
									our AI-powered pricing recommendations.
								</p>
							</div>
						</div>
					</div>
					<div className="benefit-item">
						<div className="benefit-content image-right">
							<div className="benefit-text">
								<h3>Effortless listing & automation</h3>
								<p>
									Let our AI handle the listings while you
									focus on what matters most.
								</p>
							</div>
							<img
								src="/app-shop.jpg"
								alt="Shopping app"
								className="benefit-image"
							/>
						</div>
					</div>
					<div className="benefit-item">
						<div className="benefit-content image-left">
							<img
								src="/kid-stroller.jpg"
								alt="Kid in stroller"
								className="benefit-image"
							/>
							<div className="benefit-text">
								<h3>Safe, trusted, and sustainable</h3>
								<p>
									Join a community that values quality and
									environmental consciousness.
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="cta-button secondary"
					onClick={() => setModalOpen(true)}
				>
					Join the Waitlist
				</button>
			</div>

			<Modal
				isOpen={modalOpen}
				closeModal={closeModal}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				submitted={formSubmitted}
				loading={loading}
			/>
		</div>
	);
});

Intro.propTypes = {
	modalOpen: PropTypes.bool.isRequired,
	setModalOpen: PropTypes.func.isRequired,
};

Intro.displayName = "Intro";

export default Intro;

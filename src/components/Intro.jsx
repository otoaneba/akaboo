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
		categories: [],
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
				categories: [],
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
					<img src="/dad-stroller.jpg" alt="Parent with stroller" />
				</div>
			</div>

			<div className="why-akaboo">
				<h2>Why Akaboo?</h2>
				<div className="image-grid">
					<img
						src="/baby-swaddle.jpg"
						alt="Baby gear"
						className="grid-image"
					/>
					<img
						src="/app-shop.jpg"
						alt="Shopping app"
						className="grid-image"
					/>
					<img
						src="/kid-stroller.jpg"
						alt="Kid in stroller"
						className="grid-image"
					/>
				</div>
				<p>
					Parents spend thousands on baby gear that's barely used. We
					make reselling easy with AI-driven pricing, smart photo
					tools, and automated listings for marketplaces like
					Facebook, Craigslist, eBay, Poshmark, OfferUp, and more.
				</p>
				<div className="benefits">
					<div className="benefit">✓ Maximize your resale value</div>
					<div className="benefit">
						✓ Effortless listing & automation
					</div>
					<div className="benefit">
						✓ Safe, trusted, and sustainable
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

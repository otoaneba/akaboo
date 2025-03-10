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
			<div className="geometric-pattern"></div>
			<h1 className="tagline">Transform How You Buy & Sell Baby Gear</h1>
			<p className="action-call">
				Join the smart parenting revolution. Use AI-powered tools to buy
				and sell pre-loved baby gear safely, sustainably, and
				profitably.
			</p>
			<div className="cta-buttons">
				<button
					className="openModalBtn"
					onClick={() => setModalOpen(true)}
				>
					Get Started for Free
				</button>
			</div>
			<div className="benefits-grid">
				<div className="benefit-item">
					<h3>Sustainability</h3>
					<p>Give baby gear a second life</p>
				</div>
				<div className="benefit-item">
					<h3>Safety</h3>
					<p>Verified pre-owned gear</p>
				</div>
				<div className="benefit-item">
					<h3>Savings</h3>
					<p>Smart deals for smart parents</p>
				</div>
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

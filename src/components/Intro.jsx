import React from "react";
import { addDoc } from "firebase/firestore";
import { userCollection, app } from "../firebase";
import "firebaseui/dist/firebaseui.css";
import { getFunctions, httpsCallable } from "firebase/functions";
import Modal from "./Modal";

const Intro = React.forwardRef((props, ref) => {
	const [modalOpen, setModalOpen] = React.useState(false);
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
		<div className="intro" ref={ref}>
			<div className="geometric-pattern"></div>
			<h1 className="tagline">
				Transform Your Life With The Guidance Of A Certified Life Coach
			</h1>
			<p className="action-call">
				Take the first step towards a better life. Start your journey
				with personalized coaching that empowers you to reach your full
				potential.
			</p>
			<div className="cta-buttons">
				<button
					className="openModalBtn"
					onClick={() => setModalOpen(true)}
				>
					Join Waitlist
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

Intro.displayName = "Intro";

export default Intro;

import React from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { userCollection, app } from "../firebase";
import "firebaseui/dist/firebaseui.css";
import { getFunctions, httpsCallable } from "firebase/functions";
import Modal from "./Modal";
import Confetti from 'react-confetti'

export default function Intro() {
	const [modalOpen, setModalOpen] = React.useState(false);
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		zipCode: "",
		ageRange: "",
		interest: [],
		categories: [],
	});
  const [FormSubmitted, setFormSubmitted] = React.useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			if (checked) {
				// Add to array
				setFormData((prevState) => ({
					...prevState,
					[name]: [...prevState[name], value],
				}));
			} else {
				// Remove from array
				setFormData((prevState) => ({
					...prevState,
					[name]: prevState[name].filter((item) => item !== value),
				}));
			}
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setModalOpen(false);
		console.log("form submit");
		submitForm();
	};

	const closeModal = () => {
		setModalOpen(false)
    setFormSubmitted(false)
    console.log('closing modal', FormSubmitted)
	};

	async function submitForm() {
		const newNote = formData;
		setFormData({ ...formData, createdAt: Date.now() });
		const newNoteRef = await addDoc(userCollection, newNote);
    // if (newNoteRef?.id) {
    //   setFormSubmitted(true);
    // }
    const sendEmail = httpsCallable(getFunctions(app), 'sendEmail');
    sendEmail({ email: formData.email, name: formData.name })
        .then((result) => {
            console.log('Email sent result:', result.data);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    
		setFormData({
			name: "",
			email: "",
			zipCode: "",
			ageRange: "",
			interest: [],
			categories: [],
			createdAt: "",
		});
		console.log(newNoteRef);
	}

	return (
		<div className="intro">
			<div className="product--tagline">
				<h1>Join the Waitlist</h1>
				<p>
					Get exclusive early access to Akaboo, your go-to marketplace
					for pre-owned baby gear.
				</p>
				<button
					className="openModalBtn"
					onClick={() => {
						setModalOpen(true);
					}}
				>
					Join Waitlist
				</button>
				<Modal
					isOpen={modalOpen}
					closeModal={closeModal}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
          submitted={FormSubmitted}
				/>
			</div>
		</div>
	);
}

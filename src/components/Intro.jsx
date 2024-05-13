import React from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { userCollection, app } from "../firebase";
import "firebaseui/dist/firebaseui.css";
import { getFunctions, httpsCallable } from "firebase/functions";
import Modal from "./Modal";

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
		setActiveModal(-1);
	};

	async function submitForm() {
		const newNote = formData;
		setFormData({ ...formData, createdAt: Date.now() });
		const newNoteRef = await addDoc(userCollection, newNote);

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
					closeModal={() => setModalOpen(false)}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			</div>
		</div>
	);
}

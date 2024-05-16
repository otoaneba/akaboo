import React from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { userCollection, app } from "../firebase";
import "firebaseui/dist/firebaseui.css";
import { getFunctions, httpsCallable } from "firebase/functions";
import Modal from "./Modal";
import Confetti from 'react-confetti'

export default function Intro() {
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
		console.log("form submit");
		submitForm();
	};

  
	async function submitForm() {
    setLoading(true);
    const newNote = {...formData, createdAt: Date.now()};
    try {
      const newNoteRef = await addDoc(userCollection, newNote);
      console.log("Document added with ID: ", newNoteRef.id)
      setFormSubmitted(true);
      const sendEmail = httpsCallable(getFunctions(app), 'sendEmail');
      await sendEmail({ email: formData.email, name: formData.name })
    } catch (error) {
      console.log("Error in submnitting form or sending email: ", error);
      if (error.code === 'permission-deined') {
        alert('Permission deined');
      } else {
        alert('An error occured. Please try again.')
      }
    } finally {
      setFormData({
        name: "",
        email: "",
        zipCode: "",
        ageRange: "",
        interest: [],
        categories: [],
        createdAt: "",
      });
      setLoading(false);
    }
  }
  
    const closeModal = () => {
      setModalOpen(false)
      setFormSubmitted(false)
      console.log('closing modal', formSubmitted)
    };

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
          submitted={formSubmitted}
          loading={loading}
				/>
			</div>
		</div>
	);
}

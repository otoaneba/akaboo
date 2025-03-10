import PropTypes from "prop-types";

export default function Modal({
	isOpen,
	closeModal,
	handleSubmit,
	handleChange,
	submitted,
	loading,
}) {
	if (!isOpen) return null;

	// Function to handle clicks outside the modal content
	const handleBackdropClick = (event) => {
		if (event.target === event.currentTarget) {
			closeModal(); // Close the modal if the backdrop is clicked
		}
	};

	return (
		<div className="modal" onClick={handleBackdropClick}>
			{submitted ? (
				<div className="modal-content">
					<div className="success-message">
						<h2>Thank you for joining!</h2>
						<p>
							We&apos;re excited to have you on board. Check your
							email for confirmation and next steps.
						</p>
						<button className="modal-button" onClick={closeModal}>
							Close
						</button>
					</div>
					<button onClick={closeModal} className="close-button">
						×
					</button>
				</div>
			) : (
				<div className="modal-content">
					<h2 className="modal-title">Join Our Community</h2>
					<form onSubmit={handleSubmit}>
						<div className="input-field">
							<label className="input-label" htmlFor="name">
								Name
							</label>
							<input
								className="input-box"
								type="text"
								name="name"
								id="name"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input-field">
							<label className="input-label" htmlFor="email">
								Email
							</label>
							<input
								className="input-box"
								type="email"
								name="email"
								id="email"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input-field">
							<label className="input-label" htmlFor="zipCode">
								Zip Code
							</label>
							<input
								className="input-box"
								type="text"
								name="zipCode"
								id="zipCode"
								onChange={handleChange}
								required
							/>
						</div>
						<fieldset>
							<legend>I am interested in:</legend>
							<label className="radio-label">
								<input
									type="checkbox"
									name="interest"
									value="ai_listing"
									onChange={handleChange}
								/>
								AI listing assistant
							</label>
							<label className="radio-label">
								<input
									type="checkbox"
									name="interest"
									value="one_click"
									onChange={handleChange}
								/>
								One click posting
							</label>
							<label className="radio-label">
								<input
									type="checkbox"
									name="interest"
									value="shipping"
									onChange={handleChange}
								/>
								Hassle-free shipping
							</label>
						</fieldset>
						<button
							className={`modal-button ${
								loading ? "loading" : ""
							}`}
							type="submit"
							disabled={loading}
						>
							{loading ? "Processing..." : "Secure My Spot!"}
						</button>
					</form>
					<p className="privacy-statement">
						By submitting this form, you agree to our{" "}
						<a
							href="https://cynthiali-abe.notion.site/Privacy-Statement-2fd620cdb08343adbd11c9e45bb8e0ff?pvs=4"
							target="_blank"
							rel="noopener noreferrer"
						>
							Privacy Policy
						</a>
						. We&apos;ll handle your information with care.
					</p>
					<button onClick={closeModal} className="close-button">
						×
					</button>
				</div>
			)}
		</div>
	);
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	submitted: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

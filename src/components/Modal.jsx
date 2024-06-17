import React from "react";
import "./Modal.css";
import Confetti from 'react-confetti'

export default function Modal({
	isOpen,
	closeModal,
	handleSubmit,
	handleChange,
  submitted,
  loading,
}) {
	if (!isOpen) return null;
	return (
		<div className="modal">
      {submitted ? (
        <div className="modal-content">
          <Confetti/>
          <h1>Thank you!</h1>
          <p>Your submission has been received.</p>
          <button onClick={closeModal} className="close-button">&times; Close</button>
        </div>
      ) : (
			<div className="modal-content">
				<form onSubmit={handleSubmit}>
					<h1>Join Waitlist</h1>
					<input
						className="input-box"
						type="text"
						name="name"
						placeholder="Your name"
						onChange={handleChange}
						required
					/>
					<input
						className="input-box"
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						required
					/>
					<input
						className="input-box"
						type="text"
						name="zipCode"
						placeholder="Zip code"
						onChange={handleChange}
					/>
					<fieldset>
						<legend>Child’s Age Range (Optional):</legend>
						<label className="radio-label">
							<input
								type="checkbox"
								name="ageRange"
								value="buy"
								onChange={handleChange}
							/>
							0-2
						</label>
						<label className="radio-label">
							<input
								type="checkbox"
								name="ageRange"
								value="sell"
								onChange={handleChange}
							/>
							3-5
						</label>
						<label className="radio-label">
							<input
								type="checkbox"
								name="ageRange"
								value="both"
								onChange={handleChange}
							/>
							6-10
						</label>
					</fieldset>
					<fieldset>
						<legend>Categories to Buy or Sell (Optional):</legend>
						<label className="radio-label">
							<input
								type="checkbox"
								name="categories"
								value="stroller"
								onChange={handleChange}
							/>
							Stroller
						</label>
						<label className="radio-label">
							<input
								type="checkbox"
								name="categories"
								value="car seat"
								onChange={handleChange}
							/>
							Car Seat
						</label>
						<label className="radio-label">
							<input
								type="checkbox"
								name="categories"
								value="carrier"
								onChange={handleChange}
							/>
							Carrier
						</label>
						<label className="radio-label">
							<input
								type="checkbox"
								name="categories"
								value="crib"
								onChange={handleChange}
							/>
							Crib
						</label>
					</fieldset>
					<fieldset>
						<legend>Interest in (Optional):</legend>
						<label className="radio-label">
							<input
								type="radio"
								name="interest"
								value="buy"
								onChange={handleChange}
							/>
							Buy
						</label>
						<label className="radio-label">
							<input
								type="radio"
								name="interest"
								value="sell"
								onChange={handleChange}
							/>
							Sell
						</label>
						<label className="radio-label">
							<input
								type="radio"
								name="interest"
								value="both"
								onChange={handleChange}
							/>
							Both
						</label>
					</fieldset>
					<button className={`submit-button ${loading ? 'loading' : ''}`} type="submit" disabled={loading}>
						Secure My Spot!
					</button>
				</form>
				<p className="privacy-statement" style={{ fontSize: "0.8rem" }}>
					At akaboo, your privacy is paramount. We collect your name,
					email, and other optional details exclusively to enhance
					your experience and keep you informed about our services.
					Your data is kept confidential, never sold, and is protected
					with robust security measures. You may update or delete your
					information anytime by contacting us.
					<br />
					By submitting this form, you agree to our data practices as
					described in our{" "}
					<a
						href="https://cynthiali-abe.notion.site/Privacy-Statement-2fd620cdb08343adbd11c9e45bb8e0ff?pvs=4"
						target="_blank"
						rel="noopener noreferrer"
					>
						full Privacy Policy
					</a>
					. For any concerns, reach out to{" "}
					<a href="mailto:spiceitglobal@gmail.com">
						spiceitglobal@gmail.com
					</a>
					.
				</p>
				<button onClick={closeModal} className="close-button">
					&times;
				</button>
			</div>
      )}
		</div>
	);
}

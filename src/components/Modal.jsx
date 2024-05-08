import React from 'react'
import "./Modal.css";

export default function Modal({ isOpen, closeModal, handleSubmit, handleChange }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <h1>Registration Form</h1>
                    <input className="input-box" type="text" name="name" placeholder="Your name" onChange={handleChange} required />
                    <input  className="input-box" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input  className="input-box" type="text" name="zipCode" placeholder="zip code" onChange={handleChange} />
                    <fieldset>
                        <legend>Child’s Age Range (Optional):</legend>
                        <label className="radio-label">
                          <input type="checkbox" name="ageRange" value="buy" onChange={handleChange} />
                          0-2
                        </label>
                        <label className="radio-label">   
                          <input type="checkbox" name="ageRange" value="sell" onChange={handleChange} />
                          3-5
                        </label>
                        <label className="radio-label">
                          <input type="checkbox" name="ageRange" value="both" onChange={handleChange} />
                          6-10
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Categories to Buy or Sell (Optional):</legend>
                        <label className="radio-label">
                            <input type="checkbox" name="categories" value="stroller" onChange={handleChange} />
                            Stroller
                        </label>
                        <label className="radio-label">
                            <input type="checkbox" name="categories" value="car seat" onChange={handleChange} />
                            Car Seat
                        </label>
                        <label className="radio-label">
                            <input type="checkbox" name="categories" value="carrier" onChange={handleChange} />
                            Carrier
                        </label>
                        <label className="radio-label">
                            <input type="checkbox" name="categories" value="crib" onChange={handleChange} />
                            Crib
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Interest in (Optional):</legend>
                        <label className="radio-label">
                            <input type="radio" name="interest" value="buy" onChange={handleChange} />
                            Buy
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="interest" value="sell" onChange={handleChange} />
                            Sell
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="interest" value="both" onChange={handleChange} />
                            Both
                        </label>
                    </fieldset>
                    <button type="submit">Secure My Spot!</button>
                </form>
                <button onClick={closeModal} className="close-button">&times;</button>
            </div>
        </div>
  )
}

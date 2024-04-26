import React, { useState } from "react";

const BookingForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            <h1>Reservation Form</h1>
            <div>
              <label htmlFor="book-name">Enter Your Name: </label>
              <input
                id="book-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                required
                placeholder="E.g: John Stones"
              ></input>
            </div>
            <div>
              <label htmlFor="book-email">Enter Your Email: </label>
              <input
                id="book-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="E.g: johnstones@gmail.com"
              ></input>
            </div>
            <div>
              <label htmlFor="book-date">Chose Date: </label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              ></input>
            </div>

            <div>
              <label htmlFor="book-time">Choose Time: </label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests: </label>
              <input
                id="book-guests"
                min="1"
                max="20"
                placeholder="E.g: 5"
                value={guest}
                onChange={(e) => {
                  setGuest(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion: </label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Party</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;

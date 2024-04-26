import React, { useReducer } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();
  const location = useLocation();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirm");
    }
  }

  const showHeader =
    location.pathname !== "/booking" && location.pathname !== "/confirm";

  return (
    <div>
      <main>
        {showHeader && <Header />}
        <Routes>
          <Route
            path="/booking"
            element={
              <Booking
                availableTimes={state}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirm" element={<ConfirmedBooking />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;

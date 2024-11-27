import React, { useEffect, useRef, useReducer } from "react";

const initialState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMER":
      return {
        days: action.payload.days,
        hours: action.payload.hours,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds,
      };
    default:
      return state;
  }
}

function Timer({ formate, countdownDate = "Feb 10, 2024, 05:15:18" }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let interval = useRef();

  const startTimer = () => {
    const countdownDateObj = new Date(countdownDate).getTime();
  
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDateObj - now;
      const totalSeconds = Math.floor(distance / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);
  
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        dispatch({
          type: "UPDATE_TIMER",
          payload: { days, hours, minutes, seconds },
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      {formate === "counter1" && (
        <>
          {state.hours}&nbsp;:&nbsp;{state.minutes}&nbsp;:&nbsp;{state.seconds}
        </>
      )}
      {formate === "counter2" && (
        <>
          <div className="countdown-single">
            <h5 id="days9">{state.days}</h5>
            <span>Days</span>
          </div>
          <div className="countdown-single">
            <h5 id="hours9">{state.hours}</h5>
            <span>Hours</span>
          </div>
          <div className="countdown-single">
            <h5 id="minutes9">{state.minutes}</h5>
            <span>Mins</span>
          </div>
          <div className="countdown-single">
            <h5 id="seconds9">{state.seconds}</h5>
            <span>Secs</span>
          </div>
        </>
      )}
      {formate === "counter5" && (
        <>
          <span>{state.days}</span> Days : <span>{state.hours}</span> Hours :
          <span>{state.minutes}</span> Min : <span>{state.seconds}</span> Sec
        </>
      )}
      {formate === "counter3" && (
        <>
          <span>{state.days}</span>D :&nbsp;
          <span>{state.hours}</span>H :&nbsp;
          <span>{state.minutes}</span>M :&nbsp;
          <span>{state.seconds}</span>S
        </>
      )}
      {formate === "counter4" && (
        <>
          <span>{state.hours}</span>Hours : <span>{state.minutes}</span>Min
          :&nbsp;
          <span>{state.seconds}</span>Sec
        </>
      )}
      {formate === "counter6" && (
        <>
          <li>
            <span id="days">{state.days}</span>
            days
          </li>
          <li>
            <span id="hours">{state.hours}</span>
            Hours
          </li>
          <li>
            <span id="minutes">{state.minutes}</span>
            Minutes
          </li>
          <li>
            <span id="seconds">{state.seconds}</span>
            Seconds
          </li>
        </>
      )}
      {formate === "counter7" && (
        <>
          {state.days}d : {state.hours}h : {state.minutes}m : {state.seconds}s
        </>
      )}
    </>
  );
}

export default Timer;

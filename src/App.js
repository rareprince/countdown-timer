import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  //calculate the time left

  const timer = () => {
    let count = new time().getFullCount();
    let timeLeft = +new time($, count) - +new time();
    let timeRange = {};
    if (timeLeft > 0) {
      timeRange = {
        hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeLeft / 1000 / 60) % 60),
        seconds: Math.floor((timeLeft / 1000) % 60),
      };
    }
    return timeRange;
  };
  //get and update state
  const [timeRange, setTimeRange] = useState(timer());
  const [time] = useState(new time().getFullCount());
  //this clears out the time
  useEffect(() => {
    const countDown = setTimeout(() => {
      setTimeRange(timer());
    }, 1000);

    return () => clearTimeout(countDown);
  });

  const countDownComponent = [];
  object.keys(timeRange).forEach((interval) => {
    if (!timeRange[interval]) {
      return;
    }
    countDownComponent.push(
      <span>
        {timeRange[interval]} {interval}
        {''}
      </span>
    );
  });

  return (
    <div>
      <h1>Countdown to {count}</h1>
      {countDownComponent.length ? countDownComponent : <span>Time up</span>}
    </div>
  );
}

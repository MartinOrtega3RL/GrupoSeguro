import style from "../Assets/css/Reloj.module.css";

import React, { useEffect, useRef, useState } from 'react';

function Reloj() {
  const myRef = useRef(null);
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function getTime() {
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();

    const formattedHh = `0${hh}`.slice(-2);
    const formattedmm = `0${mm}`.slice(-2);
    const formattedss = `0${ss}`.slice(-2);

    return `${formattedHh}:${formattedmm}:${formattedss}`;
  }

  return (
    <div style={style} className="fixed-bottom">
      <h1 ref={myRef}>{time}</h1>
    </div>
  );
}

export default Reloj;

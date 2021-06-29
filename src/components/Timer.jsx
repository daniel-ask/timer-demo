import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const [sec, setSec] = useState(props.seconds);

  const [min, setMin] = useState(props.minutes);

  const [explosion, setExplosion] = useState(false);

  useEffect(() => {
    if (!explosion) {
      setTimeout(() => {
        if (sec <= 0 && min <= 0) {
          setExplosion(true);
        } else if (sec <= 0) {
          setSec(59);
          setMin(min - 1);
        } else {
          setSec(sec - 1);
        }
      }, 1000);
    }
  }, [sec, explosion]);

  return (
    <div>
      {min === 0 && sec === 0 ? (
        <h1>TIME IS UP!</h1>
      ) : (
        <h1>{min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}</h1>
      )}
      <button onClick={() => setExplosion(!explosion)}>Pause</button>
    </div>
  );
}

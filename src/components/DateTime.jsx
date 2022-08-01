import { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="dateContainer">
      <h1>
        {dateTime.getHours()}:
        {dateTime.getMinutes() < 10
          ? "0" + dateTime.getMinutes()
          : dateTime.getMinutes()}
      </h1>
      <p>{dateTime.toDateString()}</p>
    </div>
  );
};

export default DateTime;

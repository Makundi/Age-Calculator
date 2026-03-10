import datepicker from "js-datepicker";
import { useEffect, useRef, useState } from "react";
import CalculateAge from "./CalculateAge";

const Home = () => {
  const myInputRef = useRef(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const [dateObj, error] = CalculateAge(date);

    if (error) {
      setMessage(error);
    } else {
      setMessage(
        `You are ${dateObj.years} years ${dateObj.months} months and ${Math.floor(dateObj.days)} days old`,
      );
    }
  };

  useEffect(() => {
    const picker = datepicker(myInputRef.current, {
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString();
        myInputRef.current.value = value; // => '1/1/2099'
        setDate(myInputRef.current.value);
      },
    });

    return () => picker.remove();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="my-datepicker"
          ref={myInputRef}
          type="text"
          required
          placeholder="enter your birthdate dd/mm/yy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Calculate</button>
        <div className="age-message">{message}</div>
      </form>
    </>
  );
};

export default Home;

import { useState,useEffect } from "react";

export default function Home() {
  const [getValue, setValue] = useState("");
  //const [displayValue, setDisplayValue] = useState([]);
  const [getcurrency, setGetCurrency] = useState([]);
  const [getForm, setGetForm] = useState("");
  const [getTo, setGetTo] = useState("");

  function handleButton() {
    //     if (!getValue) return;
    //     const newArr = [...displayValue, getValue];
    //     setDisplayValue(newArr);
    //     setValue("");
  }

  async function dataFetch() {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      console.log(data);
      const currencyOptions = Object.keys(data.rates);
      setGetCurrency(currencyOptions);
    } catch (error) {
      console.log("error not find");
    }
  }
  useEffect(() => {
    dataFetch(); // runs once when component mounts
  }, []);
  return (
    <div>
      <div>
        <label>Amount</label>
        <input onChange={(e) => setValue(e.target.value)} value={getValue} />

        <label>From</label>
        <select onChange={(e) => setGetForm(e.target.value)} value={getForm}>
          {getcurrency.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
        </select>

        <label>To</label>
        <select onChange={(e) => setGetTo(e.target.value)} value={getTo}>
          {getcurrency.map((data, index) => {
            <option key={index} value={data}>
              {data}
            </option>;
          })}
        </select>
        <button
          onClick={() => {
            dataFetch();
          }}
        >
          Connect
        </button>
      </div>
      <p></p>
    </div>
  );
}

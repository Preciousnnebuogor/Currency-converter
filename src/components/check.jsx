import { useState,useEffect } from "react";

export default function Check() {
  const [getValue, setValue] = useState("");
  const [getcurrency, setGetCurrency] = useState([]);
  const [getForm, setGetForm] = useState("");
  const [getTo, setGetTo] = useState("");

  async function dataFetch() {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      const currencyOptions = Object.keys(data.rates);
      setGetCurrency(currencyOptions);
    } catch (error) {
      console.log("error not found");
    }
  }
  useEffect(() => {
    dataFetch(); // runs once when component mounts
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Currency Converter
        </h1>

        <div className="space-y-2">
          <label className="block font-medium text-gray-600">Amount</label>
          <input
            type="number"
            onChange={(e) => setValue(e.target.value)}
            value={getValue}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-gray-600">From</label>
          <select
            onChange={(e) => setGetForm(e.target.value)}
            value={getForm}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select currency</option>
            {getcurrency.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-gray-600">To</label>
          <select
            onChange={(e) => setGetTo(e.target.value)}
            value={getTo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select currency</option>
            {getcurrency.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={dataFetch}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Connect
        </button>
      </div>
      <p></p>
    </div>
  );
}

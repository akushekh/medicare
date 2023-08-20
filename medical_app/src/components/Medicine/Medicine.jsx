import React from "react";
import { useState, useEffect } from "react";
// import './Home.css'

const Medicine = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:5000/api/v1/listOfMedicine')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(data)
};

export default Medicine;

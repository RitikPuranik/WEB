import React, { useEffect, useState } from 'react';

const Day5 = () => {
  const [count, setcount] = useState(0);
  const [input, setinput] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    let apiLink = 'https://dummyjson.com/recipes';
    fetch(apiLink)
      .then((res) => res.json())
      .then((d) => {
        let filterData = d.recipes.filter((apiData) => {
          return apiData.cuisine === 'Italian';
        });
        let names = filterData.map((apiData) => apiData.name);
        setinput(names);
      });
  }, []);

  return (
    <div>
      <button onClick={() => setcount(count + 1)}> count {count}</button>
      {
        input.map((a, i) => {
          return (
            <p key={i}>{a}</p>
          );
        })
      }
    </div>
  );
};

export default Day5;

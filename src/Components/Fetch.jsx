import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((reasponse) => reasponse.json())
      .then((resData) => setData(resData));
  }, []);
  console.log(data);
  return (
    <>
      {data ? (
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <hr />
          </div>
        ))
      ) : (
        <p>Loding....</p>
      )}
    </>
  );
}

export default Fetch;

import styles from "../../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Card from "../../comps/card";

function DataDisplayer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const newData = await response.json();
      console.log(newData);
      setData(newData);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div>
        <h2 className={styles.HeaderItem}>Clothes Store </h2>
        <p className={styles.headerChoose}>Choose your Item please!!!</p>
        <div className={styles.main}>
          {data.map((val) => (
            <Card product={val} key={val.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default DataDisplayer;

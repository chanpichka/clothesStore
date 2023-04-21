// import Link from "next/Link";
// import Layout from "../comps/Layout";
import styles from "../../styles/Home.module.css";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
const SingleItem = () => {
  const router = useRouter();
  const { productId } = router.query;

  //   return <div>{productId}</div>;

  const [data, setData] = useState([]);
  const fetchData = async () => {
    if (!productId) return;
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const newData = await response.json();
      // console.log(newData);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  if (data) {
    // return <div>{data.results[0].name}</div>;
    return (
      <div>
        <h2 className={styles.h2}>Welcome to Our Services </h2>
        <div className={styles.contentDetailAll}>
          <div >
            <div className={styles.backgroundImage}>
              <Image src={data.image} alt="Image" width={150} height={150} className={styles.contentDetailImage} />
            </div>
          </div>
          <div className={styles.contentDetail}>
            <div className={styles.DetailId}>
              {data.id}
            </div>
            <div className={styles.DetailTitle}>
              {data.title}
            </div>
            <div className={styles.DetailPrice}>
              {data.price}
            </div>
            <div className={styles.DetailCategory}>
              {data.category} 
            </div>
            <div className={styles.DetailDescription}>
              {data.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default SingleItem;

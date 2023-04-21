import Image from "next/image";
import Link from "next/Link";
import { CartContext } from "../content";
import { useContext } from "react";
import styles from "../styles/Home.module.css";
const CardProductDetail = ({ product }) => {
  const { addCart, removeCard, getCountQuantity } = useContext(CartContext);

  return (
    <div className={styles.mainDetailC}>
      <div key={product.id} className={styles.BgCartDetail}>
        <div>
          <Image src={product.image} alt="Image" width={250} height={250} />
        </div>
        <div className={styles.ContentCartD}>
          <div className={styles.titCartDetail}>{product.title}</div>
          <div>{product.category} </div>
          <div>{product.description}</div>
          <div>{product.price}</div>
          <div>
            <button onClick={() => removeCard(product)}>-</button>
            <p>{getCountQuantity(product)}</p>
            <button onClick={() => addCart(product)}>+</button>
          </div>
          <Link href={`/product/${product.id}`}>See more...</Link>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;

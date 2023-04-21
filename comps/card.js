import Image from "next/image";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
import { CartContext } from "../content";
import { useContext } from "react";

const Card = ({ product }) => {
  const { addCart , removeCard, getCountQuantity} = useContext(CartContext);

  return (
    <div className={styles.imageMain} key={product.id}>
      <div className={styles.image}>
        <Image src={product.image} alt="Image" width={115} height={115} />
      </div>
      <div className={styles.TitleItem}>{product.title}</div>
      <div className={styles.contentPrice}>
        <div className={styles.MoneyItem}>{product.price}</div>

        <div className={styles.btn}>
          <button className={styles.btnPlus} onClick={() => removeCard(product)}>
            -
          </button>
          <p className={styles.PNum}>{getCountQuantity(product)}</p>
          <button
            className={styles.btnSub}
            onClick={() => addCart(product)}  
          >
            +
          </button>
        </div>
      </div>
      <Link href={`/product/${product.id}`} className={styles.PicItem}>
        See more...
      </Link>
    </div>
  );
};

export default Card;

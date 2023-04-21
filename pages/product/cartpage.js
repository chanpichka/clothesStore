import { useContext } from "react";
import Card from "../../comps/card";
import { CartContext } from "../../content";
import Link from "next/Link";
import { TokenContext } from "../../content/token";
import { useRouter } from "next/router";
import CardProductDetail from "../../comps/card-product-detail";

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const { data } = useContext(TokenContext);
  const router = useRouter();
  
  let total = 0;
  cart.forEach((val) => (total += val.quantity * val.price));
  
  const handleCheckout = () => {
    // console.log(data.token);
    if (!data.token) {
      router.push("/product/signup");
      return;
    }
    alert("You have purchased !!!");
    // checkout();
    setCart([]);
  };

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => <CardProductDetail key={item.id} product={item} />)
      ) : (
        <div>No Item</div>
      )}
      <h1>Total: {total.toFixed(2)}</h1>
      {/* <Link href="/product/signup" className="navbar">
        Go to Sign Up
      </Link> */}
      <button onClick={handleCheckout}>Check out</button>
    </div>
  );
}

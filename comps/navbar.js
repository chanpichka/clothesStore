import Link from "next/Link";
import Layout from "./Layout";
import Image from "next/image";
import CartPage from "../pages/product/cartpage";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/picLog.png" alt="cooktail" width="100" height="30" />
        {/* <p>Store</p> */}
      </div>

      <Link href="/">Home</Link>
      <Link href="/product">Store</Link>
      <Link href="/product/cartpage">Card</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/product/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;

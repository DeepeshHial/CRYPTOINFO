import { useContext } from "react";
import style from "./navbar.module.css";
import { CoinContext } from "../../context/Coincontext";

export default function Navbar() {
  const { setCurrency } = useContext(CoinContext);
  function currencyHandler(e) {
    switch (e.target.value) {
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      default: {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
    }
  }

  return (
    <div className={style.navbar}>
      <h3>CRYPTO INFO</h3>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className={style.right}>
        <select onChange={(e) => currencyHandler(e)}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button>SignUp</button>
      </div>
    </div>
  );
}

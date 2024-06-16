import { useContext, useEffect, useState } from "react";
import style from "./home.module.css";
import { CoinContext } from "../../context/Coincontext";

export default function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div>
      <div className={style.intro}>
        <h1>Get The Cryptocurrency Information</h1>
        <p className={style.firstpara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> At mollitia quidem obcaecati facere exercitationem blanditiis,
          sunt nam iste. Cumque, voluptate!
          <br />
          quidem obcaecati facere exercitationem blanditiis, sunt nam iste.
          Cumque, voluptate!
        </p>
        <form onSubmit={searchHandler}>
          <input
            value={input}
            onChange={inputHandler}
            type="text"
            placeholder="search for crypto.. "
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={style.crypto_table}>
        <div className={style.table_layout}>
          <p>SNo</p>
          <p>Coins</p>
          <p>Price</p>
          <p>Changes In 24hr</p>
          <p>Capital</p>
        </div>
        {displayCoin.slice(0, 12).map((item, index) => (
          <div className={style.table_layout} key={index}>
            <p className={style.paragraph}>{item.market_cap_rank}</p>
            <div className={style.BitContainer}>
              <img className={style.Bitimages} src={item.image} alt="" />
              <p>{item.name + "-" + item.symbol}</p>
            </div>
            <p className={style.paragraph}>
              {currency.symbol}
              {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0 ? style.green : style.red
              }
            >
              {Math.floor(item.price_change_percentage_24h * 100)}%
            </p>
            <p className={style.paragraph}>
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

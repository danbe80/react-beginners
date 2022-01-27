import {useState, useEffect} from "react";

function Coins(){
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [coins, setCoins] = useState([]);
  const [choose, setChoose] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  }, [])
  const onChange = (event) => {
    setMoney(event.target.value);
  }
  const onSelect = (event) => {
    setChoose(event.target.value);
  }
  return (
    <div>
      <h1>The Coins!({loading ? "0" : coins.length})</h1>
      {loading? <stroung>Loading...</stroung> : 
      <div>
        <h2>How much money do you have?</h2>
        <input
          type="number"
          value={money}
          placeholder="Money"
          onChange={onChange}
        ></input>
        {
          money === null ? null : <div>You have {money} USD</div>
        }
        <hr />
        <select onChange={onSelect} value={choose}>
          {
            coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : {(coin.quotes.USD.price).toFixed(3)}USD
                {money !== 0 ? ` / you buy : ${Math.floor(money / coin.quotes.USD.price)}` : null}
              </option>
              ))
          }
        </select>
      </div>
      }
      {
        choose === "" ? null : <h3>You can purchase this coin: {Math.floor(money / choose)} </h3> 
      }
    </div>
  );
}
export default Coins;
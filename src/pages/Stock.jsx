import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useStocksContext from "../Hooks/use-stocks-context";

function Stock() {
  const [stock, setStock] = useState([]);
  const { stocksData } = useStocksContext();
  const { name, symbol, lastPrice, change, high, low, open } = stock;

  const params = useParams();

  useEffect(() => {
    stocksData.find(item => item.symbol === params.symbol && setStock(item));
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>{lastPrice}</td>
            <td>{change}</td>
            <td>{high}</td>
            <td>{low}</td>
            <td>{open}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stock;

/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import data from "../data.js";

export const StocksContext = createContext();

export function Provider({ children }) {
  const [stocksData, setStocksData] = useState(data);
  const [follow, setFollow] = useState([]);

  const handleFollow = stockInfo => {
    setFollow([...follow, stockInfo]);
  };

  const handleUnfollow = stockInfo => {
    const toUnfollow = follow.filter(item => item.symbol !== stockInfo.symbol);
    stockInfo.following = false;
    setFollow(toUnfollow);
  };

  const valueToShare = {
    stocksData,
    follow,
    handleFollow,
    handleUnfollow,
  };

  return (
    <StocksContext.Provider value={valueToShare}>
      {children}
    </StocksContext.Provider>
  );
}

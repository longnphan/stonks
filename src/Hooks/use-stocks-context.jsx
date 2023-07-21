import { useContext } from "react";
import { StocksContext } from "../context/stocksContext";

function useStocksContext() {
  return useContext(StocksContext);
}

export default useStocksContext;

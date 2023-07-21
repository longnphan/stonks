import StocksList from "../components/StocksList";
import useStocksContext from "../Hooks/use-stocks-context";

function MyStock() {
  const { follow } = useStocksContext();

  return (
    <div className="container">
      <StocksList data={follow} />
    </div>
  );
}

export default MyStock;

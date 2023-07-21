import StocksList from "../components/StocksList";
import data from "../data";

function Dashboard() {
  return (
    <div className="container">
      <StocksList data={data} />
    </div>
  );
}

export default Dashboard;

/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useStocksContext from "../Hooks/use-stocks-context";
import "./StocksItem.css";

function StocksItem({ stockInfo }) {
  const navigate = useNavigate();
  const { change, following, lastPrice, name, symbol } = stockInfo;
  const { handleFollow, handleUnfollow } = useStocksContext();

  const handleFollowClick = () => {
    stockInfo.following = true;
    handleFollow(stockInfo);
  };

  const handleUnfollowClick = () => {
    handleUnfollow(stockInfo);
  };

  const navigateLink = () => {
    return navigate(`/stocks/${symbol}`);
  };

  const renderFollowCell = () => {
    return (
      <td className="follow-text" onClick={handleFollowClick}>
        Follow
      </td>
    );
  };

  const renderUnfollowCell = () => {
    return (
      <td className="follow-text" onClick={handleUnfollowClick}>
        Unfollow
      </td>
    );
  };

  return (
    <>
      <tbody>
        <tr>
          <td onClick={navigateLink}>{name}</td>
          <td onClick={navigateLink}>{lastPrice}</td>
          <td onClick={navigateLink}>{change}</td>
          {following ? renderUnfollowCell() : renderFollowCell()}
        </tr>
      </tbody>
    </>
  );
}

export default StocksItem;

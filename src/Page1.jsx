import { Link, useHistory } from "react-router-dom";
export const Page1 = () => {
  const listInfo = [0, 2, 4, 6];
  const history = useHistory();

  const onClickDetailA = () => history.push("page1/detailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      {/* listInfoをdetailAでも共有できるようにする */}
      <Link to={{ pathname: "page1/detailA", state: listInfo }}>DetailA</Link>
      <br />
      <Link to="page1/detailB">DetailB</Link>
      <br />
      {/* リンクでなくボタンで画面遷移を実行する→useHistoryを使う */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};

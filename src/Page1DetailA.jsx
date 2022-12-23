//変数を画面間で共有するのに使う
import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  //stateにlistInfoが渡される
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  //goBackでひとつ前の画面に戻れる
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};

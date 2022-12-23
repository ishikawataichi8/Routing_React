//urlparameterを使って使用者によって画面を変える
import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  // page2Routesにpathを/:idと設定したので、パスの変数idを受け取れる
  //クエリパラメーターを受け取る方法もある
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};

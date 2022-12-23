import { Switch, Route } from "react-router-dom";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Home } from "../Home";
import { page2Routes } from "./Page2Routes";
import { Page2 } from "../Page2";

export const Router = () => {
  // パスによってどのコンポーネントを表示するか場合わけする
  return (
    <Switch>
      {/* pathだと指定したアドレス以下全てが適用されてしまう(/だけでなく/aaaなども含まれてしまう) */}
      {/* →exactを入れれば完全に一致したもののみ適用される(/aaaを含まないようにできる) */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* アドレスがpage1の時はPage1コンポーネントを表示する */}

      {/* ここは入れても入れなくても良い */}
      {/*<Route
          path="/page1"
          render={() => (
            <Switch> */}
      <Route exact path="/page1">
        <Page1 />
      </Route>
      <Route path="/page1/detailA">
        <Page1DetailA />
      </Route>
      <Route path="/page1/detailB">
        <Page1DetailB />
      </Route>
      {/* </Switch>
          )}
        /> */}

      {/* 以下のように書くこともできる */}
      <Route
        path="/page2"
        //renderの引数に{match: {url}を入れることでpathを取得できる
        render={({ match: { url } }) => {
          return (
            <Switch>
              {/* <Route exact path="/page2">
                <Page2 />
              </Route> */}
              {page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.Children}
                </Route>
              ))}
            </Switch>
          );
        }}
      />
    </Switch>
  );
};

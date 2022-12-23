import { BrowserRouter, Link } from "react-router-dom";

import "./styles.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    //<BrowserRouter>で囲みルーティング(ページ遷移機能)を有効にする
    <BrowserRouter>
      <div className="App">
        {/* htmlにおけるaタグのようなもの */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

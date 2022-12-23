import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    Children: <Page2 />
  },
  {
    // urlパラメーターの時は/でなく/:になる
    path: "/:id",
    exact: false,
    Children: <UrlParameter />
  }
];

// () => {return(変数)};は()=>変数とかける

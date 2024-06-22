import { Fragment } from "react";
import { CartIcon } from "../constants/icons";

export const Nav = () => {
  const cart = { CartIcon };
  return (
    <Fragment>
      <span className="pageTitle">UMC PlayList</span>
      <span className="cartIcon">{cart}</span>
    </Fragment>
  );
};

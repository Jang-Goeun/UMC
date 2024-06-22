import { useSelector } from "react-redux";
import styled from "styled-components";
//import SvgIcon from "@mui/material/SvgIcon";
//import { SvgIconComponent } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
export const Nav = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <NavWrapper>
      <h2>UMC PlayList</h2>
      <div className="cart">
        <ShoppingBagOutlinedIcon className="search_icon" fontSize="large" />
        <div className="count">
          <span>{totalAmount}</span>
        </div>
      </div>
    </NavWrapper>
  );
};

{
  /* 아이콘 */
}
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 100px;
  background-color: #5852fe;
  color: white;
  font-weight: bolder;

  .cart {
    display: flex;
    position: relative;
    gap: -10px;
    .count {
      position: absolute;
      padding-left: 20px;
    }
  }

  span {
    font-size: 12px;
    border-radius: 100px;
    padding: 3px;
    height: 20px;
    background-color: rgb(153, 147, 245, 1);
  }
`;

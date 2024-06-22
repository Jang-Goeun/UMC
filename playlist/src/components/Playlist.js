import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  remove,
  clear,
  calculateTotals,
} from "../redux/cartSlice";
import styled from "styled-components";

export const Playlist = () => {
  const cartlist = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const cartlistView = cartlist.map((cart) => (
    <li className="music" key={cart.id}>
      <div className="musicInfo">
        <img className="musicImage" src={cart.img} alt={cart.title} />
        <div className="info">
          <div>
            {cart.title} | {cart.singer}
          </div>
          <div>₩ {cart.price}</div>
        </div>
      </div>
      <div className="counter">
        <span onClick={() => dispatch(increase(cart.id))}>︿</span>
        <p>{cart.amount}</p>
        <span onClick={() => dispatch(decrease(cart.id))}>﹀</span>
      </div>
    </li>
  ));
  return (
    <Wrapper>
      <div className="cart">
        <h1>당신이 선택한 음반</h1>
        {cartlist.length > 0 ? (
          <>
            <div className="cartlist">{cartlistView}</div>
            <hr />
            <div className="price">
              <span>총 가격</span>
              <span>₩ {totalPrice}</span>
            </div>
            <div className="clear">
              <button onClick={() => dispatch(clear())}>장바구니 초기화</button>
            </div>
          </>
        ) : (
          <p className="text">고객님이 좋아하는 음반을 담아보세요 ~ !</p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .music {
    display: flex;
    gap: 30px;
    padding: 10px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .musicInfo {
    display: flex;
    gap: 30px;
  }
  h1 {
    text-align: center;
  }
  hr {
    margin-top: 20px;
  }
  .text {
    text-align: center;
    padding-top: 20px;
    height: 700px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  p {
    font-weight: bold;
    color: #8997a9;
  }
  .clear {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 100px;

    button {
      background-color: white;
      border: 1px solid darkred;
      border-radius: 5px;
      color: darkred;
      font-size: 20px;
    }
  }
`;

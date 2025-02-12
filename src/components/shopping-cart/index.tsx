import Link from "next/link";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";

import CheckoutStatus from "../checkout-status";
import Item from "./item";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Meu carrinho</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Adicionados</th>
                  <th />
                  <th />
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th />
                </tr>

                {cartItems.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Adicione algum item</p>}
        </div>

        <div className="cart-actions">
          <Link href="/products" className="cart__btn-back">
            <i className="icon-left" /> Continuar a escolher
          </Link>
          {/*
          <input
            type="text"
            placeholder="Promo Code"
            className="cart__promo-code"
          />
          */}

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Valor total <strong>R${priceTotal().toFixed(2)}</strong>
            </p>
            <Link
              href="/cart/checkout"
              className="btn btn--rounded btn--yellow"
            >
              Continuar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

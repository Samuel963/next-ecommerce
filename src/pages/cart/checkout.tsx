import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";

import CheckoutItems from "@/components/checkout/items";
import CheckoutStatus from "@/components/checkout-status";
import type { RootState } from "@/store";

import Layout from "../../layouts/Main";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  const itens = useSelector((state: RootState) => {
    const { cartItems } = state.cart;
    return cartItems;
  });
  const priceTotal = useSelector((state: RootState) => {
    const { cartItems } = state.cart;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // Função para atualizar os dados do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (value.length <= 2) {
      value = value.replace(/(\d{2})/, '($1');
    } else if (value.length <= 6) {
      value = value.replace(/(\d{2})(\d{1,5})/, '($1) $2');
    } else {
      value = value.replace(/(\d{2})(\d{1,5})(\d{4})/, '($1) $2-$3');
    }
    setFormData({
      ...formData,
      phone: value,
    });
  };

  function gerarMensagem(cliente: any, itens: any) {
    console.log(cliente.phone.length);
    // Cabeçalho da mensagem com o nome e telefone
    let mensagem = `Nome: ${cliente.name}\nTelefone: ${cliente.phone}\n\nItens pedidos:\n`;

    // Adiciona cada item pedido na mensagem
    itens.forEach((item: any, index: any) => {
      mensagem += `${index + 1}. Nome: ${item.name}\n`;
      mensagem += `Código: ${item.id}\n`;
      mensagem += `Preço: R$ ${item.price},00\n`;
      mensagem += `Quantidade: ${item.count}\n`;
      mensagem += `Cor: ${item.color || "Não especificada"}\n\n`;
    });

    return mensagem;
  }

  function criarLinkWhatsApp(cliente: any, itens: any) {
    const mensagem = gerarMensagem(cliente, itens);
    console.log(mensagem);
    const textoCodificado = encodeURIComponent(mensagem); // Codifica a mensagem para o link
    const link = `https://api.whatsapp.com/send?phone=5581982286330&text=${textoCodificado}`;
    return link;
  }

  // Função chamada ao submeter o formulário
  const handleSubmit = (e: React.FormEvent) => {
    if (formData.name === "" || formData.phone === "") {
      alert("Preencha todos os campos");
      return;
    }

    if (formData.phone.length < 15) {
      alert("Telefone inválido");
      return;
    }

    e.preventDefault();

    const linkWhatsApp = criarLinkWhatsApp(formData, itens);
    router.push(linkWhatsApp);
  };

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Finalizar pedido</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="block">
                <h3 className="block__title">Informações</h3>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        name="phone"
                        placeholder="Telefone"
                        value={formData.phone}
                        maxLength={15}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              {/* Seção comentada de payment e delivery */}
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Seu pedido</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Valor total</p>
                  <h3>R${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <Link href="/cart" className="cart__btn-back">
              <i className="icon-left" /> Voltar
            </Link>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">
                Continuar comprando
              </button>
              <button type="submit" form="checkout-form" className="btn btn--rounded btn--yellow" onClick={handleSubmit}>
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;

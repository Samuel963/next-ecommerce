// components/TabelaDeProdutos.js

import { useAppContext } from "@/store/context/AppContext";
import { ProductTypeList } from "@/types";
import { getId } from "@/utils/getID";
import React, { useEffect, useState } from "react";

const ProductListComponent = () => {
  const { products, getProducts, deleteItem } = useAppContext();

  // Estados para armazenar os filtros
  const [filtroId] = useState("");
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroCategoria] = useState("");
  const [filtroPreco, setFiltroPreco] = useState("");

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
  }, []);

  // Função para filtrar os produtos com base nos filtros aplicados
  const filtrarProdutos = () => {
    return products.filter((produto: ProductTypeList) => {
      return (
        (filtroId === "" || produto.id.toString().includes(filtroId)) &&
        (filtroNome === "" ||
          getId(produto.id).toLowerCase().includes(filtroNome.toLowerCase())) &&
        (filtroCategoria === "" ||
          produto.category
            ?.toLowerCase()
            .includes(filtroCategoria.toLowerCase())) &&
        (filtroPreco === "" ||
          produto.currentPrice?.toString().includes(filtroPreco))
      );
    });
  };

  // Definindo estilos inline
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const tituloStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse" as "collapse",
    marginTop: "20px",
  };

  const thTdStyle: React.CSSProperties = {
    padding: "12px",
    textAlign: "left" as "left",
    border: "1px solid #ddd",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#f4f4f4",
  };

  const trEvenStyle = {
    backgroundColor: "#f9f9f9",
  };

  const trHoverStyle = {
    backgroundColor: "#f1f1f1",
  };

  const buttonStyle = {
    padding: "8px 12px",
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    display: "inline-block",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545", // vermelho
    color: "white",
  };

  const handleDelete = async (id: string) => {
    await deleteItem(id);
  };

  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>Lista de Produtos</h1>

      {/* Campos de Filtro */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Filtrar por Nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
          style={{
            padding: "8px",
            width: "20%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#ccc",
            borderRadius: "15px",
          }}
        />
        {/*
        <input
          type="text"
          placeholder="Filtrar por Categoria"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
          style={{
            padding: "8px",
            width: "20%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#ccc",
            borderRadius: "15px",
          }}
        />
        */}
        <input
          type="text"
          placeholder="Filtrar por Preço"
          value={filtroPreco}
          onChange={(e) => setFiltroPreco(e.target.value)}
          style={{
            padding: "8px",
            width: "20%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#ccc",
            borderRadius: "15px",
          }}
        />
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}></th>
            <th style={thStyle}>Código</th>
            <th style={thStyle}>Preço</th>
            <th style={thStyle}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtrarProdutos().map((produto: ProductTypeList, index) => (
            <tr
              key={produto.id}
              style={index % 2 === 0 ? trEvenStyle : {}}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  trHoverStyle.backgroundColor)
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <td style={thTdStyle}>
                <img
                  src={produto.thumb}
                  style={{ width: 100, height: 100 }}
                  alt="product"
                />
              </td>
              <td style={thTdStyle}>{getId(produto.id)}</td>
              <td style={thTdStyle}>R${produto.currentPrice}</td>
              <td style={thTdStyle}>
                <button
                  style={deleteButtonStyle}
                  onClick={() => handleDelete(produto.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListComponent;

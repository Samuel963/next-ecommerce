import React from "react";

import { useProductForm } from "./usePrductForm";

const UploadImageWithProductData: React.FC = () => {
  const {
    formData,
    isUploading,
    handleImageChange,
    handleQuantityChange,
    handlePriceChange,
    handleColorChange,
    handleRemoveColor,
    handleDescriptionChange,
    handleSubmit,
  } = useProductForm();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7fafc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "32rem",
          width: "100%",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            textAlign: "center",
            color: "black",
            marginBottom: "1.5rem",
          }}
        >
          Cadastro de Produto
        </h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="quantity-available"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Quantidade Disponível
            </label>
            <input
              id="quantity-available"
              name="quantityAvailable"
              type="number"
              value={formData.quantityAvailable}
              onChange={handleQuantityChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ef4444",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                color: "#333",
                marginBottom: "1rem",
              }}
              placeholder="Digite a quantidade disponível"
              required
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="current-price"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Preço Atual
            </label>
            <input
              id="current-price"
              name="currentPrice"
              type="number"
              value={formData.currentPrice}
              onChange={handlePriceChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ef4444",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                color: "#333",
                marginBottom: "1rem",
              }}
              placeholder="Digite o preço atual"
              required
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="colors"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Cores Disponíveis
            </label>
            <input
              type="text"
              onKeyDown={handleColorChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ef4444",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                color: "#333",
                marginBottom: "1rem",
              }}
              placeholder="Pressione Enter para adicionar cores"
            />
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {formData.colors.map((color, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <span>{color}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveColor(color)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="description"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleDescriptionChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ef4444",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                color: "#333",
                resize: "vertical",
                minHeight: "8rem",
                marginBottom: "1rem",
              }}
              placeholder="Descrição do produto"
              required
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="product-image"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Selecione a Imagem
            </label>
            <input
              type="file"
              id="product-image"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ef4444",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                color: "#333",
                marginBottom: "1rem",
              }}
              required
            />

            {/* Pré-visualização da imagem carregada */}
            {formData.image && (
              <div style={{ marginTop: "1rem" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    color: "black",
                  }}
                >
                  Pré-visualização da Imagem:
                </h3>
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Imagem do produto"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: "0.375rem",
                    objectFit: "cover",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isUploading}
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: isUploading ? "#ef4444" : "#dc2626",
                color: "white",
                fontSize: "1rem",
                fontWeight: "500",
                borderRadius: "0.375rem",
                border: "none",
                cursor: isUploading ? "not-allowed" : "pointer",
              }}
            >
              {isUploading ? "Enviando..." : "Enviar Produto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadImageWithProductData;

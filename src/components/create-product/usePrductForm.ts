import { BASE_URL } from "@/utils/server";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

interface FormDataType {
  image: File | null;
  quantityAvailable: "";
  currentPrice: "";
  colors: string[];
  description: string;
}

const initialFormData: FormDataType = {
  image: null,
  quantityAvailable: "",
  currentPrice: "",
  colors: [],
  description: "",
};

export const useProductForm = () => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        image: e.target.files ? e.target.files[0] : null,
      }));
    }
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      quantityAvailable: e.target.value.replace(/\D/g, ""),
    }));
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      currentPrice: e.target.value.replace(/\D/g, ""),
    }));
  };

  const handleColorChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === "Enter" && value.trim() !== "") {
      setFormData((prevState) => ({
        ...prevState,
        colors: [...prevState.colors, value],
      }));
      (e.target as HTMLInputElement).value = ""; // Clear input after adding
    }
  };

  const handleRemoveColor = (color: string) => {
    setFormData((prevState) => ({
      ...prevState,
      colors: prevState.colors.filter((c) => c !== color),
    }));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { image, quantityAvailable, currentPrice, colors, description } =
      formData;

    if (
      !image ||
      Number(quantityAvailable) <= 0 ||
      Number(currentPrice) <= 0 ||
      colors.length === 0 ||
      !description
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsUploading(true);

    const formToSend = new FormData();
    formToSend.append("image", image);
    formToSend.append("quantityAvailable", String(quantityAvailable));
    formToSend.append("currentPrice", String(currentPrice));
    formToSend.append("colors", JSON.stringify(colors));
    formToSend.append("description", description);

    try {
      const response = await fetch(`${BASE_URL}products/`, {
        method: "POST",
        body: formToSend,
      });

      if (response.ok) {
        alert("Produto enviado com sucesso!");
        setFormData(initialFormData);
      } else {
        alert("Falha ao enviar produto.");
      }
    } catch (error: any) {
      alert("Erro ao enviar produto: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    formData,
    isUploading,
    handleImageChange,
    handleQuantityChange,
    handlePriceChange,
    handleColorChange,
    handleRemoveColor,
    handleDescriptionChange,
    handleSubmit,
  };
};

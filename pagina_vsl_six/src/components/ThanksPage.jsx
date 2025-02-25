import { useLocation } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import capsulas3 from "../../src/assets/img/3_capsulas_semBkg.png";
import capsula from "../../src/assets/img/img_capsula_semBk.png";

const CardProduto = ({ preco, descricao, imagem, beneficios }) => {
  return (
    <div className="max-w-sm rounded-3xl bg-gray-900 p-6 text-white shadow-lg">
      <p className="my-4 flex items-baseline gap-x-2 text-5xl font-semibold tracking-tight">
        {preco} 
        <span className="text-base text-gray-400">/no Pix</span>
      </p>
      <p className="my-4 text-gray-300">{descricao}</p>
      <div className="flex items-center justify-center">
        <img
          src={imagem}
          alt="Cápsulas"
          style={{ width: "50%" }}
          className="my-4 h-auto rounded-lg"
        />
      </div>
      <ul className="my-4 space-y-2 text-gray-300">
        {beneficios.map((beneficio, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon
              aria-hidden="true"
              className="h-6 w-5 flex-none text-blue-500"
            />
            {beneficio}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ThanksPage = () => {
  const params = new URLSearchParams(useLocation().search);
  const isThreeCaps = params.get("utm_term") === "3capsulas";

  return (
    <div className="w-full min-h-screen bg-gray-300 flex flex-col items-center">
      <h1 className="font-bold text-center py-10 text-2xl md:text-3xl lg:text-4xl">
        OBRIGADO PELA COMPRA !!
      </h1>
      <CardProduto
        preco={isThreeCaps ? "R$99,99" : "R$49,99"}
        descricao={
          isThreeCaps
            ? "A melhor Cápsula para emagrecimento, com o melhor custo benefício"
            : "A melhor Cápsula para emagrecimento"
        }
        imagem={isThreeCaps ? capsulas3 : capsula}
        beneficios={
          isThreeCaps
            ? ["Desconto de 20%", "Leve 3 e Pague 2", "Frete Grátis"]
            : ["Desconto de 20%"]
        }
      />
    </div>
  );
};

export default ThanksPage;

import user1 from "../../src/assets/img/user1.jpeg";
import user2 from "../../src/assets/img/user2.jpeg";
import user3 from "../../src/assets/img/user3.jpeg";

const evidencesData = [
  {
    image: user1,
    title: "Perdi 8kg em um mês sem mudar minha rotina",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis.",
    name: "João Silva",
    location: "São Paulo, SP",
  },
  {
    image: user2,
    title: "Nunca imaginei que emagrecer poderia ser tão fácil e natural",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis.",
    name: "Rodrigo Lago",
    location: "Campo Grande, CG",
  },
  {
    image: user3,
    title: "Me sinto mais leve, cheia de energia e com a autoestima lá em cima!",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum sequi quidem quam ipsam facere architecto tempore cumque quod ea optio labore inventore non magni animi aut quaerat, nostrum impedit.",
    name: "Joana Almeida",
    location: "Rio de Janeiro, RJ",
  },
];

function Evidences() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {evidencesData.map((evidence, index) => (
        <div
          key={index}
          className="flex items-start gap-4 my-10 p-6 rounded-lg w-4/5"
        >
          <img
            src={evidence.image}
            className="w-40 h-40 rounded-full border-2 border-gray-300"
            alt={evidence.name}
          />

          <div>
            <h3 className="font-bold text-blue-700" style={{ fontSize: 32 }}>
              {evidence.title}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-600 text-lg">★★★★★</span>
              <span className="text-yellow-600 font-bold">
                Compra Verificada
              </span>
            </div>

            <p
              className="mt-3 text-gray-700 leading-relaxed"
              style={{ fontSize: 20 }}
            >
              {evidence.text}
            </p>

            <p className="mt-3 text-gray-900 font-bold">
              {evidence.name}{" "}
              <span className="text-gray-600 font-normal">
                – {evidence.location}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Evidences;

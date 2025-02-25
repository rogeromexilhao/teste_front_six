const faqData = [
    {
      question: "Como este produto ajuda no emagrecimento?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis.",
    },
    {
      question: "Preciso fazer dieta ou exercícios para ter resultados?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor repellendus atque deleniti magnam ex corrupti ducimus nesciunt, accusamus explicabo quisquam, quaerat ad unde officiis, dolore neque dolorem sequi minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, est culpa! Quaerat repudiandae eaque aperiam blanditiis quasi tenetur earum ullam, totam necessitatibus ad? Dolorem quasi in itaque et velit inventore.",
    },
    {
      question: "Em quanto tempo começo a ver os resultados?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora adipisci animi minima ut exercitationem facilis mollitia at itaque. Temporibus possimus voluptas maiores, sapiente minima quia aut? Nulla vel sapiente molestiae!",
    },
    {
      question: "O produto tem contraindicações ou efeitos colaterais?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis.",
    },
    {
      question:
        "Posso tomar mesmo tendo problemas de saúde ou tomando outros medicamentos?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique veritatis excepturi ratione aut! Consequuntur ea repudiandae fugiat! Ratione beatae ea aliquid dolores accusamus sed animi, minus dolore nesciunt corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste. Alias modi eligendi distinctio laudantium unde ad odio odit doloribus, aspernatur corrupti et earum sint qui repudiandae officia inventore porro?",
    },
  ];
  
  function Fac() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <p className="font-bold text-center" style={{ fontSize: 34 }}>
          PERGUNTAS FREQUENTES
        </p>
  
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 py-20 px-6 w-4/5 border-b border-gray-400"
          >
            <h3 className="font-bold text-blue-700" style={{ fontSize: 32 }}>
              {faq.question}
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed" style={{ fontSize: 20 }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Fac;
  
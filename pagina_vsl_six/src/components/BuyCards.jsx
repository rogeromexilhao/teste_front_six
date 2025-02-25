import { CheckIcon } from '@heroicons/react/20/solid';
import capsula from '../../src/assets/img/img_capsula_semBk.png';
import capsulas3 from '../../src/assets/img/3_capsulas_semBkg.png';

function BuyCards({utmSource,utmCampaign,utmMediu}) {
  const tiers = [
    {
      id: 'tier-hobby',
      href: '#',
      price: 'R$49,99',
      description: "A melhor Cápsula para emagrecimento",
      features: ['Desconto de 20%'],
      featured: false,
    },
    {
      id: 'tier-enterprise',
      href: '#',
      price: 'R$99,99',
      description: 'A melhor Cápsula para emagrecimento, com o melhor custo-benefício',
      features: ['Desconto de 20%', 'Leve 3 e Pague 2', 'Frete Grátis'],
      featured: true,
    },
  ];

  return (
    <div className="relative isolate px-6 pb-20 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, index) => {
          const isFeatured = tier.featured;

          return (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-blue-600 sm:p-10 ${
                isFeatured
                  ? 'relative bg-gray-900 shadow-2xl'
                  : 'bg-white/60 sm:mx-8 lg:mx-0 ' +
                    (index === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none')
              }`}
            >
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={`text-5xl font-semibold tracking-tight ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
                  {tier.price}
                </span>
                <span className={`${isFeatured ? 'text-gray-400' : 'text-gray-500'} text-base`}>/no Pix</span>
              </p>

              <p className={`mt-6 text-base/7 ${isFeatured ? 'text-gray-300' : 'text-gray-700'}`}>{tier.description}</p>

              <div className="flex items-center justify-center mt-10">
                <img 
                  src={isFeatured ? capsulas3 : capsula} 
                  alt="Produto" 
                  loading="lazy" 
                />
              </div>

              <ul className={`mt-8 space-y-3 text-sm/6 sm:mt-10 ${isFeatured ? 'text-gray-300' : 'text-gray-700'}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={isFeatured ? `/obrigado-compra?&utm_source=${utmSource}&utm_campaing=${utmCampaign}&utm_mediu=${utmMediu}&utm_term=3capsulas` : `/obrigado-compra?&utm_source=${utmSource}&utm_campaing=${utmCampaign}&utm_mediu=${utmMediu}&utm_term=capsula`}
                aria-describedby={tier.id}
                className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 ${
                  isFeatured
                    ? 'bg-blue-700 text-white shadow-xs hover:bg-blue-500 focus-visible:outline-indigo-500'
                    : 'text-blue-600 ring-1 ring-blue-700 ring-inset hover:bg-blue-700 hover:text-white focus-visible:outline-indigo-600'
                }`}
              >
                Comprar
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuyCards;

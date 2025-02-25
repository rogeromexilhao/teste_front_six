const links = [
  { label: "Privacidade", href: "Privacidade#" },
  { label: "Termos e Condições", href: "Termos e Condições#" },
  { label: "Disclaimer", href: "Disclaimer#" },
  { label: "Contato", href: "Contato#" },
  { label: "Política de Entrega", href: "Política de Entrega#" },
];

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 text-sm">
      <nav className="mb-2">
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map((link, index) => (
            <li key={link.label} className="inline-flex items-center">
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
              {index < links.length - 1 && <span className="mx-1">|</span>}
            </li>
          ))}
        </ul>
      </nav>
      <p className="mb-2">Todos os direitos reservados</p>
      <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestias, ducimus pariatur excepturi voluptas deserunt.
      </p>
    </footer>
  );
}

export default Footer;

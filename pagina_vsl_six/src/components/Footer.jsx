import { useState,useRef } from 'react'

function Footer() {

  return (
    <div className="bg-black text-white text-center p-4 text-sm">    
      <nav className="mb-2">
        <ul className="flex flex-wrap justify-center gap-2">
          {[
            "Privacidade",
            "Termos e Condições",
            "Disclaimer",
            "Contato",
            "Politica de Entrega",
          ].map((item, index, array) => (
            <li key={item} className="inline">
              <a href="#" className="hover:underline">
                {item}
              </a>
              {index < array.length - 1 && <span className="mx-1">|</span>}
            </li>
          ))}
        </ul>
      </nav>
      <p className="mb-2">Todos Os Direitos Reservados</p>
      <p className="text-xs text-gray-400 max-w-md mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias, ducimus pariatur excepturi voluptas deserunt. Adipisci, deleniti iure delectus numquam aliquid obcaecati eligendi aspernatur optio quibusdam possimus, dolore, a eaque!
      </p>
    </div>
  )
}

export default Footer

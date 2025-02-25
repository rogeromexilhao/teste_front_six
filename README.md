# Página VSL Six
O projeto a seguir foi realizado para a seleção de dev front-end para o grupo Six.
Foi adotada uma cápsula/remédio que auxilia no emagrecimento como sendo o produto que estaria sendo vendido nesta VSL.

VÍDEO: O vídeo selecionado é apenas para uma REPRESENTAÇÃO de como seria uma página em produção, onde o conteúdo do vídeo não é relevante para esse projeto em si, sendo utilizado apenas para a dinamicidade da página.
Para prosseguir para o CHECKOUT, basta que o vídeo ultrapasse os 5 minutos para que o restante da página seja exibido.

IMAGENS: imagens meramente ilustrativas

VERCEL: https://paginavslsix.vercel.app

# Requisitos 
- react: 19.0.0
- react-dom: 19.0.0
- tailwindcss: 4.0.8
- vite: 6.1.0
- node: 22.14.0

# Execução Localmente 
- Verificar todas as requisições do projeto (node,react,vite...)
- Baixar o repositório
- Entrar na pasta do projeto e executar no terminal npm install para baixar todas as dependecias de bibliotecas
- Iniciar o server com o comando npm run dev

# Decisões Técnicas
Algumas Decisões Técnicas Importantes que devem ser citadas
- Utilização da biblioteca 'react-player' para a reprodução do vídeo, permitindo suporte tanto a vídeos do YouTube e outras plataformas quanto a arquivos locais. A biblioteca oferece grande personalização e diversas ferramentas para manipulação do vídeo.

- Os UTMs foram gerados para simular esses parâmetros em produção e repassados posteriormente.

- O tempo do vídeo e o tempo do timer são armazenados no Local Storage, garantindo que, sempre que o usuário sair da página, ele retorne exatamente ao ponto em que parou.

# Decisões de Otimização
Algumas Otimizações Importantes que devem ser citadas
- Foco no desempenho mobile
- Modularização dos componetes
- Utilização do 'useMemo' para guardar em cache novas renderizações
- Tempo do Timer é salvo de 5 em 5 segundos para poupar um pouco de processamento e melhorar a performance
- Utilização de vários mapeamentos de compoenntes

# Lighthouse
Os prints contendo o teste do Lighthouse estão na pasta 'Lighthouse screenshots' mostrando o desenpenho do front-end
onde somente o valor de 'Best Practicles' ficando com 78 e 79 de pontuação, o restante todos acima de 80

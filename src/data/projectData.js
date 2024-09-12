import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";

import comoEnCasa from "../assets/projects/logos/ComoEnCasa.jpeg";
import devTalles from "../assets/projects/logos/DevTallesApp.png";
import ecoSistema from "../assets/projects/logos/Ecosistema.png";
import perfectMentor from "../assets/projects/logos/perfectMentor.png";
import rifasOscar from "../assets/projects/logos/RifasOscar.png";
import tmdb from "../assets/projects/logos/TMDB.png";
import webTurnApp from "../assets/projects/logos/WebTurnApp.png";

export const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Turnos Web",
    desc: "Aplicación web que permite la reserva de turnos para empresas con sucursales físicas, posibilitando la administración de la cantidad de clientes en la locación. Cada sucursal podrá diferenciar la cantidad de clientes en simultáneo que podrá recibir y los rangos horarios, desde el usuario administrador/operador.",
    img: project1,
    logo: webTurnApp,
    links: [
      { title: "Github", path: "https://github.com/juan-ma526/App-Turnos-Redux/tree/main/turnos-app" },
      { title: "Video", path: "https://www.youtube.com/watch?v=wwARGlKkVmY" },
    ],
    icons: ["Html", "React", "Redux", "Express", "MongoDB", "Jwt", "Sass", "Javascript"],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "TMBD Movie",
    desc: "Aplicación de Películas, para poder ver las películas o series en cartelera o por género, y poder ver información de cada película o serie para poder ver el tráiler de cada una. A su vez podes tener un registro de usuario para poder almacenar las películas favoritas y tener una lista de películas o series favoritas.",
    img: project2,
    logo: tmdb,
    links: [
      { title: "Github", path: "https://github.com/juan-ma526/TMDB-V2" },
      { title: "Video", path: "https://www.youtube.com/watch?v=NE1TvG3aA6A" },
      { title: "Demo", path: "https://tmdb-v2-two.vercel.app/" },
    ],
    icons: ["Html", "React", "Express", "PostgreSql", "Jwt", "Css", "Javascript"],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "COMO EN CASA",
    desc: "Aplicación Ecommerce para visualizar y poder ordenar entre platos de comidas, con la posibilidad de tener administradores para manejar los productos y el stock de cada comida, y poder manipular las órdenes. También tiene un carrito de compras en el que queda un historial de los pedidos realizados.",
    img: project3,
    logo: comoEnCasa,
    links: [{ title: "Github", path: "https://github.com/juan-ma526/Ecommerce-Como-en-Casa" }],
    icons: ["Html", "React", "Redux", "Express", "Postgresql", "Jwt", "Css", "Javascript"],
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Ecosistema App",
    desc: "Proyecto de una app de quinto impacto para la creación de proveedores de servicios y publicaciones de noticias relacionadas con el impacto en el medio ambiente. Implementación de OAuth de Google, un panel de administración para la aprobación o rechazo de proveedores, para ver cantidad de vistas de publicaciones.",
    img: project4,
    logo: ecoSistema,
    links: [
      { title: "Github", path: "https://github.com/juan-ma526/mercadoPago" },
      { title: "Video", path: "https://www.youtube.com/watch?v=oEZyWe-fdeY" },
    ],
    icons: ["Html", "Java17", "Css", "Jwt", "Cloudinary", "MariaDB", "Oauth", "React", "MaterialUI"],
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Sorteo Devtalles",
    desc: "App web para el concurso realizado para la página https://cursos.devtalles.com/. Dicha app fue realizada en una semana con la posibilidad de crear sorteos, modificarlos y eliminarlos. Se necesita discord api, y estar en el servidor de devtalles para poder participar. En el panel admin se puede elegir el ganador aleatoriamente y ver los participantes en cada sorteo.",
    img: project5,
    logo: devTalles,
    links: [
      { title: "Github", path: "https://github.com/juan-ma526/devtalles-codequest-sorteos" },
      { title: "Video", path: "https://www.youtube.com/watch?v=Pqops93TiPI" },
      { title: "Demo", path: "https://devtalles-codequest-sorteos-gamma.vercel.app/" },
    ],
    icons: ["Html", "NextJs", "Express", "MongoDB", "Jwt", "TailwindCss", "Javascript"],
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Sorteo Rifa",
    desc: "Mini Proyecto Freelance. Se trata de una aplicación web para la compra de rifas, para sortear determinados productos. Con la posibilidad de comprar n cantidad de tickets, dándote la cantidad de tickets comprados. El admin puede crear el stock de tickets, borrar dicho stock, seleccionar un ganador, buscar un ticket en específico, y ver los tickets que fueron comprados.",
    img: project6,
    logo: rifasOscar,
    links: [
      { title: "Github", path: "https://github.com/juan-ma526/sorteo-rifa" },
      { title: "Video", path: "https://www.youtube.com/watch?v=WDKeG76QRxU&t=2s" },
    ],
    icons: ["Html", "React", "Express", "MongoDB", "Css", "Javascript"],
  },
  {
    id: 7,
    color: "from-purple-300 to-red-300",
    title: "Perfect Mentor",
    desc: "Aplicación web (Mobile first) que permita encontrar a tu mentor ideal. Permite la creación de usuarios y la posibilidad de elegir entre ser un mentor o un mentee, poder machear entre los usuarios verificados disponibles, y con los match positivos tener un chat para comunicarse con ellos.",
    img: "*",
    logo: perfectMentor,
    links: [{ title: "Github", path: "https://github.com/juan-ma526/perfectMentor" }],
    icons: ["Html", "Next Js", "Express", "MongoDB", "Jwt", "TailwindCss", "Typescript", "Javascript"],
  },
];

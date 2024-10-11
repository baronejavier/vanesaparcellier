const productos = [
    {
        nombre: "Set de mate de Stitch",
        oferta: true,
        categoria: "Mates",
        precio: 19500,
        unidades: 1,
        imagen: "img/mate set.png",
        descripcion: "Set de mate de Stitch y Ángel. Incluye el mate, bombilla, yerbero, azucarero y cucharita."
    },
    {
        nombre: "Mates grandes",
        oferta: true,
        categoria: "Mates",
        precio: 10000,
        unidades: 1,
        imagen: "img/mate2500.jpg",
        descripcion: "Mates de los personajes Stitch, Ángel, Kitty y de Hogwarts (Harry Potter) impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mate de Rugby",
        oferta: true,
        categoria: "Mates",
        precio: 9500,
        unidades: 1,
        imagen: "img/rugby.png",
        descripcion: "Mate de pelota de Rugby, impreso con material PLA y pintado a mano. El precio es por unidad."
    },
    {
        nombre: "Mate de Pokemon",
        oferta: true,
        categoria: "Mates",
        precio: 9000,
        unidades: 1,
        imagen: "img/mate charmander.png",
        descripcion: "Mate de Pokemon Charmander, impreso con material PLA y pintado a mano. El precio es por unidad."
    },
    {
        nombre: "Mate de carpincho",
        oferta: true,
        categoria: "Mates",
        precio: 9000,
        unidades: 1,
        imagen: "img/carpincho mate.jpg",
        descripcion: "Mate de carpincho, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mate y posavaso Hello Kitty",
        oferta: true,
        categoria: "Mates",
        precio: 10000,
        unidades: 2,
        imagen: "img/kitty.png",
        descripcion: "Mate y posavaso de Hello Kitty, impreso con material PLA. El precio es por el conjunto."
    },
    {
        nombre: "Mate de calavera",
        oferta: false,
        categoria: "Mates",
        precio: 17000,
        unidades: 1,
        imagen: "img/mate calavera.jpg",
        descripcion: "Mate de calavera, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mates de personajes",
        oferta: true,
        categoria: "Mates",
        precio: 7500,
        unidades: 1,
        imagen: "img/mate2000.jpg",
        descripcion: "Mates de los personajes Stitch, Ángel, Hongos de Mario Bross, Chimuelo y Luna, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mates temáticos",
        oferta: true,
        categoria: "Mates",
        precio: 7500,
        unidades: 1,
        imagen: "img/mate1500.jpg",
        descripcion: "Mates de diamantes y caballos, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mates personalizados",
        oferta: false,
        categoria: "Mates",
        precio: 8500,
        unidades: 1,
        imagen: "img/mate personalizado.jpg",
        descripcion: "Mates personalizados, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Despolvillador de yerba mate personalizado",
        oferta: true,
        categoria: "Mates",
        precio: 13000,
        unidades: 1,
        imagen: "img/despolvillador.jpg",
        descripcion: "Despolvillador de yerba mate personalizado con su nombre o logo, impreso en 3D con material PLA. Se puede realizar en otros colores. El precio es por unidad."
    },
    {
        nombre: "Estructra de lampara de astronauta",
        oferta: true,
        categoria: "Lamparas",
        precio: 10500,
        unidades: 1,
        imagen: "img/astronauta.jpg",
        descripcion: "Estructura para armar lampara de astronauta sobre la luna,de 18 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Estructra de lampara de la Tierra",
        oferta: true,
        categoria: "Lamparas",
        precio: 8000,
        unidades: 1,
        imagen: "img/planeta.jpg",
        descripcion: "Estructura para armar lampara de la Tierra sobre un pilar de 13 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Macetas de Afrodita y Venus",
        oferta: true,
        categoria: "Macetas",
        precio: 10000,
        unidades: 1,
        imagen: "img/venus.jpg",
        descripcion: "Macetas Venus y Afrodita, de 15 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Macetas Baby Groot",
        oferta: true,
        categoria: "Macetas",
        precio: 11000,
        unidades: 1,
        imagen: "img/combo groot.jpg",
        descripcion: "Macetas Baby Groot, de 15 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Macetas Robert",
        oferta: true,
        categoria: "Macetas",
        precio: 15000,
        unidades: 4,
        imagen: "img/RS.jpg",
        descripcion: "Modelos de maceta Robert, de 8 cm de altura, disponibles en blanco. El precio es por cuatro unidades."
    },
    {
        nombre: "Macetas de David/ Bob Patiño",
        oferta: true,
        categoria: "Macetas",
        precio: 10000,
        unidades: 1,
        imagen: "img/david.jpg",
        descripcion: "Modelos de macetas de David (15 cm) y Bob Patiño (15 cm). El precio es por unidad."
    },
    {
        nombre: "Macetas de animales",
        oferta: true,
        categoria: "Macetas",
        precio: 10500,
        unidades: 2,
        imagen: "img/maceta animales.jpg",
        descripcion: "Modelos de macetas de gato y perro, de 8 cm de altura, disponibles en transparente, blanco, bronce y negro, con y sin plantas. El precio por dos unidades."
    },
    {
        nombre: "Macetas de meditación",
        oferta: true,
        categoria: "Macetas",
        precio: 5000,
        unidades: 1,
        imagen: "img/cabezas.jpg",
        descripcion: "Modelos de macetas de meditación de 8 cm de altura, disponibles en transparente, blanco y bronce. El precio es por unidad."
    },
    {
        nombre: "Florero dona y maceta David",
        oferta: true,
        categoria: "Adornos",
        precio: 14500,
        unidades: 2,
        imagen: "img/david dona.jpg",
        descripcion: "Maceta de David y florero dona minimalista, ambos de 15 cm de altura. El precio es de los dos floreros."
    },
    {
        nombre: "Busto y columna griega",
        oferta: false,
        categoria: "Adornos",
        precio: 8000,
        unidades: 2,
        imagen: "img/grecia.jpg",
        descripcion: "Busto de mujer (10 cm de altura) y columna griega (10 cm de altura), impresos con material PLA. El precio es por ambas figuras."
    },
    {
        nombre: "Gatos enamorados 25 cm",
        oferta: false,
        categoria: "Adornos",
        precio: 15500,
        unidades: 1,
        imagen: "img/adornos.jpg",
        descripcion: "Figura de pareja de gatos, 25 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Gatos enamorados 20 cm",
        oferta: true,
        categoria: "Adornos",
        precio: 12000,
        unidades: 1,
        imagen: "img/adornos.jpg",
        descripcion: "Figura de pareja de gatos, 20 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Souvenir alianzas de casamientos",
        oferta: false,
        categoria: "Adornos",
        precio: 9000,
        unidades: 1,
        imagen: "img/anillos.jpg",
        descripcion: "Souvenir para casamientos en forma de alianzas, con las iniciales y colores a elegir. Es de 20 cm x 18,8 cm x 3,5 mm. El precio es por unidad."
    },
    {
        nombre: "Souvenir porta foto",
        oferta: false,
        categoria: "Adornos",
        precio: 18000,
        unidades: 6,
        imagen: "img/souvenir.jpg",
        descripcion: "Souvenir porta foto de dos colores. El nombre es de 12 cm x 5 cm x 1,5 cm. El precio es por 6 unidades."
    },
    {
        nombre: "Cuadritos decorativos",
        oferta: false,
        categoria: "Adornos",
        precio: 13500,
        unidades: 4,
        imagen: "img/cuadros1.jpg",
        descripcion: "Cuadritos decorativos de 22 cm de largo, disponibles en color negro y bronce. El precio es por cuatro unidades."
    },
    {
        nombre: "Cuadritos decorativos tropicales",
        oferta: false,
        categoria: "Adornos",
        precio: 9500,
        unidades: 3,
        imagen: "img/cuadros2.jpg",
        descripcion: "Cuadritos decorativos de 22 cm de largo, disponibles en color negro. El precio es por tres unidades."
    },
    {
        nombre: "Copa del mundo personalizada",
        oferta: false,
        categoria: "Adornos",
        precio: 12500,
        unidades: 1,
        imagen: "img/copa.jpg",
        descripcion: "Copa del mundo, de 22 cm de altura, de material PLA y pintada a mano. El precio es por unidad."
    },
    {
        nombre: "Elefantes de la fortuna",
        oferta: true,
        categoria: "Adornos",
        precio: 7500,
        unidades: 1,
        imagen: "img/elefantes.jpg",
        descripcion: "Figuras de elefantes de la fortuna, de 10 cm de altura. Disponibles en color bronce y blanco. El precio es por unidad."
    },
    {
        nombre: "Porta lápices",
        oferta: true,
        categoria: "Adornos",
        precio: 8500,
        unidades: 1,
        imagen: "img/portalapices.jpg",
        descripcion: "Porta lápices de David (15 cm de altura), Bob Patiño (15 cm de altura) y Baby Groot, y de Homero arbusto. El precio es por unidad."
    },
    {
        nombre: "Cartel domiciliario",
        oferta: false,
        categoria: "Adornos",
        precio: 8500,
        unidades: 1,
        imagen: "img/cartel.png",
        descripcion: "Cartel domiciliario de 20 cm x 10 cm, de plástico PLA en dos colores. El precio es por unidad."
    },
    {
        nombre: "Otros adornos",
        oferta: false,
        categoria: "Adornos",
        precio: 5000,
        unidades: 1,
        imagen: "img/otros adornos.jpg",
        descripcion: "Figura de ángel (15 cm de altura) y de pareja de pingüinos (12 cm de altura) impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Demon Slayer",
        oferta: true,
        categoria: "Figuras",
        precio: 9000,
        unidades: 1,
        imagen: "img/figuras.jpg",
        descripcion: "Figuras de Nezuko Kamado (10 cm de altura), Tanjiro Kamado (15 cm de altura), Zenitsu Agatsuma (15 cm de altura) e Inozuke Hashibira (15 cm de altura). Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Nezuko con caja portalapices",
        oferta: true,
        categoria: "Figuras",
        precio: 22000,
        unidades: 1,
        imagen: "img/nezuko.jpg",
        descripcion: "Caja portalapices de Nezuko, de 12 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Itachi Uchiha",
        oferta: true,
        categoria: "Figuras",
        precio: 16500,
        unidades: 1,
        imagen: "img/itachi.jpg",
        descripcion: "Figura de Itachi Uchiha, 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Naruto Uzumaki",
        oferta: true,
        categoria: "Figuras",
        precio: 10000,
        unidades: 1,
        imagen: "img/naruto.jpg",
        descripcion: "Figura de Naruto Uzumaki, 20 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Sasuke Uchiha",
        oferta: true,
        categoria: "Figuras",
        precio: 12000,
        unidades: 1,
        imagen: "img/sasuke.jpg",
        descripcion: "Figura de Sasuke Uchiha, 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Pochita",
        oferta: true,
        categoria: "Figuras",
        precio: 10000,
        unidades: 1,
        imagen: "img/pochita.jpg",
        descripcion: "Figura de Pochita articulada, 13 cm de altura y 16 cm de largo, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Vegeta 32 cm de altura",
        oferta: true,
        categoria: "Figuras",
        precio: 24500,
        unidades: 1,
        imagen: "img/majin vegeta.png",
        descripcion: "Figura de Vegeta, de 32 cm de altura. Impresa con material PLA y pintada a mano. El precio es por unidad."
    },
    {
        nombre: "Dragon Ball de 20 cm de altura",
        oferta: true,
        categoria: "Figuras",
        precio: 17500,
        unidades: 1,
        imagen: "img/DB.jpg",
        descripcion: "Figuras de Gohan (versión niño y adulto), Frezeer, Goku, Trunks, Vegeta y Gogetta. Todos estos modelos son de 20 cm de altura. Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Dragon Ball de 10 cm de altura",
        oferta: true,
        categoria: "Figuras",
        precio: 11000,
        unidades: 2,
        imagen: "img/DB2.jpg",
        descripcion: "Figuras de Piccolo, Goku, Gohan, Vegeta (con distintas transformaciones) y Gogetta. Todos estos modelos son de 10 cm de altura. Impresas con material PLA. El precio es por dos unidades."
    },
    {
        nombre: "Pokemon",
        oferta: true,
        categoria: "Figuras",
        precio: 36000,
        unidades: 4,
        imagen: "img/pokemon.jpg",
        descripcion: "Figuras de Squirtle (10 cm de altura), Charmander (10 cm de altura), Bulbasaur (8 cm de altura), Pikachu (10 cm de altura) y Jigglypuff (8 cm de altura). Impresas con material PLA. El precio es por cuatro unidades."
    },
    {
        nombre: "La Bella y la Bestia",
        oferta: true,
        categoria: "Figuras",
        precio: 35000,
        unidades: 5,
        imagen: "img/bella y bestia.jpg",
        descripcion: "Figuras de Din Don (13 cm de altura), Bella (10 cm de altura), Sra.Potts (12 cm de altura), Chip (7 cm de altura) y Lumiere (15 cm de altura). Impresas con material PLA. El precio es por las cinco unidades."
    },
    {
        nombre: "Caballeros del zodiaco (Saint Seiya)",
        oferta: true,
        categoria: "Figuras",
        precio: 15500,
        unidades: 1,
        imagen: "img/CZ.png",
        descripcion: "Figuras de Seiya de Pegasus y Afrodita de Piscis. Estos dos modelos son de 15 cm de altura. Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Pandora Box de Pegasus",
        oferta: true,
        categoria: "Figuras",
        precio: 18000,
        unidades: 1,
        imagen: "img/CZ2.jpg",
        descripcion: "Pandora Box de Pegasus, de 12 cm de altura. Impresa con material PLA. Viene con un llavero de regalo."
    },
    {
        nombre: "Attack on Titan",
        oferta: true,
        categoria: "Figuras",
        precio: 18500,
        unidades: 1,
        imagen: "img/AT.jpg",
        descripcion: "Figuras de Eren Yeager (versión Titan) y Levi Ackerman. Estos dos modelos son de 20 cm de altura. Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mario",
        oferta: false,
        categoria: "Figuras",
        precio: 10000,
        unidades: 1,
        imagen: "img/mario.jpg",
        descripcion: "Figura de Mario, de 15 cm de altura. Impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Sonic",
        oferta: true,
        categoria: "Figuras",
        precio: 10500,
        unidades: 1,
        imagen: "img/Sonic.jpg",
        descripcion: "Figura de Sonic de 10 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Five Nights At Freddy",
        oferta: true,
        categoria: "Figuras",
        precio: 6000,
        unidades: 1,
        imagen: "img/freddy.jpg",
        descripcion: "Figura articulada de Five Nights At Freddy, de 15 cm de largo. El precio es por unidad."
    },
    {
        nombre: "Speakerman large de Skibidi Toilet",
        oferta: false,
        categoria: "Figuras",
        precio: 7000,
        unidades: 1,
        imagen: "img/speakerman.jpg",
        descripcion: "Figura articulada de Speakerman large de Skibidi Toilet, de 19 cm de largo. El precio es por unidad."
    },
    {
        nombre: "Figuras articuladas",
        oferta: true,
        categoria: "Figuras",
        precio: 8500,
        unidades: 3,
        imagen: "img/articulados.jpg",
        descripcion: "Figuras articuladas de Dragon (15 cm de largo), tiburon (15 cm de largo) y el  escinco cocodrilo (Tribolonotus gracilis) de 28 cm de largo. El precio es por los tres modelos."
    },
    {
        nombre: "Messi",
        oferta: true,
        categoria: "Figuras",
        precio: 8000,
        unidades: 1,
        imagen: "img/messi.jpg",
        descripcion: "Figura de Messi con la camiseta con tres estrellas, de 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Jesús de Nazaret",
        oferta: true,
        categoria: "Figuras",
        precio: 7000,
        unidades: 1,
        imagen: "img/jesus.jpg",
        descripcion: "Figura de Jesús de Nazaret, de 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Sasuke/ Ironman",
        oferta: true,
        categoria: "Gamer",
        precio: 26500,
        unidades: 1,
        imagen: "img/PJ4000.png",
        descripcion: "Portajoystick o celular de Sasuke y Ironman, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Call of Duty (Ghost)/ Crash Bandicoot",
        oferta: true,
        categoria: "Gamer",
        precio: 21000,
        unidades: 1,
        imagen: "img/PJ3800.jpg",
        descripcion: "Portajoystick o celular de Call of Duty (Ghost) y Crash Bandicoot, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Spiderman",
        oferta: true,
        categoria: "Gamer",
        precio: 15000,
        unidades: 1,
        imagen: "img/spiderman.jpg",
        descripcion: "Portajoystick o celular de Spiderman, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de God of War/ Goku",
        oferta: true,
        categoria: "Gamer",
        precio: 22000,
        unidades: 1,
        imagen: "img/PJ3500.jpg",
        descripcion: "Portajoystick o celular de God of War y Goku, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Mano de Hevy Metal",
        oferta: true,
        categoria: "Gamer",
        precio: 9000,
        unidades: 1,
        imagen: "img/PJ2000.jpg",
        descripcion: "Portajoystick o celular de Mano de Hevy Metal, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Porta auricular de Batman",
        oferta: true,
        categoria: "Gamer",
        precio: 17500,
        unidades: 1,
        imagen: "img/batman.jpg",
        descripcion: "Porta auricular del modelo de Batman, impreso con material PLA."
    },
    {
        nombre: "Porta PS VITA",
        oferta: false,
        categoria: "Gamer",
        precio: 5000,
        unidades: 1,
        imagen: "img/psvita.jpg",
        descripcion: "Porta consola PS vita, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Porta CD PS5",
        oferta: false,
        categoria: "Gamer",
        precio: 5000,
        unidades: 1,
        imagen: "img/PS5 cd.jpg",
        descripcion: "Porta CD de consola PS5, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Llaveros de personajes",
        oferta: false,
        categoria: "Llaveros",
        precio: 3000,
        unidades: 1,
        imagen: "img/llaveros personajes.jpg",
        descripcion: "Llaveros de personajes, impresos con material PLA y pintados a mano. El precio es por unidad."
    },
    {
        nombre: "Llaveros de Flork",
        oferta: false,
        categoria: "Llaveros",
        precio: 9500,
        unidades: 10,
        imagen: "img/flork.jpg",
        descripcion: "Llaveros Flork de distintos modelos, 5 cm de largo aproximadamente, impresos con material PLA. El precio es por 10 unidades."
    },
    {
        nombre: "Llaveros de equipos",
        oferta: false,
        categoria: "Llaveros",
        precio: 10000,
        unidades: 10,
        imagen: "img/equipos.jpg",
        descripcion: "Llaveros de distintos equipos, impresos con material PLA. El precio es por 10 unidades."
    },
    {
        nombre: "Llaveros de autodefensa",
        oferta: false,
        categoria: "Llaveros",
        precio: 8500,
        unidades: 5,
        imagen: "img/llavero gato.jpg",
        descripcion: "Llaveros de autodefensa con forma de gatos, impresos con material PLA. El precio es por 5 unidades."
    },
    {
        nombre: "Llaveros personalizados",
        oferta: false,
        categoria: "Llaveros",
        precio: 27500,
        unidades: 20,
        imagen: "img/llpe.jpg",
        descripcion: "Llaveros personalizados en dos colores, impresos con material PLA. El precio es por 20 unidades."
    },
    {
        nombre: "Llaveros animales porta celulares",
        oferta: false,
        categoria: "Llaveros",
        precio: 4500,
        unidades: 5,
        imagen: "img/llaveros animales.jpg",
        descripcion: "Llaveros de animales porta celulares, impresos con material PLA. El precio es por 5 unidades."
    },
    {
        nombre: "Set para cocina de Bob esponja",
        oferta: true,
        categoria: "Cocina",
        precio: 12500,
        unidades: 2,
        imagen: "img/otros.jpg",
        descripcion: "Porta esponja de Bob esponja y Porta virulana de Patricio estrella. El precio es por el set."
    },
    {
        nombre: "Porta esponja de Homero Simpson",
        oferta: true,
        categoria: "Cocina",
        precio: 5500,
        unidades: 1,
        imagen: "img/homero esponja.jpg",
        descripcion: "Porta esponja versión Homero arbusto. El precio es por unidad."
    },
    {
        nombre: "Cortadores de Mario",
        oferta: false,
        categoria: "Cocina",
        precio: 4000,
        unidades: 3,
        imagen: "img/cortador mario.jpg",
        descripcion: "Cortadores de Mario, impresos con material PLA, de 8,5 cm x 8,5 cm aproximadamente. El precio es por los tres modelos."
    },
    {
        nombre: "Cortadores navideños",
        oferta: false,
        categoria: "Cocina",
        precio: 3500,
        unidades: 4,
        imagen: "img/cortantes navideños.jpg",
        descripcion: "Cortadores navideños, impresos con material PLA, de entre 8 y 12 cm de largo aproximadamente. El precio es por los cuatro modelos."
    },
    {
        nombre: "Clip para bolsas",
        oferta: false,
        categoria: "Cocina",
        precio: 6000,
        unidades: 2,
        imagen: "img/clip bolsa.jpg",
        descripcion: "Clip para bolsas con tapa a rosca, impreso con material PLA. El precio es por dos unidades."
    },
    {
        nombre: "Accesorios para latas",
        oferta: true,
        categoria: "Cocina",
        precio: 16500,
        unidades: 1,
        imagen: "img/latas.jpg",
        descripcion: "Porta latas para almacenar en el refrigerador con capacidad para cinco latas de 473 cc. El precio es por unidad."
    },
    {
        nombre: "Porta latas de cerveza",
        oferta: true,
        categoria: "Cocina",
        precio: 5500,
        unidades: 1,
        imagen: "img/vaso de barril.jpg",
        descripcion: "Porta latas para latas de 473 cc. El precio es por unidad."
    },
    {
        nombre: "Cuchara para revolver tragos",
        oferta: false,
        categoria: "Cocina",
        precio: 10000,
        unidades: 12,
        imagen: "img/revolvedor.jpg",
        descripcion: "Revolvedor de tragos fríos personalizados, 18 cm de largo. Fabricados a partir de 12 unidades. El precio es por 12 unidades."
    },
    {
        nombre: "Prensa para celulares",
        oferta: false,
        categoria: "Herramientas",
        precio: 11000,
        unidades: 6,
        imagen: "img/prensa.jpg",
        descripcion: "Prensa pequeña para reparación de celulares. El precio es por 6 unidades."
    },
    {
        nombre: "Soporte para casco con llavero",
        oferta: false,
        categoria: "Herramientas",
        precio: 4000,
        unidades: 1,
        imagen: "img/casco.jpg",
        descripcion: "Soporte de pared para casco de moto con llavero incluido. El precio es por unidad."
    },
    {
        nombre: "Jabonera y porta cepillos",
        oferta: true,
        categoria: "Baño",
        precio: 8500,
        unidades: 1,
        imagen: "img/jabonera.jpg",
        descripcion: "Jabonera y porta cepillos para el baño, impreso con material PLA, disponible en color blanco."
    },
    {
        nombre: "Porta cepillos y vomitador de pasta dental de Star Wars",
        oferta: true,
        categoria: "Baño",
        precio: 8500,
        unidades: 2,
        imagen: "img/cepillo.jpg",
        descripcion: "Porta cepillo de 6 cm de altura y vomitador de pasta dental versión Star Wars, impreso con material PLA."
    },
    {
        nombre: "Porta bolsas para mascotas",
        oferta: false,
        categoria: "Mascotas",
        precio: 3000,
        unidades: 1,
        imagen: "img/portabolsa.jpg",
        descripcion: "Porta bolsas para desechos de mascotas, ideales para la hora de pasearlos."
    },
    {
        nombre: "Chapitas para mascotas",
        oferta: false,
        categoria: "Mascotas",
        precio: 3500,
        unidades: 1,
        imagen: "img/huesitos.jpg",
        descripcion: "Chapitas para mascotas, con el nombre delante y el número telefónico por detrás, impresos con material PLA en dos colores. El precio es por unidad."
    },
    {
        nombre: "Porta espiral Dr. Strange",
        oferta: true,
        categoria: "Otros",
        precio: 8500,
        unidades: 1,
        imagen: "img/portaespiral.jpg",
        descripcion: "Porta espiral Dr. Strange, de 15 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Billetera/ tarjetero",
        oferta: false,
        categoria: "Otros",
        precio: 7000,
        unidades: 1,
        imagen: "img/billetera.png",
        descripcion: "Billetera/ tarjetero personalizable en color e iniciales. El precio es por unidad."
    },
    {
        nombre: "Soporte para computadoras portatiles netbook (15 pulgadas)",
        oferta: true,
        categoria: "Otros",
        precio: 14500,
        unidades: 1,
        imagen: "img/soporte notebook.jpg",
        descripcion: "Disponibles para notebook y netbook. El precio es por unidad."
    },
    {
        nombre: "Soporte para computadoras portatiles notebook (17 pulgadas)",
        oferta: false,
        categoria: "Otros",
        precio: 17000,
        unidades: 1,
        imagen: "img/soporte notebook.jpg",
        descripcion: "Disponibles para notebook y netbook. El precio es por unidad."
    },
    {
        nombre: "Soporte para celular o tablet",
        oferta: false,
        categoria: "Otros",
        precio: 4000,
        unidades: 1,
        imagen: "img/soporte celular.jpg",
        descripcion: "Soportes personalizados en distintos colores, los cuales se pueden regular el ángulo de inclinación y sirven tanto para tablet como para celular. El precio es por unidad."
    },
    {
        nombre: "Porta maquillajes",
        oferta: true,
        categoria: "Otros",
        precio: 6000,
        unidades: 1,
        imagen: "img/portamaquillaje.jpg",
        descripcion: "Porta maquillajes de 15 cm de largo, disponibles en blanco, rosa y negro. El precio es por unidad."
    },
    {
        nombre: "Flauta dulce con forma de dragón",
        oferta: true,
        categoria: "Otros",
        precio: 8000,
        unidades: 1,
        imagen: "img/flauta dragon.jpg",
        descripcion: "Flauta dulce con forma de dragón, impresa con material PLA, disponible en varios colores. El precio es por unidad."
    },
    {
        nombre: "Posavasos personalizados",
        oferta: false,
        categoria: "Otros",
        precio: 5000,
        unidades: 1,
        imagen: "img/posavaso.jpg",
        descripcion: "Posavaso personalizado en dos colores, con tu nombre o logo favorito. El precio es por unidad."
    },
    {
        nombre: "Porta pelota de tenis",
        oferta: false,
        categoria: "Otros",
        precio: 3000,
        unidades: 1,
        imagen: "img/porta pelota.jpg",
        descripcion: "Porta pelota de tenis, impreso con material PLA. El precio es por unidad."
    },
];

const listaProductos = document.getElementById("lista-productos");
const categoriaFiltro = document.getElementById("categoria");
const precioFiltro = document.getElementById("precio");
const ofertaFiltro = document.getElementById("oferta");

categoriaFiltro.addEventListener("change", mostrarProductos);
precioFiltro.addEventListener("change", mostrarProductos);
ofertaFiltro.addEventListener("change", mostrarProductos);

function mostrarProductos() {
    let productosFiltrados = productos;

    // Aplicar filtros adicionales (categoria y precio)
    if (categoriaFiltro.value) {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoria === categoriaFiltro.value);
    }

    if (precioFiltro.value) {
        productosFiltrados = productosFiltrados.filter(producto => producto.precio <= parseInt(precioFiltro.value));
    }

    // Aplicar filtro de oferta
    if (ofertaFiltro.value === "true") {
        productosFiltrados = productosFiltrados.filter(producto => producto.oferta === true);
    }


    listaProductos.innerHTML = "";
    productosFiltrados.forEach((producto) => {
        const idProducto = producto.nombre.replace(/\s/g, "-");

        // Crear el elemento de la división
        const division = document.createElement("div");
        division.classList.add("producto");
        division.id = idProducto;
        // Verificar si el producto está en oferta
        if (producto.oferta) {
            // Mostrar información del producto en oferta
            const precioactual = producto.precio * 0.95;
            const productoHTML = `
        <div class="producto" id=${idProducto}>
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%;">
        <h4>EN OFERTA HASTA AGOTAR STOCK!</h4>
            <h3>${producto.nombre}</h3>
            <button class="agregar-carrito" data-nombre="${producto.nombre}" data-precio="${precioactual}">Agregar a la lista de consulta</button>
            <p class="precio"><del>$${producto.precio}</del> $${precioactual} x ${producto.unidades} ud.</p>
        </div>
    `;

            division.innerHTML += productoHTML;
        } else {
            // Mostrar información del producto sin oferta
            const precioactual = producto.precio;
            const productoHTML = `
            <div class="producto" id=${idProducto}>
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%;">
                <h3>${producto.nombre}</h3>
                <button class="agregar-carrito" data-nombre="${producto.nombre}" data-precio="${precioactual}">Agregar a la lista de consulta</button>
                <p class="precio">$${precioactual} x ${producto.unidades} ud.</p>
            </div>
        `;
            division.innerHTML += productoHTML;
        }

        // Obtener el contenido de la división sin la ID
        const contenidoHTML = division.innerHTML


        // Crear el contenido de la división
        const contenido = document.createElement("div");
        contenido.classList.add("contenido");
        contenido.innerHTML = `
        <div class="subcontenido">
  ${contenidoHTML}<div class="producto">
    <p class="descripcion">${producto.descripcion}</p>
    <button id="urlproducto-${idProducto}" data-url="${idProducto}">Copiar enlace del Producto</button>
    <br></br>
    <button class="cerrar" data-id="${idProducto}">Volver</button>
  </div>
</div>
`;


        // Agregar evento de clic para mostrar/ocultar la división como ventana
        division.addEventListener("click", function (event) {
            // Verificar si el botón fue el elemento que recibió el clic
            if (event.target.classList.contains("agregar-carrito")) {
                return; // No hacer nada si fue el botón
            }

            contenido.style.display = "block";
            document.documentElement.style.overflow = 'hidden';
        });

        // Agregar evento de clic para mostrar/ocultar la división como ventana
division.addEventListener("click", function (event) {
    // Verificar si el botón fue el elemento que recibió el clic
    if (event.target.classList.contains("agregar-carrito")) {
        return; // No hacer nada si fue el botón
    }

    contenido.style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, null, window.location.href); // Empuja un nuevo estado al historial
});

// Agregar evento de clic al botón de cierre para ocultar la división
const cerrar = contenido.querySelector(".cerrar");
cerrar.addEventListener("click", function (event) {
    event.stopPropagation();
    contenido.style.display = "none";
    document.documentElement.style.overflow = 'auto';
    history.back(); // Retrocede en el historial
});

// Agregar evento para detectar cuando el usuario presiona el botón de volver del navegador
window.addEventListener("popstate", function (event) {
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
        document.documentElement.style.overflow = 'auto';
    }
});

// Agregar el contenido a la división
division.appendChild(contenido);

// Agregar la división al contenedor principal
listaProductos.appendChild(division);

    });



    const agregarBotones = document.querySelectorAll('.agregar-carrito');

    agregarBotones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const nombre = boton.dataset.nombre;
            const precio = Number(boton.dataset.precio);
            const producto = { nombre, precio };
            productosSeleccionados.push(producto);
            mostrarCarrito();
            alert("Agregado a la lista para consultar stock");
        });
    });


    const btnURLProductos = document.querySelectorAll('[id^="urlproducto-"]');

    btnURLProductos.forEach((btnURLProducto) => {
        btnURLProducto.addEventListener('click', () => {
            const idProducto = btnURLProducto.dataset.url;
            const currentURL = window.location.href;
            const hasID = currentURL.includes('#');

            let url;
            if (hasID) {
                url = `${currentURL.substring(0, currentURL.indexOf('#'))}#${idProducto}`;
            } else {
                url = `${currentURL}#${idProducto}`;
            }

            copiarURL(url);
            mostrarAlerta();
        });
    });

    function copiarURL(url) {
        const elementoTemp = document.createElement('input');
        elementoTemp.value = url;
        document.body.appendChild(elementoTemp);
        elementoTemp.select();
        document.execCommand('copy');
        document.body.removeChild(elementoTemp);
    }

    function mostrarAlerta() {
        alert("URL copiada al portapapeles");
    }

}


const carritoLista = document.querySelector('#carrito-lista');
const carritoTotal = document.querySelector('#carrito-total');
let productosSeleccionados = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function mostrarCarrito() {
    carritoLista.innerHTML = '';
    productosSeleccionados.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} `;
        const botonQuitar = document.createElement('button');
        botonQuitar.innerText = 'Quitar';
        botonQuitar.onclick = function () {
            quitarDelCarrito(index);
            mostrarCarrito();
        };
        li.appendChild(botonQuitar);
        carritoLista.appendChild(li);
    });
}

function quitarDelCarrito(index) {
    productosSeleccionados.splice(index, 1);
}

const btnWhatsapp = document.getElementById('btn-whatsapp');

btnWhatsapp.addEventListener('click', () => {
    let mensaje = 'Lista para consultar stock:\n';
    productosSeleccionados.forEach((producto) => {
        mensaje += `${producto.nombre}\n`;
    });
    

    const telefono = '3765188420'; // Ingresa aquí el número de teléfono de destino
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url);
});

categoriaFiltro.addEventListener("change", mostrarProductos);
precioFiltro.addEventListener("input", mostrarProductos);

mostrarProductos();
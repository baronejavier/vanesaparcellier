// Datos de ejemplo para las propiedades
const propiedades = [
    {
        nombre: "Departamento en Altos de Posadas",
        localizacion: "Posadas",
        categoria: "Departamentos",
        precio: 165000,
        imagenes: [
            "img/depto1.jpg",
            "img/depto2.jpg",
            "img/depto3.jpg"
        ],
        descripcion: "Departamento en Posadas con vista al río."
    },
    {
        nombre: "Departamento en Altos de Posadas",
        localizacion: "Posadas",
        categoria: "Departamentos",
        precio: 165000,
        imagenes: [
            "img/depto1.jpg",
            "img/depto2.jpg",
            "img/depto3.jpg"
        ],
        descripcion: "Departamento en Posadas con vista al río."
    },
    {
        nombre: "Departamento en Altos de Posadas",
        localizacion: "Posadas",
        categoria: "Departamentos",
        precio: 165000,
        imagenes: [
            "img/depto1.jpg",
            "img/depto2.jpg",
            "img/depto3.jpg"
        ],
        descripcion: "Departamento en Posadas con vista al río."
    },
    
];

const listaPropiedades = document.getElementById("lista-propiedades");
const categoriaFiltro = document.getElementById("categoria");
const precioFiltro = document.getElementById("precio");
const localizacionFiltro = document.getElementById("localizacion");

// Función para mostrar las propiedades basadas en los filtros aplicados
function mostrarPropiedades() {
    let propiedadesFiltradas = propiedades;

    // Filtrar por categoría
    if (categoriaFiltro.value) {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop => prop.categoria === categoriaFiltro.value);
    }

    // Filtrar por localización
    if (localizacionFiltro.value) {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop => prop.localizacion === localizacionFiltro.value);
    }

    // Filtrar por precio
    const precioMaximo = parseInt(precioFiltro.value);
    if (!isNaN(precioMaximo)) {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop => prop.precio <= precioMaximo);
    }

    // Limpiar lista de propiedades y agregar las filtradas
    listaPropiedades.innerHTML = "";
    propiedadesFiltradas.forEach(prop => {
        const propiedadDiv = document.createElement("div");
        propiedadDiv.classList.add("propiedad");

        // Crear un contenedor para las imágenes
        const imagenesDiv = document.createElement("div");
        imagenesDiv.classList.add("imagenes");
        prop.imagenes.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = prop.nombre;
            img.style.width = "100%"; // Ajusta el estilo según sea necesario
            imagenesDiv.appendChild(img);
        });

        propiedadDiv.innerHTML = `
            <h3>${prop.nombre}</h3>
            <p>${prop.descripcion}</p>
            <p>Localización: ${prop.localizacion}</p>
            <p>Categoria: ${prop.categoria}</p>
            <p>Precio: U$D ${prop.precio}</p>
        `;

        // Agregar el contenedor de imágenes a la propiedad
        propiedadDiv.appendChild(imagenesDiv);

        // Agregar la propiedad al contenedor principal
        listaPropiedades.appendChild(propiedadDiv);
    });
}

// Agregar event listeners a los filtros
categoriaFiltro.addEventListener("change", mostrarPropiedades);
localizacionFiltro.addEventListener("change", mostrarPropiedades);
precioFiltro.addEventListener("input", mostrarPropiedades);

// Mostrar todas las propiedades al cargar la página
mostrarPropiedades();

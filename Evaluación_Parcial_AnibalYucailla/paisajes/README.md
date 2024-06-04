# Los Paisajes Más Hermosos del Mundo

### Descripción

Esta aplicación web muestra una galería de imágenes de paisajes hermosos obtenidos de la API de Pexels. Los usuarios pueden buscar paisajes, agregar imágenes al carrito de compras, dejar y editar comentarios sobre las imágenes, y disfrutar de un fondo de pantalla aleatorio que cambia cada vez que se carga la aplicación.

## Funcionalidades
-Buscar Imágenes: Permite buscar imágenes de paisajes hermosos mediante un cuadro de búsqueda.
-Mostrar Galería: Muestra una galería de imágenes obtenidas de la API de Pexels.
-Agregar al Carrito: Los usuarios pueden agregar imágenes al carrito de compras.
-Dejar Comentarios: Los usuarios pueden dejar y editar comentarios debajo de cada imagen.
-Carrito de Compras: Muestra las imágenes agregadas al carrito, permite eliminar elementos del carrito y realizar una compra.
-Fondo de Pantalla Aleatorio: Cada vez que se carga la aplicación, se muestra una imagen aleatoria como fondo de pantalla.

## API Utilizada
La aplicación utiliza la API de Pexels para obtener las imágenes de paisajes.

Endpoint de Búsqueda: https://api.pexels.com/v1/search?query=
API Key: ev8xjgEufiTkAii7jds58yYpXpxMoR71IxxSyivHBQKUozE25hxvLR9u

## Componentes
### App.js
Gestiona el estado de la aplicación y las llamadas a la API.
Maneja la búsqueda de imágenes y la obtención de una imagen aleatoria para el fondo de pantalla.

### SearchForm.js
Renderiza el formulario de búsqueda.
Permite al usuario buscar imágenes de paisajes.

### ImageGallery.js
Renderiza la galería de imágenes.
Muestra las imágenes obtenidas de la API.
Permite agregar imágenes al carrito.
Permite dejar y editar comentarios en cada imagen.

### Cart.js
Renderiza el carrito de compras.
Muestra las imágenes agregadas al carrito.
Permite eliminar elementos del carrito y realizar una compra.

### Estilos CSS
App.css: Estilos globales para la aplicación.
SearchForm.css: Estilos para el formulario de búsqueda.
ImageGallery.css: Estilos para la galería de imágenes.
Cart.css: Estilos para el carrito de compras.

## Cómo Funciona
### Buscar Imágenes
1.-Introduce un término de búsqueda en el cuadro de búsqueda.
2.-Haz clic en el botón "Buscar".
3.-La galería de imágenes se actualizará con las imágenes obtenidas de la API de Pexels.

### Agregar al Carrito
1.-En la galería de imágenes, haz clic en el botón "Agregar al carrito" debajo de la imagen que deseas agregar.
2.-La imagen se agregará al carrito de compras.

### Dejar y Editar Comentarios
1.- Debajo de cada imagen en la galería, hay un cuadro de texto para dejar un comentario.
2.- Introduce tu comentario en el cuadro de texto.
3.- Haz clic en el botón "Guardar" para guardar tu comentario.
4.- Para editar un comentario, modifica el texto en el cuadro de texto y haz clic en el botón "Guardar" nuevamente.

### Carrito de Compras
1.- Haz clic en el botón "Carrito" para ver los elementos en tu carrito de compras.
2.- Para eliminar un elemento del carrito, haz clic en el botón "Eliminar" junto a la imagen correspondiente.
3.- Para realizar una compra, haz clic en el botón "Comprar".

## Cómo Ejecutar la Aplicación
### Requisitos
-Node.js
-npm (Node Package Manager)

### Instalación
1) Clona el repositorio:
git clone https://github.com/AMYUCAILLA/Programacion-de-aplicaciones-Web-y-mobiles-Anibal-Yucailla/tree/framework-fronted/Evaluaci%C3%B3n%20Parcial_Anibal%20Yucailla/paisajes
2) Navega al directorio del proyecto:
cd paisajes
3) Instala las dependencias:
npm install

##Ejecución
1) inicia la aplicación:
npm start
2) Abre tu navegador y navega a :
http://localhost:3000


## Estructura del proyecto:

paisajes/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   │
│   │SearchForm.js
│   │ImageGallery.js
│   │Cart.js
│   │
│   │SearchForm.css
│   │ImageGallery.css
│   │Cart.css
│   ├App.js
│   ├App.css
│   └npm startindex.js
├── package.json
└── README.md



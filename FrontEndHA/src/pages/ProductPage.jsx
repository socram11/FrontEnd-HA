import React from "react";

// Componente ProductCard anidado directamente en ProductPage
const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 border-0">
      {" "}
      {/* Removido shadow-sm y rounded-lg */}
      <img
        src={product.imageUrl}
        alt={product.title}
        className="card-img-top object-fit-cover" // Removido rounded-top-lg
        style={{ height: "200px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x200/F0F0F0/808080?text=NO+IMAGE";
        }}
      />
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <h3 className="card-title fs-5 fw-semibold text-dark mb-2">
          {product.title}
        </h3>
        <p className="card-text fs-4 fw-bold text-dark mb-3">{product.price}</p>
        {product.isSoldOut && (
          <span className="badge bg-danger text-white mb-2">AGOTADO</span>
        )}
        {!product.isSoldOut && (
          <button className="btn btn-dark w-100 py-2 text-sm fw-medium mt-auto border-0">
            {" "}
            {/* border-0 para plano */}
            Ver Producto
          </button>
        )}
      </div>
    </div>
  );
};

const ProductPage = () => {
  // Datos de ejemplo para los productos recomendados (verduras)
  const recommendedProducts = [
    {
      id: 1,
      imageUrl: "https://placehold.co/300x200?text=Lechuga+Criolla",
      title: "Lechuga Criolla",
      price: "$1.200,00/kg",
      isSoldOut: false,
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/300x200?text=Cebolla+Morada",
      title: "Cebolla Morada",
      price: "$800,00/kg",
      isSoldOut: false,
    },
    {
      id: 3,
      imageUrl: "https://placehold.co/300x200?text=Papa+Negra",
      title: "Papa Negra",
      price: "$650,00/kg",
      isSoldOut: false,
    },
    {
      id: 4,
      imageUrl: "https://placehold.co/300x200?text=Zanahoria+Fresca",
      title: "Zanahoria Fresca",
      price: "$750,00/kg",
      isSoldOut: false,
    },
  ];

  return (
    // Contenedor principal sin color de fondo específico, ni sombras globales
    <div className="font-inter text-dark min-vh-100 d-flex flex-column">
      {/* HEADER: Sin barra superior de anuncios, sin sombra, sin bordes redondeados */}
      <header className="w-100 bg-white border-bottom py-3 px-3 px-md-5 d-flex justify-content-center align-items-center position-relative">
        {/* Logo Central (LA VERDULERÍA) */}
        {/* Reemplaza 'tu-logo-verdura.png' con la ruta real de tu logo */}
        <img
          src="/images/tu-logo-verdura.png"
          alt="LA VERDULERÍA Logo"
          className="img-fluid"
          style={{ maxHeight: "40px" }} // Controla el tamaño del logo
        />
      </header>

      {/* CONTENIDO PRINCIPAL DE LA PÁGINA (PRODUCTO) */}
      <main className="flex-grow-1 p-3 container-md mx-auto">
        {/* Sección de Producto Principal (Imagen y Detalles) - sin sombras, sin bordes redondeados */}
        <div className="bg-white d-flex flex-column flex-md-row justify-content-center p-4 p-md-5 mb-5 mt-5">
          {/* Columna de Imagen del Producto */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-md-4 mb-4 mb-md-0">
            <div
              className="position-relative w-100 bg-light d-flex justify-content-center align-items-center overflow-hidden"
              style={{ height: "400px" }}
            >
              {/* Reemplaza la URL de la imagen placeholder con la de tu producto de verdura */}
              <img
                src="https://placehold.co/600x600?text=Tomates+Perita+Frescos"
                alt="Tomates Perita Frescos"
                className="img-fluid h-100 w-100 object-fit-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x600/E0E0E0/808080?text=IMAGEN+NO+DISPONIBLE";
                }}
              />
              {/* Indicadores de carrusel (opcional, si hay más imágenes) */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center pb-3">
                <span
                  className="d-block me-2 bg-secondary"
                  style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                ></span>
                <span
                  className="d-block me-2 bg-success"
                  style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                ></span>{" "}
                {/* Activo */}
                <span
                  className="d-block bg-secondary"
                  style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                ></span>
              </div>
              {/* Flechas de navegación (opcional) */}
              <button className="btn btn-sm btn-light position-absolute start-0 top-50 translate-middle-y ms-2 border-0">
                &lt;
              </button>
              <button className="btn btn-sm btn-light position-absolute end-0 top-50 translate-middle-y me-2 border-0">
                &gt;
              </button>
            </div>
          </div>

          {/* Columna de Detalles del Producto */}
          <div className="col-12 col-md-6 p-3 p-md-4 d-flex flex-column">
            <div>
              {/* Título del Producto */}
              <h1 className="display-5 fw-normal text-dark mb-2">
                TOMATES PERITA FRESCOS
              </h1>
              {/* Precios */}
              <p className="fs-3 fw-bold text-dark mb-2">$1.500,00 / kg</p>
              <p className="fs-7 text-muted mb-4">Calidad Premium</p>

              {/* Mensaje de envío a domicilio */}
              <p className="fs-6 text-success mb-4 d-flex align-items-center">
                {/* Asume que tienes Bootstrap Icons o Font Awesome configurado. Si no, quita la etiqueta <i> */}
                <i className="bi bi-truck me-2"></i> Disponible para envío a
                domicilio
              </p>

              {/* Cantidad (ajustado para verduras, si se compra por unidad/kg) */}
              <div className="mb-5">
                <label
                  htmlFor="quantity"
                  className="d-block text-sm fw-semibold text-secondary mb-2"
                >
                  Cantidad (kg):
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control w-auto d-inline-block px-3 py-2 border border-secondary transition-all"
                  defaultValue="1"
                  min="0.5"
                  step="0.5" // Permite comprar en medios kilos
                />
              </div>
            </div>

            {/* Botones de acción */}
            <div className="d-flex flex-column gap-3 mt-auto pt-4 border-top border-light">
              <button className="btn btn-success w-100 py-3 text-uppercase fw-semibold border-0 hover-darken">
                AGREGAR AL PEDIDO
              </button>
              {/* Botón opcional para ver disponibilidad, etc. */}
              <a
                href="#"
                className="text-secondary text-sm text-center text-decoration-underline hover-darken-text"
              >
                Consulta por grandes cantidades
              </a>
            </div>
          </div>
        </div>

        {/* Product Description Section - sin sombras, sin bordes redondeados */}
        <section className="bg-white p-4 p-md-5 mb-5">
          <h2 className="fs-3 fw-bold text-dark mb-4 border-bottom pb-2">
            Descripción del Producto
          </h2>
          <p className="text-secondary lh-lg mb-3">
            Nuestros tomates perita son seleccionados a mano, directamente del
            productor. Son de cultivo sostenible, garantizando frescura y sabor
            inigualable para tus ensaladas, salsas o cualquier preparación
            culinaria.
          </p>
          <p className="text-secondary lh-lg">
            **Conservación:** Almacenar a temperatura ambiente hasta que
            maduren, luego refrigerar para prolongar su frescura. Consumir
            preferentemente en la primera semana.
          </p>
        </section>

        {/* Recommended Products Section - sin sombras, sin bordes redondeados */}
        <section className="bg-white p-4 p-md-5">
          <h2 className="fs-3 fw-bold text-dark mb-5 text-center border-bottom pb-2">
            También te puede interesar
          </h2>
          {/* Grid de Bootstrap para productos recomendados */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {recommendedProducts.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER ELIMINADO */}
    </div>
  );
};

export default ProductPage;

// import React from "react";

// // Componente ProductCard anidado directamente en ProductPage
// const ProductCard = ({ product }) => {
//   return (
//     <div className="card shadow-sm h-100 rounded-lg border-0">
//       <img
//         src={product.imageUrl}
//         alt={product.title}
//         className="card-img-top object-fit-cover rounded-top-lg"
//         style={{ height: '200px' }}
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "https://placehold.co/300x200/F0F0F0/808080?text=NO+IMAGE";
//         }}
//       />
//       <div className="card-body text-center d-flex flex-column justify-content-between">
//         <h3 className="card-title fs-5 fw-semibold text-dark mb-2">
//           {product.title}
//         </h3>
//         <p className="card-text fs-4 fw-bold text-dark mb-3">
//           {product.price}
//         </p>
//         {product.isSoldOut && (
//           <span className="badge bg-danger text-white mb-2">AGOTADO</span>
//         )}
//         {!product.isSoldOut && (
//              <button className="btn btn-dark w-100 py-2 text-sm fw-medium mt-auto">
//                 Ver Producto
//              </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const ProductPage = () => {
//   // Datos de ejemplo para los productos recomendados (verduras)
//   const recommendedProducts = [
//     {
//       id: 1,
//       imageUrl: "https://placehold.co/300x200?text=Lechuga+Criolla",
//       title: "Lechuga Criolla",
//       price: "$1.200,00/kg",
//       isSoldOut: false,
//     },
//     {
//       id: 2,
//       imageUrl: "https://placehold.co/300x200?text=Cebolla+Morada",
//       title: "Cebolla Morada",
//       price: "$800,00/kg",
//       isSoldOut: false,
//     },
//     {
//       id: 3,
//       imageUrl: "https://placehold.co/300x200?text=Papa+Negra",
//       title: "Papa Negra",
//       price: "$650,00/kg",
//       isSoldOut: false,
//     },
//     {
//       id: 4,
//       imageUrl: "https://placehold.co/300x200?text=Zanahoria+Fresca",
//       title: "Zanahoria Fresca",
//       price: "$750,00/kg",
//       isSoldOut: false,
//     },
//   ];

//   return (
//     // Contenedor principal con fuente y color de texto globales
//     <div className="font-inter text-dark bg-light min-vh-100 d-flex flex-column">

//       {/* HEADER: Adaptado para verdulería */}
//       <header className="w-100 bg-white border-bottom py-3 px-3 px-md-5 d-flex justify-content-center align-items-center shadow-sm position-relative">
//         {/* Barra superior de anuncios */}
//         <p className="position-absolute top-0 start-0 end-0 text-center text-sm-base text-secondary py-1 bg-light fw-bold">
//           PEDIDO MÍNIMO $5.000. - ENVÍOS GRATIS A PARTIR DE $10.000. - DESCUENTOS POR CANTIDAD!
//         </p>
//         <div className="d-flex justify-content-center mt-4"> {/* mt-4 para el espacio del anuncio */}
//           {/* Logo Central (LA VERDULERÍA) */}
//           {/* Reemplaza 'tu-logo-verdura.png' con la ruta real de tu logo */}
//           <img
//             src="/images/tu-logo-verdura.png"
//             alt="LA VERDULERÍA Logo"
//             className="img-fluid"
//             style={{ maxHeight: '40px' }} // Controla el tamaño del logo
//           />
//         </div>
//       </header>

//       {/* CONTENIDO PRINCIPAL DE LA PÁGINA (PRODUCTO) */}
//       <main className="flex-grow-1 p-3 container-md mx-auto">
//         {/* Sección de Producto Principal (Imagen y Detalles) */}
//         <div className="bg-white d-flex flex-column flex-md-row justify-content-center p-4 p-md-5 mb-5 mt-5 rounded-lg shadow-lg">

//           {/* Columna de Imagen del Producto */}
//           <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-md-4 mb-4 mb-md-0">
//             <div className="position-relative w-100 bg-light rounded-lg d-flex justify-content-center align-items-center overflow-hidden" style={{ height: '400px' }}>
//               {/* Reemplaza la URL de la imagen placeholder con la de tu producto de verdura */}
//               <img
//                 src="https://placehold.co/600x600?text=Tomates+Perita+Frescos"
//                 alt="Tomates Perita Frescos"
//                 className="img-fluid h-100 w-100 object-fit-cover rounded-lg"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://placehold.co/600x600/E0E0E0/808080?text=IMAGEN+NO+DISPONIBLE";
//                 }}
//               />
//               {/* Indicadores de carrusel (opcional, si hay más imágenes) */}
//               <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center pb-3">
//                 <span className="d-block me-2 rounded-circle bg-secondary" style={{ width: '8px', height: '8px' }}></span>
//                 <span className="d-block me-2 rounded-circle bg-success" style={{ width: '8px', height: '8px' }}></span> {/* Activo */}
//                 <span className="d-block rounded-circle bg-secondary" style={{ width: '8px', height: '8px' }}></span>
//               </div>
//               {/* Flechas de navegación (opcional) */}
//               <button className="btn btn-sm btn-light position-absolute start-0 top-50 translate-middle-y rounded-circle ms-2 shadow-sm">&lt;</button>
//               <button className="btn btn-sm btn-light position-absolute end-0 top-50 translate-middle-y rounded-circle me-2 shadow-sm">&gt;</button>
//             </div>
//           </div>

//           {/* Columna de Detalles del Producto */}
//           <div className="col-12 col-md-6 p-3 p-md-4 d-flex flex-column">
//             <div>
//               {/* Título del Producto */}
//               <h1 className="display-5 fw-normal text-dark mb-2">
//                 TOMATES PERITA FRESCOS
//               </h1>
//               {/* Precios */}
//               <p className="fs-3 fw-bold text-dark mb-2">
//                 $1.500,00 / kg
//               </p>
//               <p className="fs-6 text-secondary mb-2">
//                 $1.350,00 / kg (por +5kg)
//               </p>
//               <p className="fs-7 text-muted mb-4">
//                 Envío refrigerado disponible
//               </p>

//               {/* Mensaje de envío gratis */}
//               <p className="fs-6 text-success mb-4 d-flex align-items-center">
//                 {/* Asume que tienes Bootstrap Icons o Font Awesome configurado. Si no, quita la etiqueta <i> */}
//                 <i className="bi bi-truck me-2"></i> Envío gratis superando los $10.000,00
//               </p>

//               {/* Cantidad (ajustado para verduras, si se compra por unidad/kg) */}
//               <div className="mb-5"> {/* mb-5 para separar de los botones en escritorio */}
//                 <label
//                   htmlFor="quantity"
//                   className="d-block text-sm fw-semibold text-secondary mb-2"
//                 >
//                   Cantidad (kg):
//                 </label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   className="form-control w-auto d-inline-block px-3 py-2 border border-secondary rounded-md shadow-sm focus:ring-success focus:border-success transition-all"
//                   defaultValue="1"
//                   min="0.5"
//                   step="0.5" // Permite comprar en medios kilos
//                 />
//               </div>
//             </div>

//             {/* Botones de acción */}
//             <div className="d-flex flex-column gap-3 mt-auto pt-4 border-top border-light">
//               <button className="btn btn-success w-100 py-3 text-uppercase fw-semibold shadow-sm hover-darken">
//                 AGREGAR AL PEDIDO
//               </button>
//               {/* Botón opcional para ver disponibilidad, etc. */}
//               <a href="#" className="text-secondary text-sm text-center text-decoration-underline hover-darken-text">
//                 Ver disponibilidad
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Product Description Section */}
//         <section className="bg-white p-4 p-md-5 mb-5 rounded-lg shadow-lg">
//           <h2 className="fs-3 fw-bold text-dark mb-4 border-bottom pb-2">
//             Descripción del Producto
//           </h2>
//           <p className="text-secondary lh-lg mb-3">
//             Nuestros tomates perita son seleccionados a mano, directamente del productor. Son de cultivo sostenible, garantizando frescura y sabor inigualable para tus ensaladas, salsas o cualquier preparación culinaria.
//           </p>
//           <p className="text-secondary lh-lg">
//             **Conservación:** Almacenar a temperatura ambiente hasta que maduren, luego refrigerar para prolongar su frescura. Consumir preferentemente en la primera semana.
//           </p>
//         </section>

//         {/* Recommended Products Section */}
//         <section className="bg-white rounded-lg shadow-lg p-4 p-md-5">
//           <h2 className="fs-3 fw-bold text-dark mb-5 text-center border-bottom pb-2">
//             También te puede interesar
//           </h2>
//           {/* Grid de Bootstrap para productos recomendados */}
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//             {recommendedProducts.map((product) => (
//               <div className="col" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* NO FOOTER - Como solicitado */}
//     </div>
//   );
// };

// export default ProductPage;

// import React from "react";
// import ProductCard from "../components/cards/ProductCard"; // Asegúrate de que la ruta sea correcta

// const ProductPage = () => {
//   // Datos de ejemplo para los productos recomendados.
//   const recommendedProducts = [
//     {
//       id: 1,
//       imageUrl: "https://via.placeholder.com/300x200?text=Remera+Lisa+Negra",
//       title: "Remera Lisa Negra",
//       price: "$45.000,00",
//       isSoldOut: false,
//     },
//     {
//       id: 2,
//       imageUrl: "https://via.placeholder.com/300x200?text=Jean+Slim+Fit",
//       title: "Jean Slim Fit",
//       price: "$85.000,00",
//       isSoldOut: true,
//     },
//     {
//       id: 3,
//       imageUrl: "https://via.placeholder.com/300x200?text=Buzo+Oversize",
//       title: "Buzo Oversize",
//       price: "$70.000,00",
//       isSoldOut: false,
//     },
//     {
//       id: 4,
//       imageUrl: "https://via.placeholder.com/300x200?text=Campera+Denim",
//       title: "Campera Denim",
//       price: "$120.000,00",
//       isSoldOut: false,
//     },
//   ];

//   return (
//     // Contenedor principal con fuente y color de texto globales
//     <div className="font-inter text-gray-800 bg-light min-vh-100 d-flex flex-column"> {/* bg-light para un fondo sutil */}

//       {/* HEADER: Con estilo similar al de Harvey, adaptable */}
//       <header className="w-100 bg-white border-bottom py-3 px-3 px-md-5 d-flex justify-content-center align-items-center shadow-sm position-relative">
//         {/* Barra superior de anuncios */}
//         <p className="position-absolute top-0 start-0 end-0 text-center text-sm-base text-secondary py-1 bg-light fw-bold"> {/* fw-bold para hacerlo más visible */}
//           UN MÍNIMO DE $250.000. - ENVÍOS GRATIS A PARTIR DE $200.000. - 10% OFF PAGANDO CON TRANSFERENCIA BANCARIA. - 3 Y 6 CUOTAS SIN INTERES, 9 CUOTAS SIN INTERES CON UN MINIMO DE $250.0
//         </p>
//         <div className="d-flex justify-content-center mt-4"> {/* mt-4 para el espacio del anuncio */}
//           {/* Logo Central (HARVEY) */}
//           <img
//             src="/images/tu-logo-harvey.png" // **ACTUALIZA ESTA RUTA DE IMAGEN**
//             alt="HARVEY Logo"
//             className="img-fluid"
//             style={{ maxHeight: '40px' }} // Controla el tamaño del logo
//           />
//         </div>
//       </header>

//       {/* CONTENIDO PRINCIPAL DE LA PÁGINA (PRODUCTO) */}
//       <main className="flex-grow-1 p-3 container-md mx-auto"> {/* container-md para centrar y limitar el ancho */}
//         {/* Sección de Producto Principal (Imagen y Detalles) */}
//         {/* row para responsividad, d-flex para control de alineación */}
//         <div className="bg-white d-flex flex-column flex-md-row justify-content-center p-4 p-md-5 mb-5 mt-5 rounded-lg shadow-lg">

//           {/* Columna de Imagen del Producto */}
//           <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-md-4 mb-4 mb-md-0">
//             <div className="position-relative w-100 bg-light rounded-lg d-flex justify-content-center align-items-center overflow-hidden" style={{ height: '400px' }}> {/* Ajustar altura */}
//               <img
//                 src="https://placehold.co/600x600/CCD1D9/212529?text=PRODUCTO+HARVEY" // Placeholder con color más neutro
//                 alt="Main Product"
//                 className="img-fluid h-100 w-100 object-fit-cover rounded-lg"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://placehold.co/600x600/E0E0E0/808080?text=IMAGEN+NO+DISPONIBLE";
//                 }}
//               />
//               {/* Indicadores de carrusel */}
//               <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center pb-3">
//                 <span className="d-block me-2 rounded-circle bg-secondary" style={{ width: '8px', height: '8px' }}></span>
//                 <span className="d-block me-2 rounded-circle bg-dark" style={{ width: '8px', height: '8px' }}></span> {/* Activo */}
//                 <span className="d-block rounded-circle bg-secondary" style={{ width: '8px', height: '8px' }}></span>
//               </div>
//               {/* Flechas de navegación (opcional) */}
//               <button className="btn btn-sm btn-light position-absolute start-0 top-50 translate-middle-y rounded-circle ms-2 shadow-sm">&lt;</button>
//               <button className="btn btn-sm btn-light position-absolute end-0 top-50 translate-middle-y rounded-circle me-2 shadow-sm">&gt;</button>
//             </div>
//           </div>

//           {/* Columna de Detalles del Producto */}
//           <div className="col-12 col-md-6 p-3 p-md-4 d-flex flex-column">
//             <div>
//               {/* Título del Producto */}
//               <h1 className="display-5 fw-normal text-dark mb-2">
//                 REMERAS KN PLAIN LAUREL
//               </h1>
//               {/* Precios */}
//               <p className="fs-3 fw-bold text-dark mb-2">
//                 $56.500,00
//               </p>
//               <p className="fs-6 text-secondary mb-2">
//                 $50.850,00 con Transferencia o depósito
//               </p>
//               <p className="fs-7 text-muted mb-4">
//                 12 cuotas sin interés de $4.708,33
//               </p>

//               {/* Mensaje de envío gratis */}
//               <p className="fs-6 text-success mb-4 d-flex align-items-center">
//                 {/* Puedes usar un ícono de Font Awesome si lo tienes: <i className="fas fa-truck me-2"></i> */}
//                 <i className="bi bi-truck me-2"></i> Envío gratis superando los $200.000,00
//               </p>

//               {/* Sección de COLOR */}
//               <div className="mb-4">
//                 <label className="d-block text-sm fw-semibold text-secondary text-uppercase mb-2">
//                   COLOR
//                 </label>
//                 <div className="d-flex">
//                   {/* Opciones de color */}
//                   <div className="border border-dark p-1 me-2 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '32px', height: '32px' }}>
//                     <div className="bg-success rounded-circle" style={{ width: '24px', height: '24px' }}></div> {/* Color activo */}
//                   </div>
//                   <div className="border border-light p-1 me-2 rounded-circle d-flex justify-content-center align-items-center opacity-50" style={{ width: '32px', height: '32px', cursor: 'not-allowed' }}>
//                     <div className="bg-primary rounded-circle" style={{ width: '24px', height: '24px' }}></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Sección de TALLE */}
//               <div className="mb-5"> {/* mb-5 para separar de los botones en escritorio */}
//                 <label className="d-block text-sm fw-semibold text-secondary text-uppercase mb-2">
//                   TALLE
//                 </label>
//                 <div className="d-flex">
//                   <button className="btn btn-outline-dark me-2 py-2 px-4 fw-semibold text-sm">
//                     S
//                   </button>
//                   <button className="btn btn-outline-secondary me-2 py-2 px-4 fw-semibold text-sm disabled">
//                     M
//                   </button>
//                   <button className="btn btn-outline-secondary me-2 py-2 px-4 fw-semibold text-sm disabled">
//                     L
//                   </button>
//                   <button className="btn btn-outline-secondary py-2 px-4 fw-semibold text-sm disabled">
//                     XL
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Botones de acción - Posicionamiento adaptado */}
//             {/* En móvil, estos irán debajo de la imagen debido a la estructura de columna */}
//             {/* En desktop, se mantienen en la columna de detalles, pero empujados abajo */}
//             <div className="d-flex flex-column gap-3 mt-auto pt-4 border-top border-light"> {/* mt-auto para empujar hacia abajo en flex-column */}
//               <button className="btn btn-dark w-100 py-3 text-uppercase fw-semibold shadow-sm hover-darken">
//                 CONOCÉ TU TALLE
//               </button>
//               <button className="btn btn-dark w-100 py-3 text-uppercase fw-semibold shadow-lg hover-darken">
//                 AGREGAR AL CARRITO
//               </button>
//               <a href="#" className="text-secondary text-sm text-center text-decoration-underline hover-darken-text">
//                 Guía de talles
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Product Description Section */}
//         <section className="bg-white p-4 p-md-5 mb-5 rounded-lg shadow-lg">
//           <h2 className="fs-3 fw-bold text-dark mb-4 border-bottom pb-2">
//             Descripción del Producto
//           </h2>
//           <p className="text-secondary lh-lg mb-3">
//             Bordado en el frente. Calce Oversized. COMPOSICIÓN: 100% algodón. CUIDADOS: Lavar con agua fría ( recomendamos del revés ). Ciclo corto y suave. Secado natural.
//           </p>
//           <p className="text-secondary lh-lg">
//             Este es un producto de alta calidad, diseñado para la comodidad y el estilo, replicando la estética de HARVEY.
//           </p>
//         </section>

//         {/* Recommended Products Section */}
//         <section className="bg-white rounded-lg shadow-lg p-4 p-md-5">
//           <h2 className="fs-3 fw-bold text-dark mb-5 text-center border-bottom pb-2">
//             También te puede interesar
//           </h2>
//           {/* Grid de Bootstrap para productos recomendados */}
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//             {recommendedProducts.map((product) => (
//               <div className="col" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* FOOTER (similar al de Harvey) */}
//       <footer className="bg-white text-gray-800 py-5 px-3 px-md-5 mt-auto border-top">
//         <div className="container-md mx-auto row justify-content-center">
//           {/* Contacto (número y tu consulta) */}
//           <div className="col-12 text-center mb-5">
//             <h3 className="fs-2 fw-bold mb-3 text-dark">XXX XXX XXX</h3>
//             <div className="w-75 mx-auto" style={{ maxWidth: '400px' }}>
//               <input
//                 type="text"
//                 placeholder="Tu consulta"
//                 className="form-control form-control-lg border-secondary rounded-pill py-2 px-4 shadow-sm"
//               />
//             </div>
//           </div>

//           {/* Columnas de Ayuda, Info, Contacto */}
//           <div className="col-md-4 text-center text-md-start mb-4">
//             <h3 className="fs-6 fw-bold mb-3 text-uppercase text-dark">AYUDA</h3>
//             <ul className="list-unstyled space-y-2 text-secondary">
//               <li><a href="#" className="text-decoration-none text-secondary hover-darken-text">Lorem ipsum dolor</a></li>
//               <li><a href="#" className="text-decoration-none text-secondary hover-darken-text">Sit amet</a></li>
//               <li><a href="#" className="text-decoration-none text-secondary hover-darken-text">Consectetur</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4 text-center text-md-start mb-4">
//             <h3 className="fs-6 fw-bold mb-3 text-uppercase text-dark">INFO</h3>
//             <ul className="list-unstyled space-y-2 text-secondary">
//               <li><a href="#" className="text-decoration-none text-secondary hover-darken-text">Lorem ipsum</a></li>
//               <li><a href="#" className="text-decoration-none text-secondary hover-darken-text">Dolor sit</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4 text-center text-md-start mb-4">
//             <h3 className="fs-6 fw-bold mb-3 text-uppercase text-dark">CONTACTO</h3>
//             <p className="text-secondary mb-1">000 00 00</p>
//             <p className="text-secondary mb-4">Montevideo, Uruguay</p>
//             <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
//               {/* Iconos de redes sociales - se asume Bootstrap Icons o Font Awesome */}
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark hover-darken-text fs-4">
//                 <i className="bi bi-instagram"></i> {/* Asume Bootstrap Icons */}
//               </a>
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark hover-darken-text fs-4">
//                 <i className="bi bi-facebook"></i>
//               </a>
//               <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-dark hover-darken-text fs-4">
//                 <i className="bi bi-tiktok"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border-top border-light mt-5 pt-4 text-center text-secondary fs-7">
//           &copy; {new Date().getFullYear()} HARVEY. Todos los derechos reservados.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ProductPage;

// import React from "react";
// import ProductCard from "../components/cards/ProductCard";

// const ProductPage = () => {
//   return (
//     <div className="  font-inter text-gray-800">
//       <div className="  p-4 ">
//         <div className="bg-white d-flex justify-content-center row  p-6 mb-8">
//           {/* Product Carousel / Main Image Section */}
//           <div className="md:w-1/2 col-7 flex justify-center items-center p-4 mb-5">
//             <div className="relative w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
//               {/* Placeholder para la imagen principal del producto */}
//               <img
//                 src="https://placehold.co/600x400/CCE5FF/003366?text=Product+Image"
//                 alt="Main Product"
//                 className="w-full h-full object-cover rounded-lg"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://placehold.co/600x400/CCE5FF/003366?text=Image+Not+Found";
//                 }}
//               />
//               {/* Pequeño indicador de "carousel" si fuera interactivo */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//                 <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
//                 <span className="block w-2 h-2 bg-blue-500 rounded-full"></span>
//                 <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
//               </div>
//             </div>
//           </div>

//           {/* Product Details Section - Título, Precio, Cantidad, Añadir al Carrito */}
//           <div className="md:w-1/2 p-4 md:pl-8 flex flex-col col-5 justify-between">
//             <div>
//               <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
//                 Amazing Product Name
//               </h2>
//               <p className="text-2xl font-bold text-blue-600 mb-4">$49.99</p>

//               <div className="mb-6">
//                 <label
//                   htmlFor="quantity"
//                   className="block text-gray-700 text-sm font-semibold mb-2"
//                 >
//                   Quantity:
//                 </label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                   defaultValue="1"
//                   min="1"
//                 />
//               </div>
//             </div>
//             <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md hover:shadow-lg">
//               Add to Cart
//             </button>
//           </div>
//         </div>

//         {/* Product Description Section */}
//         <section className=" p-6 mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">
//             Product Description
//           </h2>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             Discover the incredible features of this amazing product. Crafted
//             with precision and designed for excellence, it offers unparalleled
//             performance and reliability. Lorem ipsum dolor sit amet, consectetur
//             adipisicing elit. Voluptatibus, omnis minima.
//           </p>
//           <p className="text-gray-700 leading-relaxed">
//             Enhance your daily life with its innovative capabilities. It's built
//             to last and provides exceptional value. Repellat, expedita molestias
//             non voluptatem est facilis aliquam rem ut perferendis.
//           </p>
//         </section>

//         {/* Recommended Products Section */}
//         <section className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-2">
//             Recommended For You
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* Array de datos de productos recomendados (en un caso real, esto vendría de un API) */}
//             {[
//               {
//                 id: 1,
//                 imageUrl:
//                   "https://placehold.co/300x200/F0F8FF/003366?text=Product+A",
//                 title: "Recommended Item A",
//                 price: "$25.00",
//               },
//               {
//                 id: 2,
//                 imageUrl:
//                   "https://placehold.co/300x200/F0F8FF/003366?text=Product+B",
//                 title: "Recommended Item B",
//                 price: "$35.50",
//               },
//               {
//                 id: 3,
//                 imageUrl:
//                   "https://placehold.co/300x200/F0F8FF/003366?text=Product+C",
//                 title: "Recommended Item C",
//                 price: "$18.75",
//               },
//               {
//                 id: 4,
//                 imageUrl:
//                   "https://placehold.co/300x200/F0F8FF/003366?text=Product+D",
//                 title: "Recommended Item D",
//                 price: "$52.99",
//               },
//             ].map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* Footer Placeholder - Se asume un componente de Footer compartido */}
//       <footer className="bg-gray-800 text-white p-6 mt-8 rounded-t-lg">
//         <div className="container mx-auto text-center text-sm">
//           &copy; {new Date().getFullYear()} My Awesome Store. All rights
//           reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ProductPage;

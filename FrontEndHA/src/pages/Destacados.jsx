import "./Destacados.css";

export default function Destacados() {
  return (
    <section className="best-sellers container my-5">
      <h3 className="text-center mb-5">Productos destacados</h3>
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <img src="/huevos.png" alt="Huevos frescos" className="product-img" />
        </div>
        <div className="col-md-6">
          <h4>Huevos orgánicos</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            deleniti et vero sint alias quisquam necessitatibus repellat dicta
            voluptatibus delectus, atque impedit rem dolores corrupti vitae
            magnam? Veniam, ea iure!
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-4 flex-md-row-reverse">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src="/tomates.png"
            alt="Tomates orgánicos"
            className="product-img"
          />
        </div>
        <div className="col-md-6">
          <h4>Tomates orgánicos</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            error praesentium ab veritatis at adipisci neque, quas nihil rem
            laudantium impedit voluptas maxime enim, voluptatem aliquid
            voluptate architecto dignissimos consectetur.
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src="/lechuga.png"
            alt="Lechuga hidropónica"
            className="product-img"
          />
        </div>
        <div className="col-md-6">
          <h4>Lechuga hidropónica</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            neque eum nulla nam tempora! Eum, facilis eius nulla officiis
            asperiores dolor molestiae ex excepturi veritatis alias nemo,
            tempora unde vero!
          </p>
        </div>
      </div>
      <div className="text-center">
        <img
          src="/grafica mate.png"
          alt="Gráfico de precios"
          className="img-fluid rounded"
        />
      </div>
      <p>
        Los precios de los huevos presentaron las fluctuaciones más marcadas,
        con subidas y bajadas más pronunciadas. Para representar correctamente
        este comportamiento más complejo, se aplicó una interpolación polinómica
        , que permite adaptarse a los cambios sin perder coherencia en la forma
        general de la curva.
      </p>
      <p>
        Para los tomates, se observó una tendencia con ciertas curvas y
        oscilaciones suaves: por ejemplo, un aumento seguido de una leve caída y
        posterior recuperación. En este caso, se optó por una interpolación
        polinómica ya que permite capturar mejor esta curvatura sin sobreajustar
        los datos.
      </p>
      <p>
        En el caso de la lechuga, los precios mostraron una variación progresiva
        y bastante estable a lo largo del tiempo. Debido a esta regularidad, se
        utilizó una interpolación lineal, que permite estimar valores
        intermedios de forma precisa y sin necesidad de mayor complejidad.
      </p>
    </section>
  );
}

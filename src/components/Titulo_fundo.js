function Titulo_fundo(props) {
  return (
    <div className="bg-image">
      <img src={props.imagem} className="h-10 " alt="Algarve" />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1
            style={{ letterSpacing: "20px" }}
            className="d-none d-md-inline fs-md-1 text-uppercase text-white px-5"
          >
            {props.texto}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Titulo_fundo;

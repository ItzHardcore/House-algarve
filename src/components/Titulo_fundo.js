function Titulo_fundo(props) {
  return (
    <div className="bg-image">
      <img src={props.imagem} className="h-10 " alt="Algarve" />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1
            style={{ letterSpacing: "20px" }}
            className="fs-1 text-uppercase text-white mb-0"
          >
            {props.texto}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Titulo_fundo;

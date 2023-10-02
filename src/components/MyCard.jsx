import Tags from "./Tags";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imagen} />
      <h2>{item.nombre}</h2>
      <h4> {item.colores}</h4>
      <p>{item.ubicacion}</p>
      <p>{item.descripcion}</p>
      <Tags texto={item.tag.status} color={item.tag.color} />
    </div>
  );
};

export default Card;

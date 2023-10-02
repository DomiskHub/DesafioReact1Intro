import Card from "./Mycard";

const cardGallery = ({ gatos }) => {
  return (
    <section className="cardGallery">
      {gatos.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </section>
  );
};

export default cardGallery;

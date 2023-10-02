import "./App.css";
import Header from "./components/Header";
import CardGallery from "./components/CardGallery";
import Footer from "./components/Footer";

const data = {
  title: "Adopta un Gatito",
  gatos: [
    {
      id: 1,
      nombre: "Lincoln",
      descripcion: "Gato gordo, le gusta dormir en los pies de la gente, amasar mantas y comer.",
      ubicacion: "La Reina, Santiago de Chile",
      colores: "Gris y Blanco",
      imagen: "./src/assets/img/cat1.jpg",
      tag: { status: "Indoor y Outdoor", color: "secondary" },
    },
    {
      id: 2,
      nombre: "Lilly",
      descripcion: "Es amistosa , le gustan los niños, es amable con otros animales.",
      ubicacion: "Puente Alto, Santiago de Chile",
      colores: "Negro",
      imagen: "./src/assets/img/cat2.jpg",
      tag: { status: "Outdoor", color: "warning" },
    },
    {
      id: 3,
      nombre: "Chow-li",
      descripcion: "Gato Senior, 15 años de edad, solitario. No se lleva bien con otros animales.",
      ubicacion: " La Florida, Santiago de Chile",
      colores: "Naranjo",
      imagen: "./src/assets/img/cat3.jpg",
      tag: { status: "Indoor", color: "primary" },
    },
    {
      id: 4,
      nombre: "Agatha",
      descripcion: "5 meses de edad, juguetona y regalona. Solo departamento.",
      ubicacion: "San antonio, Valparaiso Chile",
      colores: "Blanco y negro",
      imagen: "./src/assets/img/cat4.jpg",
      tag: { status: "Indoor", color: "primary" },
    },
  ],
};

function App() {
  return (
    <div className="main">
      <div>
        <Header title={data.title} />
        <CardGallery gatos={data.gatos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

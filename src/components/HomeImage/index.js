/* images */
import SideImage from "../../pages/images/side-image.jpg";

export default function HomeImage() {
  return (
    <section className="container-image">
      <img src={SideImage} alt="Uma paisagem com um carro de acampamento." />
    </section>
  );
}
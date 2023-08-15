import Image from "next/image";
import Swipper from "./components/Swiper";
import KratakOpis from "./components/KratakOpis";
import Izbor from "./components/Izbor";
export default function Home() {
  return (
    <div>
      <Swipper />
      <KratakOpis />
      <Izbor />
    </div>
  );
}

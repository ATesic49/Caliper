import Image from "next/image";
import Fragmenti from "./components/Fragmenti";
import Swipper from "./components/Swiper";
export default function Home() {
  return (
    <div>
      <Swipper />
      <Fragmenti />
    </div>
  );
}

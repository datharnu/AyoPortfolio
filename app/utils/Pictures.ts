import photo1 from "../../public/chidera4.jpeg";
import photo2 from "../../public/chidera5.jpeg";
import photo3 from "../../public/chidera6.jpeg";
import photo4 from "../../public/chidera7.jpeg";
import photo5 from "../../public/chidera8.jpeg";
import photo6 from "../../public/chidera9.jpeg";
import photo8 from "../../public/chidera10.jpeg";
import photo9 from "../../public/chidera3.jpeg";
import photo10 from "../../public/chidera2.jpeg";
import { StaticImageData } from "next/image";

export type Pictures = {
  id: number;
  image: StaticImageData;
  alt: string;
  title?: string;
};

export const pictures: Pictures[] = [
  { id: 1, image: photo1, alt: "photo1", title: "photo1" },
  { id: 2, image: photo2, alt: "photo2", title: "photo2" },
  { id: 3, image: photo3, alt: "photo3", title: "photo3" },
  { id: 4, image: photo4, alt: "photo4", title: "photo4" },
  { id: 5, image: photo5, alt: "photo5", title: "photo5" },
  { id: 6, image: photo6, alt: "photo6", title: "photo6" },
  { id: 8, image: photo8, alt: "photo8", title: "photo8" },
  { id: 9, image: photo9, alt: "photo9", title: "photo9" },
  { id: 10, image: photo10, alt: "photo10", title: "photo10" },
];

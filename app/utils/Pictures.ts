import photo1 from "../../public/photo1.jpg";
import photo2 from "../../public/photo2.jpg";
import photo3 from "../../public/photo3.jpg";
import photo4 from "../../public/photo4.jpg";
import photo5 from "../../public/photo5.jpg";
import photo6 from "../../public/photo6.jpg";
import photo7 from "../../public/clean2.jpeg";
import photo8 from "../../public/photo8.jpeg";
import photo9 from "../../public/photo9.jpg";
import photo10 from "../../public/photo10.jpg";
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
  { id: 7, image: photo7, alt: "photo8", title: "photo7" },
  { id: 8, image: photo8, alt: "photo8", title: "photo8" },
  { id: 9, image: photo9, alt: "photo9", title: "photo9" },
  { id: 10, image: photo10, alt: "photo10", title: "photo10" },
];

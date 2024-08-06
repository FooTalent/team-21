import { Carousel } from "./Carousel"


export const Banner = () => {
  
  const slides = [
    {
      image: '/img/banner1.png',
      title: 'Descubre el oasis que buscabas',
      buttonText: 'Consulta'
    },
    {
      image: '/img/banner2.png',
      title: 'Vive experiencias inolvidables',
      buttonText: 'Consulta'
    },
    {
      image: '/img/banner3.png',
      title: 'Disfruta de tu tiempo',
      buttonText: 'Consulta'
    }, 
  ];

  return (
        <Carousel slides={slides}/>
  )
}

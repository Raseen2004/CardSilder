import Slider from "react-slick";
import Footer from "./Footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className=" h-56 rounded-t-xl bg-[#1E3E62] flex justify-center items-center">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-44 w-44 rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="font-bold text-xl">{d.name}</p>
                <p>{d.review}</p>
                <button className="hover:bg-indigo-900 bg-[#1E3E62] text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
}

const data = [
  {
    name: `Joy Crish`,
    image: `img/P1.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum
        ratione autem veniam earum odio maxime optio voluptatum quam omnis.`,
  },
  {
    name: `Daniel`,
    image: `img/P2.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum
        ratione autem veniam earum odio maxime optio voluptatum quam omnis.`,
  },
  {
    name: `Samantha`,
    image: `img/P3.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum
        ratione autem veniam earum odio maxime optio voluptatum quam omnis.`,
  },
  {
    name: `Sophia`,
    image: `/img/P4.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum
        ratione autem veniam earum odio maxime optio voluptatum quam omnis.`,
  },
  {
    name: `Meghna`,
    image: `img/P5.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum
        ratione autem veniam earum odio maxime optio voluptatum quam omnis.`,
  },
  {
    name: `Rohit`,
    image: `img/P6.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quia facilis. Velit cumque distinctio, non minima laboriosam perferendis.`,
  },
  {
    name: `Anjali`,
    image: `img/P7.jpeg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officia tempora voluptatibus soluta laborum natus veritatis.`,
  },
  {
    name: `Arjun`,
    image: `img/P8.jpeg`,
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto laudantium molestias cumque animi delectus fugiat veritatis.`,
  },
];

export default App;

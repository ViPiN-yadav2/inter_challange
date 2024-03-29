import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  let slides = [
    {
      playerImage: "../images/4.png",
      gameInfo: "Las Vegas Aviators",
      date: "OCT | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
    },
    {
      playerImage: "../images/5.png",
      gameInfo: "Las Vegas Aviators",
      date: "OCT | SUN | 4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
    },
    {
      playerImage: "../images/6.png",
      gameInfo: "Las Vegas Aviators",
      date: "OCT | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
    },
    {
      playerImage: "../images/6.png",
      gameInfo: "Las Vegas Aviators",
      date: "OCT | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    variableWidth: true,
  };

  return (
    <div className="mt-40">
      <div>
        <h1 className="text-center font-bold">Collection Spotlight</h1>
        <p className="text-center">
          Discover extraordinary moments with our Spotlight Collection
          metatickets-exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <div className="mt-20 w-3/5 m-auto">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div className="" key={i}>
              <img
                src={slide.playerImage}
                alt="Player"
                className="player-image"
              />
              <div>
                <div className="uppercase text-center text-sm text-indigo-500 font-semibold">
                  {slide.gameInfo}
                </div>
                <p className="block text-lg text-center leading-tight font-medium text-black">
                  {slide.date}
                </p>
                <p className="text-center text-black">{slide.location}</p>
                <div className="w-full text-center">
                  <button className="bg-black text-white font-sans py-2 px-4 ">
                    Take Flight Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideShow;

import "./styles/Home.css"
import InfiniteCarousel from 'react-leaf-carousel';
import ArtistImage from "../components/ArtistImage";

function Home({artists}) {
  return (
    <>
    <h1>B-SIDE MUSIC</h1>
      <h1 className="artist-name">A database of lesser known musicians and artists.</h1>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.1}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div className="carousel-images">
          {/* {artists.map((artist, index) => (
            <ArtistImage key={index} artist={artist} />))} */}
        </div>
      </InfiniteCarousel>
    </>
  )
}

export default Home
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import BackdropLayout from '../../../shared/BackdropLayout'

const PictureSlider = ({ images, setSliderToggle }) => (
  <div className={'bg-white rounded-md w-[350px] md:w-full'}>
    <div className={'text-right'}>
      <button
        className={'pr-6 font-bold text-56'}
        onClick={() => {
          setSliderToggle(false)
          document.body.style.overflow = 'auto'
        }}
      >
        ✖️
      </button>
    </div>
    <Carousel showArrows={true} dynamicHeight={true} emulateTouch={true}>
      {images.map((item, key) => (
        <div key={key}>
          <img
            alt={''}
            className={'max-w-[48vh] h-auto'}
            src={`http://api.armenianwonderwomen.com${item.attributes.img.data.attributes.url}`}
          />
        </div>
      ))}
    </Carousel>
  </div>
)

export default BackdropLayout(PictureSlider)

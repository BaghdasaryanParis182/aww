import Image from 'next/image'

const imgSizes = {
  L: 482,
  M: 362,
  S: 240,
}

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const Picture = ({ className, src, name, size, setSliderToggle }) => (
  <div
    className={`${className} cursor-pointer`}
    onClick={() => {
      document.body.style.overflow = 'hidden'
      setSliderToggle(true)
    }}
  >
    <div>
      <Image
        width={465}
        height={imgSizes[size]}
        src={`${baseUrl}${src}`}
        alt={`${name}`}
      />
    </div>

    <p className={`font-semibold text-violent-850 text-10 mt-2 lg:mt-6`}>
      {name}
    </p>
  </div>
)

export default Picture

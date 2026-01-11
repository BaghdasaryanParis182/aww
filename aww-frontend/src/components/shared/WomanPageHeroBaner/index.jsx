import styles from './styles/womanHeroBanner.module.css'
import Image from 'next/image'

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
const WomanPageHeroBanner = ({
  name,
  address,
  lifeDuration,
  profession,
  img,
  imageHeight,
}) => (
  <div className={`${styles.banner_container} pt-6 pb-8 lg:pt-10 lg:pb-14`}>
    <div className={` container mx-auto grid lg:grid-cols-12  gap-6`}>
      <div className={`col-start-1  col-span-4 `}>
        <Image
          src={`${baseUrl}${img}`}
          width={'330px'}
          height={imageHeight}
          layout="fixed"
          alt={`${name}`}
        />
      </div>

      <div className={`col-start-1  mt-11 lg:col-start-5 lg:col-span-5`}>
        <div
          className={`flex flex-col justify-center divide-solid divide-yellow-450 divide-134 `}
        >
          <h4
            className={`text-white text-lg mb-2 font-normal font-semibold lg:text-30 lg:mb-1 `}
          >
            {name}
          </h4>
          <hr />
          <p className={`mt-2  font-normal text-white text-lg lg:mt-3`}>
            {address}
          </p>

          <p
            className={`font-normal text-2xl text-white mt-6 mb-2 lg:mt-14 lg:mb-3 `}
          >
            {lifeDuration}
          </p>
          <hr />
          <p className={`mt-2 font-normal text-white text-lg lg:mt-3 `}>
            {profession}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WomanPageHeroBanner

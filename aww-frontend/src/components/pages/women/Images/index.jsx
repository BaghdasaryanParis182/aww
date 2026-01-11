import Picture from '../../../shared/Picture'

export default function Images({ images, setSliderToggle }) {
  return (
    <div id={'images'}>
      <h2 className={`mb-12 text-violent-950 text-lg lg:text-3xl font-normal`}>
        Նկարներ
      </h2>

      <div className={'col-span-12 gap-x-6  lg:columns-2'}>
        {images.map((item, key) => (
          <Picture
            src={item.attributes.img.data.attributes.url}
            name={item.attributes.name}
            size={item.attributes.size}
            key={key}
            className={
              'col-span-8 lg:col-span-4 break-inside-avoid break-before-all pb-10'
            }
            setSliderToggle={setSliderToggle}
          />
        ))}
      </div>
      <hr
        className={
          'border-1 border-solid border-amber-300 my-14 w-[155px] lg:w-[370px]'
        }
      />
    </div>
  )
}

import parse from 'html-react-parser'
export default function WomenStory({ title, text, id }) {
  return (
    <div id={id}>
      <h2
        className={`mb-16 text-violent-950 text-lg lg:text-xl font-semibold break-words`}
      >
        {title}
      </h2>
      {parse(text)}
      <hr
        className={'border-1 border-solid border-amber-300 my-14 w-38 lg:w-sm'}
      />
    </div>
  )
}

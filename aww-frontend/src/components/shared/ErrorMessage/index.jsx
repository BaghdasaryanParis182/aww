import BackdropLayout from '../BackdropLayout'
import Button from '../Button'

const ErrorMessage = ({ onTryClick, onCancelClick }) => (
  <div
    className={`w-96 justify-center text-center  bg-white flex flex-col items-center py-5 px-8 rounded-lg`}
  >
    <p>Ժամանակավոր խնդիր</p>
    <div className={`mt-5`}>
      <Button
        className={`bg-teal-550 text-white mr-5 rounded h-8 px-2`}
        label={'Փորձել կրկին'}
        type={'button'}
        onClick={() => onTryClick()}
      />
      <Button onClick={() => onCancelClick()} label={'Չեղարկել'} />
    </div>
  </div>
)

export default BackdropLayout(ErrorMessage)

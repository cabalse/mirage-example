import { IoMdAdd } from 'react-icons/io'

type Props = {
  onClick: () => void
}

const AddMovieButton = ({ onClick }: Props) => {
  return (
    <div className="p-4 bg-gray-200 my-2 rounded" onClick={onClick}>
      <div className="flex flex-row justify-center">
        <div>
          <IoMdAdd />
        </div>
      </div>
    </div>
  )
}

export default AddMovieButton

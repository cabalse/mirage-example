import { IoMdAdd } from 'react-icons/io'
import Card from './card'

type Props = {
  onClick: () => void
}

const AddMovieButton = ({ onClick }: Props) => {
  return (
    <Card centerContent>
      <div onClick={onClick}>
        <IoMdAdd />
      </div>
    </Card>
  )
}

export default AddMovieButton

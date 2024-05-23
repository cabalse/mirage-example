import { ThreeCircles } from 'react-loader-spinner'
import Card from './card'

const LoadSpinner = () => {
  return (
    <Card centerContent>
      <ThreeCircles
        visible={true}
        height="50"
        width="50"
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Card>
  )
}

export default LoadSpinner

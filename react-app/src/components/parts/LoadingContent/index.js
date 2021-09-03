import Lottie from 'react-lottie'
import animationData from '../../../lotties/rotating-loading.json'

const LoadingContent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  )
}

export default LoadingContent;

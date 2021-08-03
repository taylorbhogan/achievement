import styles from './ReflectionBucket.module.css'

const ReflectionBucket = ({reflection}) => {
  console.log('------------reflection values start');
  console.log();
  console.log('------------reflection values end');

  const trueFalses = Object.values(reflection)

  return (
    <div>
      {trueFalses.map(thing => (
        <div>thing</div>
      ))}
    </div>
  )
}

export default ReflectionBucket

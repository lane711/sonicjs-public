// import Image from 'next/image';

// function CustomImage({ src, alt, width, height }) {
//   return <Image src={src} alt={alt} width={width} height={height} />
// }

// CustomImage.defaultProps = {
//   alt: '',
//   width: 800,
//   height: 600,
//   src: ''
// };

// export default function MyApp() {
//     return <CustomImage />
//   }



  import { useState } from 'react'
import styles from './counters.module.css'

function Image() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <Image />
}
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

import Image from 'next/image';
 
export default function Page() {
  return (
    <Image
      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstrapi-k6.42ea10b2.png&w=3840&q=75"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}

//   import { useState } from 'react'
// import styles from './counters.module.css'

// function Image() {
//   const [count, setCount] = useState(0)

//   function handleClick() {
//     setCount(count + 1)
//   }

//   return (
//     <div> Image--
//       <button onClick={handleClick} className={styles.counter}>
//         Clicked {count} times
//       </button>
//     </div>
//   )
// }

// export default function MyApp() {
//   return <Image />
// }
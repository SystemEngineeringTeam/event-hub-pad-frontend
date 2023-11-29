import { LoginButton } from './LoginButton';
import { SearchBox } from './SearchBox';
import styles from './style.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Event hub pad</h1>
        <div className={styles.searchBoxContainer}>
          <SearchBox />
        </div>
        <div className={styles.iconButtonContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle} />
          </div>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}

// import styles from './style.module.scss';

// export function Header() {
//   return (
//     <header className={styles.headerContainer}>
//       <div>
//         <h1>Event hub pad</h1>
//       </div>
//       {/* <div>
//           <SearchBox />
//         </div> */}
//       {/* <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="52"
//             height="52"
//             viewBox="0 0 52 52"
//             fill="none"
//           >
//             <circle cx="26" cy="26" r="26" fill="white" />
//           </svg>
//           <div>
//             <LoginButton />
//           </div>
//         </div> */}
//     </header>
//   );
// }

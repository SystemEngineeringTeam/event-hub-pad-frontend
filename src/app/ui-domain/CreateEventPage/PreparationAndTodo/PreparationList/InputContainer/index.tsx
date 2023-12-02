import styles from './style.module.scss';

export function InputContainer() {
  return (
    <button className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M6.66667 25.3333H8.56667L21.6 12.3L19.7 10.4L6.66667 23.4333V25.3333ZM4 28V22.3333L21.6 4.76667C21.8667 4.52222 22.1611 4.33333 22.4833 4.2C22.8056 4.06667 23.1444 4 23.5 4C23.8556 4 24.2 4.06667 24.5333 4.2C24.8667 4.33333 25.1556 4.53333 25.4 4.8L27.2333 6.66667C27.5 6.91111 27.6944 7.2 27.8167 7.53333C27.9389 7.86667 28 8.2 28 8.53333C28 8.88889 27.9389 9.22778 27.8167 9.55C27.6944 9.87222 27.5 10.1667 27.2333 10.4333L9.66667 28H4ZM20.6333 11.3667L19.7 10.4L21.6 12.3L20.6333 11.3667Z"
            fill="black"
          />
        </svg>
        <p>クリックして追加</p>
      </div>
    </button>
  );
}

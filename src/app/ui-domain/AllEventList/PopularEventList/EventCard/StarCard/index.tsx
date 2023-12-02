import styles from './style.module.scss';

type Props = {
  number: string;
};

export function StarCard({ number }: Props) {
  return (
    <div className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M5.89999 11.8833L7.99999 10.6167L10.1 11.9L9.54999 9.5L11.4 7.9L8.96666 7.68333L7.99999 5.41667L7.03333 7.66667L4.59999 7.88333L6.44999 9.5L5.89999 11.8833ZM3.88333 14.6667L4.96666 9.98333L1.33333 6.83333L6.13333 6.41667L7.99999 2L9.86666 6.41667L14.6667 6.83333L11.0333 9.98333L12.1167 14.6667L7.99999 12.1833L3.88333 14.6667Z"
          fill="black"
        />
      </svg>
      <div>{number}</div>
    </div>
  );
}

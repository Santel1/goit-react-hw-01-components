import css from './Statistics.module.css';
// export const Statistic = props => {
//   return (
//     <section className={css.statistics}>
//       <h2 className={css.title}>{props.title}</h2>
//       <ul className={css.statList}>{props.children}</ul>
//     </section>
//   );
// };

// export const StatisticItem = props => {
//   return (
//     <li
//       className={css.item}
//       style={{
//         backgroundColor: getRandomHexColor(),
//       }}
//     >
//       <span className={css.label}>{props.label}</span>
//       <span className={css.percentage}>{props.percentage}%</span>
//     </li>
//   );
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
export const Statistic = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.statItem}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

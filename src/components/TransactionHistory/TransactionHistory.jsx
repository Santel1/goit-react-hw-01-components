import css from './TransactionHistory.module.css';

export const TransactionTable = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export const TransactionItem = props => {
  return (
    <tr className="tableItem">
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
};

import PropTypes from 'prop-types';
import OneTransaction from './OneTransaction';
export default function Transactions({ transactionsData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactionsData.map(info => (
        <OneTransaction
          key={info.id}
          type={info.type}
          amount={info.amount}
          currency={info.currency}
        ></OneTransaction>
      ))}
    </table>
  );
}
Transactions.propTypes = {
  transactionsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
};

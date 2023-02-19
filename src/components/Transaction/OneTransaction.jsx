import PropTypes from 'prop-types';
export default function OneTransaction(OneTransactionInfo) {
  const { currency, amount, type } = OneTransactionInfo;

  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}
OneTransaction.propTypes = {
  OneTransactionInfo: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};

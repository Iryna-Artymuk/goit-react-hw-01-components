import PropTypes from 'prop-types';
export default function StaticticItem(props) {
  const { label, percentage, id } = props;
  return (
    <li key={id}>
      <div
        style={{
          border: '1px solid red',
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
    </li>
  );
}
StaticticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

import StaticticItem from './StatisticItem';
import PropTypes from 'prop-types';
export default function Statistics(props) {
  const { stats, title } = props;
  return (
    <div>
      <h2>{title}</h2>

      <ul>
        {stats.map(item => (
          <StaticticItem
            label={item.label}
            percentage={item.percentage}
            id={item.id}
          ></StaticticItem>
        ))}
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};

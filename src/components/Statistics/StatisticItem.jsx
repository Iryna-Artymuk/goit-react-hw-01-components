import PropTypes from 'prop-types';
import { StyledInfo } from './Statistics.styled';
export default function StaticticItem(props) {
  const { label, percentage } = props;
  return (
    <li>
      <StyledInfo type={label}>
        <span> {label}</span>
        <span>{percentage}%</span>
      </StyledInfo>
    </li>
  );
}
StaticticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

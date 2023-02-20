import StaticticItem from './StatisticItem';
import PropTypes from 'prop-types';

import { StyledList, StyledTitle } from './Statistics.styled';
import { StyledWrapper } from '../Layout/Layout.styled';
export default function Statistics(props) {
  const { stats, title } = props;
  if (title)
    return (
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>

        <StyledList>
          {stats.map(item => (
            <StaticticItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
              id={item.id}
            ></StaticticItem>
          ))}
        </StyledList>
      </StyledWrapper>
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

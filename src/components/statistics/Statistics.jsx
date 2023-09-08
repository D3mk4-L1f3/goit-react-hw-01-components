import PropTypes from 'prop-types';
import { StyledSection, StyledList } from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StyledSection>
      {title.length > 0 && <h2>{title}</h2>}
      <StyledList>
        {stats.map(value => (
          <li key={value.id} style={{ backgroundColor: "#teal" }}>
            <span>{value.label}</span>
            <span>{value.percentage}</span>
          </li>
        ))}
      </StyledList>
    </StyledSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Statistics;
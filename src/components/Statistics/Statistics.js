import PropTypes from "prop-types";
import { StatWraper,Title,StatList,StatItem,StatName,StatAmnt } from "./Statistics.styled";
export const Statistics = ({ title, stats }) => {
  return (
      <StatWraper>
        {(title) && (<Title>{title}</Title>)}
        <StatList>
          {stats.map(item => {
            return (
              <StatItem key={item.id}>
                <StatName>{item.label}</StatName>
                <StatAmnt>{item.percentage}%</StatAmnt>
              </StatItem>
            );
          })}
        </StatList>
      </StatWraper>
  );
};

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
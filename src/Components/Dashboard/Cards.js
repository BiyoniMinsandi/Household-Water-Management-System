
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cards.css';

const Card = ({content, unit, description }) => {
  let statusClass = '';

  if (description.includes('TDS Level')) {
    const tdsValue = parseInt(content, 10);
       if (tdsValue <= 150) {
           statusClass = 'good';
       } else if (tdsValue > 150 && tdsValue <= 250) {
           statusClass = 'good';
       } else if (tdsValue > 250 && tdsValue <= 300) {
           statusClass = 'moderate';
       } else if (tdsValue > 300) {
           statusClass = 'poor';
       }
  }

  return(
    <div className="card">
      <div className="content">
         <span className="limit">{content}</span>
         <span className="unit">{unit}</span>
             {statusClass && <span className={`status-circle ${statusClass}`}></span>}
      </div>
      <div className="description"> 
        {description}
      </div>
      
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CardsContainer = () => {
     const [data, setData] = useState([
        { content: 500, unit: 'Ltr', description: 'Daily Usage Limit' },
        { content: 6000, unit: 'Ltr', description: 'Monthly Usage Limit' },
        { content: 7000, unit: 'Ltr', description: 'Monthly Consumption' },
        { content: 500, unit: 'ppm', description: 'TDS Level' },
      ]);

  return (
    <div className="card-container">
       {data.map((item, index) => (
         <Card
          key={index}
          content={item.content}
          unit={item.unit}
          description={item.description}
        />
      ))}
    </div>
  );
}
export default CardsContainer;









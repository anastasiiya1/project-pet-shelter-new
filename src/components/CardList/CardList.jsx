import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import styles from './CardList.module.css';

const CardList = ({ ads }) => {
  return (
    <div className={styles.container}>
      {ads.map((card) => (
        <div className={styles.item} key={card.id}>
          <Card ad={card} />
        </div>
      ))}
    </div>
  );
};

CardList.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleChange} />
    </label>
  );
};

export default Filter;

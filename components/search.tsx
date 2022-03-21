import { SearchProp } from '../redux/types';

export default function Search({ value, handleChange }: SearchProp) {

  return (
    <div>
      <label className='title'> Search </label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );

}
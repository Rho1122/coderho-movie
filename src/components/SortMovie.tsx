interface SortMovieProps {
  sortOrder: string[];
  onSelected: (country: string) => void;
}
const SortMovie = ({ onSelected, sortOrder }: SortMovieProps) => {
  return (
    <select
      className="form-select w-auto"
      aria-label="Default select example"
      onChange={(e) => {
        onSelected(e.target.value);
      }}
    >
      {sortOrder.map((order) => (
        <option value={order} key={order}>
          {order}
        </option>
      ))}
    </select>
  );
};

export default SortMovie;

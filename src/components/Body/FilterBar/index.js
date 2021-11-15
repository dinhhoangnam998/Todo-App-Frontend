export default function FilterBar({ count }) {
  return (
    <div className="d-flex justify-content-between">
      <span>{count === 0 || count === 1 ? `${count} item` : `${count} items`}</span>
      <div>
        <div>
          <button className="btn btn-outline-primary">All</button>
          <button className="btn btn-outline-primary">Complete</button>
          <button className="btn btn-outline-primary">Incomplete</button>
        </div>
      </div>
      <button className="btn btn-outline-primary">Save</button>
    </div>
  );
}

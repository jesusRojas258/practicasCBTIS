import Input from "../atoms/input";
import Label from "../atoms/label";

function Campo({ label }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" />
    </div>
  );
}


export default Campo;

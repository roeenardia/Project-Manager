import "./Input.css";

export default function Input({ ref, label, textarea, ...props }) {
  return (
    <p className="input-css">
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
}

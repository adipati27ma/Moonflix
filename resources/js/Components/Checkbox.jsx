export default function Checkbox({ name, className = "", ...props }) {
  return (
    <input
      {...props}
      name={name}
      id={name}
      type="checkbox"
      className={
        "rounded border-gray-300 text-alerange shadow-sm focus:ring-alerange " +
        className
      }
    />
  );
}

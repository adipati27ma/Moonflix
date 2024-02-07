export default function Checkbox({ className = "", ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        "rounded border-gray-300 text-alerange shadow-sm focus:ring-alerange " +
        className
      }
    />
  );
}

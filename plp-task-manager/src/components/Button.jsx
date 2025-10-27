// src/components/Button.jsx
export default function Button({ variant = "primary", children, ...props }) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 dark:bg-red-600 dark:hover:bg-red-700",
  };

  return (
    <button {...props} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

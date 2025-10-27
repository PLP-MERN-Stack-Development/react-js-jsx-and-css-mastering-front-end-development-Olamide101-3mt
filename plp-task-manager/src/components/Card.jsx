// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 transition-all hover:shadow-lg">
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

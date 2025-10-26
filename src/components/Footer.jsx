// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-10">
      <div className="max-w-6xl mx-auto py-6 px-6 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </div>
    </footer>
  );
}

export default function Button({ children, onClick, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 w-full px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0"
    >
      {children}
    </button>
  );
}

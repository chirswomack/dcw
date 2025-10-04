export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {children}
    </div>
  );
}

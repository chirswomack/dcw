export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto pt-[99px] md:pt-0">
      {children}
    </div>
  );
}

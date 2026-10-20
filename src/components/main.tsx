const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 relative">
      {children}
    </main>
  );
};

export default Main;

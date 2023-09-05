import Navbar from "../navbar";

const AppShell = (props) => {
  const { children } = props;
  return (
    <main className="quick-sand">
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;

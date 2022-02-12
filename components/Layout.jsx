const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;

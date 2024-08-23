const PageTitle = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/food-svgrepo-com.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Restaurant Orders Management
          </a>
        </div>
      </nav>
    </>
  );
};

export default PageTitle;

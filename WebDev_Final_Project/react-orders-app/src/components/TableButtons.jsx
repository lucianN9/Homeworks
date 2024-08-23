import "./TableButtons.css";
const TableButtons = () => {
  return (
    <>
      <div className="button-container">
        <div className="wrap-button">
          <button type="button" className="btn btn-primary btn-lg button-style">
            <p>
              TABLE <br />1
            </p>
          </button>
          <button type="button" className="btn btn-primary btn-lg button-style">
            <p>
              TABLE <br />2
            </p>
          </button>
        </div>
        <div className="wrap-button">
          <button type="button" className="btn btn-primary btn-lg button-style">
            <p>
              TABLE <br />3
            </p>
          </button>
          <button type="button" className="btn btn-primary btn-lg button-style">
            <p>
              TABLE <br />4
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default TableButtons;

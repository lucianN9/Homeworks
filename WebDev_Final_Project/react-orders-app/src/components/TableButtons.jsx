import "./TableButtons.css";
import Button from "./Button";
const TableButtons = () => {
  return (
    <>
      <div className="button-container">
        <div className="wrap-button">
          <Button>
            <p>
              TABLE <br />1
            </p>
          </Button>
          <Button>
            <p>
              TABLE <br />2
            </p>
          </Button>
        </div>
        <div className="wrap-button">
          <Button>
            <p>
              TABLE <br />3
            </p>
          </Button>
          <Button>
            <p>
              TABLE <br />4
            </p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TableButtons;

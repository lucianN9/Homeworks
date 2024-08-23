const Button = ({ children }) => {
  return (
    <button type="button" className="btn btn-primary btn-lg button-style">
      {children}
    </button>
  );
};

export default Button;

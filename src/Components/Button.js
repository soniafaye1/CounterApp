function Button({ sign, handleClick }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-block mx-3"
        style={{ "max-width": "45px", "min-width": "45px" }}
        onClick={handleClick}
      >
        {sign}
      </button>
    </div>
  );
}

export default Button;

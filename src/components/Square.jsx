const Square = ({ value, onClickSquare, level }) => {
  return (
    <div className='square' onClick={() => onClickSquare(level)}>
      {value}
    </div>
  );
};

export default Square;

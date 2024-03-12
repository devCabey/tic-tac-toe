const Square = ({ value, onClickSquare, level }) => {
  return (
    <div className='border flex justify-center items-center border-black' onClick={() => onClickSquare(level)}>
      {value}
    </div>
  );
};

export default Square;

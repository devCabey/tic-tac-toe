import Square from './Square';

const Board = () => {
  const combo = [];
  const handleClick = () => {};
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      combo.push(<Square value={'X'} onClickSquare={handleClick} level={i + j} />);
    }
  }
  return <div className='board'>{combo.map((data) => data)}</div>;
};

export default Board;

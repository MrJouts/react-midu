export const Circle = ({position, onClick}) => {
  return (
    <div
      onClick={() => onClick()}
      className="target"
      style={{
        right: `${position.x}px`,
        bottom: `${position.y}px`,
      }}
    />
  );
};

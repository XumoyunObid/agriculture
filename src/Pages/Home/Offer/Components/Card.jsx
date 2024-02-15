const Card = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="">{children}</div>
    </div>
  );
};

export default Card;

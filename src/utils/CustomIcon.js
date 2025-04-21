const CustomIcon = ({ name, width = 24, height = 24, className = "" }) => {
  return (
    <img
      src={`../../assets/icons/${name}.svg`}
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default CustomIcon;

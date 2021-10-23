const Underline = ({ width, height, marginT }) => {
  if (width) {
    return (
      <div
        className={`mx-auto bg-[#e9b949] ${width} ${height} ${marginT}`}
      ></div>
    );
  }
  return (
    <div className=" mx-auto bg-[#e9b949] h-[0.15rem] mb-10 w-[90%]"></div>
  );
};

export default Underline;

// eslint-disable-next-line react/prop-types
const Box = ({ children }) => {
  return (
    <div className="shadow-lg rounded-lg bg-slate-500 flex items-center justify-center w-fit h-fit m-auto">
      {children}
    </div>
  );
};
export default Box;

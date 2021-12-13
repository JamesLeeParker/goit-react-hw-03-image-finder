import PulseLoader from "react-spinners/PulseLoader";

const wrapperStyles = {
  //   position: "absolute",
  //   marginRight: "auto",
  //   marginLeft: "auto",
  //   display: "block",
  aligneItems: "center",
  top: 0,
  left: "30%",
};

const Loader = () => {
  return (
    <div css={wrapperStyles}>
      <PulseLoader margin={4} size={13} color={"skyblue"} />
    </div>
  );
};

export default Loader;

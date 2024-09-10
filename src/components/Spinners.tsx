import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinners = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#4338ca"
      size={150}
      cssOverride={override}
    />
  );
};

export default Spinners;

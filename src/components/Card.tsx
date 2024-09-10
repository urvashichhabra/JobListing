/* eslint-disable @typescript-eslint/no-explicit-any */
const Card = ({
  children,
  bg = "bg-gray-100",
}: {
  children: any;
  bg: string;
}) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;

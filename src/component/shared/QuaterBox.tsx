import { FC } from "react";
interface IProps {
  title: string;
  desc: string;
  number: number | string;
}
const QuaterBox: FC<IProps> = ({ title, desc, number }) => {
  return (
    <div className="relative px-10 py-10 border rounded-md">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="mt-2 text-slate-600">{desc}</p>
      <span className="absolute top-0 font-bold text-gray-200 text-9xl right-10 -z-10">
        {number}
      </span>
    </div>
  );
};

export default QuaterBox;

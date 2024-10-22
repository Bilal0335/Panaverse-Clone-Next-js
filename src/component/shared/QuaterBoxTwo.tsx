import { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
//   haveBorder: false;
}
const QuaterBoxTwo: FC<IProps> = ({ header, description, number }) => {
  return (
    <div
      className="relative flex flex-col justify-center flex-1 px-10 py-16 transition-transform duration-300 border rounded-md cursor-pointer group"
      key={number}
    >
      <h4 className="text-xl font-bold transition-transform duration-700 ease-in-out group-hover:text-teal-900">
        {header}
      </h4>
      <p className="mt-2 text-sm font-normal text-slate-600">{description}</p>
      <span className="absolute -top-8 font-bold text-gray-200 text-[170px] right-10 -z-10 transition-transform duration-500 scale-y-110 group-hover:scale-y-125 ease-in-out">
        {number}
      </span>
    </div>
  );
};

export default QuaterBoxTwo;

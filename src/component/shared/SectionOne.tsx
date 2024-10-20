import { FC } from "react";
interface SectProps {
  subtitle?: string;
  title: string;
  description: string;
  titleClassName?: string;
  whiteSpace?: string;
  subdescription?: string;
}

const SectionOne: FC<SectProps> = ({
  subtitle,
  title,
  description,
  titleClassName,
  whiteSpace,
  subdescription
}) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-teal-800">{subtitle}</h4>
      <h1
        className={`font-bold leading-tight text-gray-900 ${titleClassName} ${whiteSpace}`}
      >
        {title}
      </h1>
      <p className={`max-w-xl mt-4 text-lg text-gray-500 ${subdescription}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionOne;

import { cn } from "../../lib/utils";

export const Title = ({ title, description, Icon, iconColor, bgColor }) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold a">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

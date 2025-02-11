import { useEventTracker } from "@/hooks";
import { Card } from "@/ui";

export const TopRealms = () => {
  const { topRealms } = useEventTracker();

  const getColor = (score: number) => {
    if (score < 50) return "text-chart-5";
    if (score < 75) return "text-chart-3";
    return "text-chart-2";
  };

  return (
    <div className="flex flex-wrap gap-1 justify-center">
      {topRealms.map((item) => (
        <Card
          key={`${item.server}-${item.realm}`}
          className={"rounded-none w-fit px-2 py-1 border-primary"}
        >
          <span>{`${item.server} - ${item.realm}: `}</span>
          <span className={getColor(item.score)}>{`${item.score}%`}</span>
        </Card>
      ))}
    </div>
  );
};

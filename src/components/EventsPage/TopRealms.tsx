import { useEventTracker } from "@/hooks";
import { Card } from "@/ui";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const TopRealms = () => {
  const { topRealms } = useEventTracker();
  const [collapsed, setCollapsed] = useState(false);

  const getColor = (score: number) => {
    if (score < 50) return "text-chart-5";
    if (score < 75) return "text-chart-3";
    return "text-chart-2";
  };

  return (
    <div className="flex">
      <div>
        {collapsed ? (
          <ChevronDown
            onClick={() => setCollapsed(false)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <ChevronUp
            onClick={() => setCollapsed(true)}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div
        className={`
          flex flex-wrap gap-1 justify-center
          ${collapsed ? "hidden" : ""}
        `}
      >
        {topRealms.map((item) => (
          <Card
            key={`${item.server}-${item.realm}`}
            className={"rounded-none w-fit px-2 py-1 border-primary"}
          >
            <span>{`${item.server} - ${item.realm} (${item.realmCount}) `}</span>
            <span className={getColor(item.score)}>{`${item.score}%`}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

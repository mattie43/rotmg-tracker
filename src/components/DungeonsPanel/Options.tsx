import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@/ui";
import { useDungeonOptions, type TOptions } from "@/hooks";

type TSwitch = "showNames" | "showDifficulty" | "hideCompleted" | "hideGuide";

export const Options = () => {
  const { options, setOptions } = useDungeonOptions();
  const { showNames, showDifficulty, hideCompleted, hideGuide } = options;

  const switches = [
    {
      name: "Hide page guide",
      checked: hideGuide,
      key: "hideGuide",
    },
    {
      name: "Show dungeon names",
      checked: showNames,
      key: "showNames",
    },
    {
      name: "Show dungeon difficulty",
      checked: showDifficulty,
      key: "showDifficulty",
    },
    {
      name: "Hide completed dungeons",
      checked: hideCompleted,
      key: "showCompleted",
    },
  ];

  const handleSwitchChange = (type: TSwitch) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: !prev[type],
      };
    });
  };

  const handleTypeChange = (type: TOptions["sortBy"]) => {
    setOptions((prev) => {
      return {
        ...prev,
        sortBy: type,
      };
    });
  };

  const handleReset = () => {
    setOptions((prev) => {
      return {
        ...prev,
        completedList: [],
      };
    });
  };

  return (
    <>
      {switches.map((item) => (
        <span key={item.key} className="flex items-center gap-2">
          {item.name}
          <Switch
            checked={item.checked}
            onClick={() => handleSwitchChange(item.key as TSwitch)}
          />
        </span>
      ))}
      <div className="flex items-center gap-2">
        <span>Sort by: </span>
        <Select value={options.sortBy} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue className="capitalize" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="difficulty">Difficulty</SelectItem>
            <SelectItem value="fame">Fame</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="type">Type</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleReset} variant={"outline"}>
        Reset completed dungeons
      </Button>
    </>
  );
};

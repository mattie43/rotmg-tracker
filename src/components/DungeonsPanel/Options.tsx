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

export const Options = () => {
  const { options, setOptions } = useDungeonOptions();
  const { showNames, showDifficulty, showCompleted } = options;

  const handleSwitchChange = (
    type: "showNames" | "showDifficulty" | "showCompleted"
  ) => {
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
      <span className="flex items-center gap-2">
        Show dungeon names
        <Switch
          checked={showNames}
          onClick={() => handleSwitchChange("showNames")}
        />
      </span>
      <span className="flex items-center gap-2">
        Show dungeon difficulty
        <Switch
          checked={showDifficulty}
          onClick={() => handleSwitchChange("showDifficulty")}
        />
      </span>
      <span className="flex items-center gap-2">
        Hide completed dungeons
        <Switch
          checked={!showCompleted}
          onClick={() => handleSwitchChange("showCompleted")}
        />
      </span>
      <div className="flex items-center gap-2">
        <span>Sort by: </span>
        <Select value={options.sortBy} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue className="capitalize" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="type">Type</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
            <SelectItem value="fame">Fame</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleReset} variant={"outline"}>
        Reset completed dungeons
      </Button>
    </>
  );
};

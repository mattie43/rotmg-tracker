import { useStore } from "@/hooks";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Switch,
} from "@/ui";

export const Dungeonpanel = () => {
  const { store, setStore } = useStore();
  const pageGuide = store?.showPageGuide;

  return (
    <div>
      <span>content {"   "}</span>
      <Switch
        checked={pageGuide}
        onClick={() =>
          setStore((prev) => ({
            ...prev,
            showPageGuide: !prev.showPageGuide,
          }))
        }
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>butn</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Type</DropdownMenuItem>
          <DropdownMenuItem>Fame</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

import {} from "@/components/Select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filters } from "@/lib/types";

interface IDropdownSelect {
  name: keyof Filters | "sortBy";
  options: string[];
  label: string;
  placeholder: string;
  updateFilter: (key: keyof Filters, value: string) => void;
  defaultValue: string;
}

export function DropdownSelect(props: IDropdownSelect) {
  return (
    <Select
      onValueChange={(value) => props.updateFilter(props.name, value)}
      defaultValue={props.defaultValue}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.label}</SelectLabel>
          {props.options.map((option) => (
            <SelectItem key={`${props.placeholder}-${option}`} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

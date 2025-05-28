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
import { Label } from "./ui/label";

interface IDropdownSelect {
  name: keyof Filters | "sortBy";
  options: string[];
  label: string;
  placeholder: string;
  updateFilter: (key: keyof Filters, value: string) => void;
  defaultValue: string;
  value?: string;
}

export function DropdownSelect(props: IDropdownSelect) {
  return (
    <div className="mb-3">
      <Label className="pl-2 mb-2 block" htmlFor={props.name}>
        {props.label}
      </Label>
      <Select
        name={props.name as string}
        onValueChange={(value) =>
          props.updateFilter(props.name as keyof Filters, value)
        }
        defaultValue={props.defaultValue}
        value={props.value}
      >
        <SelectTrigger className="w-[175px]">
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
    </div>
  );
}

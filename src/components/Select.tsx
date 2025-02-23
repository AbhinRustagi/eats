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

interface IDropdownSelect {
  options: string[];
  label: string;
  placeholder: string;
}

export function DropdownSelect(props: IDropdownSelect) {
  return (
    <Select>
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

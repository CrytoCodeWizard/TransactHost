import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
interface SearchInputProps {
    placeHolder: string,
    value: string,
    className: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchInput = ({
    placeHolder,
    value,
    className
}: SearchInputProps) => {
    return (
        <div className="flex flex-row items-center ml-2">
            <IconSearch className="w-4 h-4 -mr-6" />
            <Input
                type='search'
                placeholder={placeHolder}
                className={`${className} pl-8 py-4`}
                defaultValue={value}
                onChange={() => onchange} />
        </div>
    )
}

export default SearchInput;
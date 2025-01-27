import PropTypes from 'prop-types'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@radix-ui/react-dropdown-menu'

export function PostSorting({
    fields = [],
    value,
    onChange,
    orderValue,
    onOrderValueChange
}) {
    return (
        <div>
            <Label htmlFor='sortBy'>Sort By: </Label>
            <Select
                name='sortBy'
                id='sortBy'
                value={value}
                onValueChange={(e) => onChange(e)}
            >
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select sort by" />
                </SelectTrigger>
                <SelectContent>
                    {fields.map((field) => (
                        <SelectItem key={field} value={field}>
                            {field}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {' / '}
            <Label htmlFor='sortOrder'>Sort Order: </Label>
            <Select
                name='sortOrder'
                id='sortOrder'
                value={orderValue}
                onValueChange={(e) => onOrderValueChange(e)}
            >
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="select order" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={'ascending'}>ascending</SelectItem>
                    <SelectItem value={'descending'}>descending</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

PostSorting.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    orderValue: PropTypes.string.isRequired,
    onOrderChange: PropTypes.func.isRequired,
}

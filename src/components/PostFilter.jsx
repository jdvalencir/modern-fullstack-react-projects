import PropTypes from 'prop-types'
import { Label } from './ui/label'
import { Input } from './ui/input'

export function PostFilter({ field, value, onChange }) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={`filter-${field}`}>{field}: </Label>
            <Input
                type='text'
                name={`filter-${field}`}
                id={`filter-${field}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

PostFilter.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired
}
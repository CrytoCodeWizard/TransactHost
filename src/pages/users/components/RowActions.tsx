import { Row } from '@tanstack/react-table';
import UserSchema from '../data/schema';
import { IconDots, IconPencil, IconTrash } from '@tabler/icons-react';

interface RowActionsProps<TData> {
    row: Row<TData>
}

const RowActions = ({
    row
}: RowActionsProps<any>) => {
    const user = UserSchema.parse(row.original);

    return (
        <div className='flex justify-end space-x-4 pr-2'>
            <IconTrash />
            <IconPencil />
            <IconDots />
        </div>
    )
}

export default RowActions;
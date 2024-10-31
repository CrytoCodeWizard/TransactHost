import { Row } from '@tanstack/react-table';
import {
    IconTrash,
    IconShoppingCart,
    IconDots
} from '@tabler/icons-react';

interface RowActionsProps<TData> {
    row: Row<TData>
}

const RowActions = ({
    row
}: RowActionsProps<any>) => {
    return (
        <div className='flex justify-end space-x-4'>
            <IconTrash />
            <IconShoppingCart />
            <IconDots />
        </div>
    )
}

export default RowActions;
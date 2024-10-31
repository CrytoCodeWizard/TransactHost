import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { IconInfoCircle } from "@tabler/icons-react";

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import ColumnHeader from "@/components/table/ColumnHeader";

import RowActions from "./RowActions";
import { User } from "../data/schema";
import roles from "../data/data";

const columns = (): ColumnDef<User>[] => {
    const { t } = useTranslation();

    return [
        {
            id: 'select',
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label='Select all'
                    className="translate-y-[2px] w-5 h-5 ml-1" />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label='Select row'
                    className={`translate-y-[2px] w-5 h-5 ml-1`} />
            ),
            enableSorting: false,
            enableHiding: false
        },
        {
            accessorKey: 'name',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('name')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('name')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'email',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('email')} />
            ),
            cell: ({ row }) => <div className="w-[150px]">{row.getValue('email')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'role',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('role')} />
            ),
            cell: ({ row }) => {
                const role = roles.find(
                    (role) => role.value === row.getValue('role')
                )
                if (!role) {
                    return null;
                }

                return (
                    <div className='flex w-fit p-2 rounded-full items-center bg-card'>
                        {role.icon && (
                            <role.icon className='mr-2 size-4' />
                        )}
                        <span>{role.label}</span>
                    </div>
                );
            },
            filterFn: (row, id, value) => {
                return value.includes(row.getValue(id))
            },
        },
        {
            accessorKey: 'status',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('status')} />
            ),
            cell: ({ row }) =>
                row.getValue('status') === 'Pending' ? <div className="flex items-center gap-1">{row.getValue('status')}<IconInfoCircle /></div> : row.getValue('status')
        },
        {
            id: 'actions',
            header: () => (
                <div className="text-end pr-2">{t('actions')}</div>
            ),
            cell: ({ row }) => (<RowActions row={row} />)
        }
    ]
}

export default columns;
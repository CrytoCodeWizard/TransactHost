import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import ColumnHeader from "@/components/table/ColumnHeader";

import RowActions from "./RowActions";
import { Partner } from "../../data/partners_data/schema";

const columns = (): ColumnDef<Partner>[] => {
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
                <ColumnHeader column={column} title={t('company_name')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('name')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'connections',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('product_connections')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('connections')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'outgoing',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('outgoing_orders')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('outgoing')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'incoming',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('incoming_orders')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('incoming')}</div>,
        },
        {
            id: 'actions',
            header: ({ table }) => (
                <div className="text-end pr-2">{t('actions')}</div>
            ),
            cell: ({ row }) => (<RowActions row={row} />)
        }
    ]
}

export default columns;
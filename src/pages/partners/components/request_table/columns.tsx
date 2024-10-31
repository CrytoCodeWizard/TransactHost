import { ColumnDef } from "@tanstack/react-table";

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import RowActions from "./RowActions";
import { Request } from "../../data/request_data/schema";

const getColumns = (type: 'incoming' | 'outgoing'): ColumnDef<Request>[] => [
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
                className="size-5 ml-1" />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
                className={`translate-y-[2px] size-5 ml-1`} />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'company_detail',
        cell: ({ row }) => {
            const companyDetail = row.getValue('company_detail') as Request['company_detail'];
            return (
                <div className="w-auto bg-card rounded-md p-4 h-32">
                    <p className="font-semibold text-base mb-2">{companyDetail.name}</p>
                    <p className="text-sm mb-2">{companyDetail.code}</p>
                    <p className="text-sm">{companyDetail.address}</p>
                </div>
            );
        },
        enableSorting: true,
        enableHiding: false
    },
    {
        accessorKey: 'contact_info',
        cell: ({ row }) => {
            const contactInfo = row.getValue('contact_info') as Request['contact_info'];
            return (
                <div className="w-auto bg-card rounded-md p-4 h-32">
                    <p className="font-semibold text-base mb-2">{contactInfo.name}</p>
                    <p className="text-sm mb-2">{contactInfo.number}</p>
                    <p className="text-sm">{contactInfo.mail}</p>
                </div>
            );
        },
        enableSorting: true,
        enableHiding: false
    },
    {
        id: 'received_date',
        accessorKey: 'received_date',
        cell: ({ row }) => <div className="w-auto bg-card rounded-md p-4 h-32">{row.getValue('received_date')}</div>,
        enableSorting: true,
        enableHiding: false
    },
    {
        id: 'actions',
        header: ({ table }) => (
            <div className="text-end pr-2">Actions</div>
        ),
        cell: ({ row }) => (<RowActions row={row} type={type} />),
    }
]

export default getColumns;
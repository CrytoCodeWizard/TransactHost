import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from 'react-i18next';
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";

import ColumnHeader from "@/components/table/ColumnHeader";
import { History } from "../../data/history_data/schema";

const columns = (): ColumnDef<History>[] => {
    const { t } = useTranslation();

    return [
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
            accessorKey: 'vat_number',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('vat_number')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('vat_number')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'received_date',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('date_received')} />
            ),
            cell: ({ row }) => <div className="w-auto">{row.getValue('received_date')}</div>,
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: 'comment',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('comment')} />
            ),
            cell: ({ row }) => <div className="w-auto text-xs">{row.getValue('comment')}</div>,
        },
        {
            accessorKey: 'status',
            header: ({ column }) => (
                <ColumnHeader column={column} title={t('status')} />
            ),
            cell: ({ row }) => {
                const status = row.getValue('status') as History['status'];
                return (
                    <div className="w-auto flex items-center gap-2">
                        {
                            status.type === "Accepted" ?
                                (<div className="flex gap-1 p-1 rounded-full items-center bg-card"><IconCircleCheck /><p className="text-xs">{t('accepted')}</p></div>)
                                :
                                (<div className="flex gap-1 p-1 rounded-full items-center bg-popover-foreground"><IconCircleX /><p className="text-xs">{t('rejected')}</p></div>)
                        }
                        <p className="text-sm">{status.date.toLocaleString()}</p>
                    </div>
                );
            },
            enableSorting: true,
            enableHiding: false
        },
    ]
}

export default columns;
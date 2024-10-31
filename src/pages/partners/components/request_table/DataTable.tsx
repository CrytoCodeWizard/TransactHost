import React, { useState } from 'react';

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

import Pagination from '@/components/table/Pagination';
import Toolbar from './Toolbar';
import getColumns from './columns';


interface DataTableProps<TData, TValue> {
    // columns: ColumnDef<TData, TValue>[];
    data: TData[];
    type: 'incoming' | 'outgoing';
}

const DataTable = ({
    data,
    type
}: DataTableProps<any, any>) => {
    const columns = getColumns(type);
    const [rowSelection, SetRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters
        },
        enableRowSelection: true,
        onRowSelectionChange: SetRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues()
    });

    return (
        <div className='space-y-4 px-4 py-6'>
            <Toolbar table={table} />
            <Table>
                <TableHeader>
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <TableRow className='border-0' key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} colSpan={header.colSpan}>
                                        {
                                            header.id == "select" ? flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            ) : null
                                        }
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableHeader>
                <TableBody className='w-full'>
                    {
                        table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}
                                    className='hover:bg-accent hover:cursor-pointer'>
                                    {
                                        row.getVisibleCells().map((cell) => (
                                            <TableCell className='p-4' key={cell.id}>
                                                {
                                                    flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )
                                                }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length}>
                                    No results
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            <Pagination table={table} />
        </div>
    );
}

export default DataTable;
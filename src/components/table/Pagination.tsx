import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon
} from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/Button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
}

interface PaginationProps<TData> {
    table: Table<TData>
}

const Pagination = ({
    table
}: PaginationProps<any>) => {
    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();
    const canPreviousPage = table.getCanPreviousPage();
    const canNextPage = table.getCanNextPage();
    const { t } = useTranslation();

    let middlePages;
    if (pageCount <= 7) {
        middlePages = range(0, pageCount - 1);
    } else {
        const visiblePages = 3;
        if (pageIndex < visiblePages) {
            middlePages = [...range(0, visiblePages), '...', pageCount - 1];
        } else if (pageIndex > pageCount - 1 - visiblePages) {
            middlePages = [0, '...', ...range(pageCount - 3, pageCount - 1)];
        } else {
            middlePages = [0, '...', pageIndex - 1, pageIndex, pageIndex + 1, '...', pageCount - 1];
        }
    }

    return (
        <div className='flex flex-row items-center justify-between overflow-auto px-2 py-4'>
            <div className="flex text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} {t('of')} {' '}
                {table.getFilteredRowModel().rows.length} {t('rows_selected')}
            </div>
            <div className="flex items-center space-x-2">
                <Button
                    variant='ghost'
                    className='hidden h-8 w-8 px-2 lg:flex'
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}>
                    <span className="sr-only">Go to first page</span>
                    <DoubleArrowLeftIcon className='h-4 w-4' />
                </Button>
                <Button
                    variant='ghost'
                    className='h-8 px-2'
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    <span className="sr-only">Go to previous page</span>
                    {t('previous')}
                </Button>
                {
                    middlePages.map((page, index) => (
                        typeof page === 'number' ? (
                            <Button
                                key={index}
                                variant={`${pageIndex === page ? 'secondary' : 'ghost'}`}
                                className={`h-8 w-8 px-3 py-2 ${pageIndex === page ? 'text-bold' : 'text-muted-foreground'}`}
                                onClick={() => table.setPageIndex(page)}>
                                {page + 1}
                            </Button>
                        ) : (
                            <span
                                key={index}
                                className='px-2 h-8 flex items-center'>
                                ...
                            </span>
                        )
                    ))
                }
                <Button
                    variant='ghost'
                    className='h-8 w-16 px-2'
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}>
                    <span className="sr-only">Go to next page</span>
                    {t('next')}
                </Button>
                <Button
                    variant='ghost'
                    className='hidden h-8 w-8 px-2 lg:flex'
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!canNextPage}>
                    <span className="sr-only">Go to last page</span>
                    <DoubleArrowRightIcon className='h-4 w-4' />
                </Button>
            </div>
            <div className="flex items-center sm:space-x-6 lg:space-x-8">
                <div className='flex items-center space-x-2'>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                        }}>
                        <SelectTrigger className='border-none h-8 w-[70px]'>
                            <SelectValue className="border" placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side='top' className='bg-background'>
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem className="text-white" key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className='hidden text-sm text-muted-foreground font-medium sm:block'>
                        {t('rows_per_page')}
                    </p>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm text-muted-foreground font-medium">
                    {t('page')} {table.getState().pagination.pageIndex + 1} {t('of')} {' '}
                    {table.getPageCount()}
                </div>
            </div>
        </div>
    )
}

export default Pagination;
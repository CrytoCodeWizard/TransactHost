import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';

import SearchInput from '@/components/SearchInput';
import Filter from '@/components/table/Filter';

interface ToolBarProps<TData> {
    table: Table<TData>
}

const Toolbar = <TData extends object>({ table }: ToolBarProps<TData>) => {
    const isFiltered = table.getState().columnFilters.length > 0;
    const { t } = useTranslation();

    return (
        <div className='flex items-center justify-between'>
            <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
                <SearchInput
                    placeHolder={t('search')}
                    value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                    className="h-8 w-[150px] lg:w-[20vw]"
                    onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)} />
            </div>
            <Button
                variant='secondary'>
                {t('invite_a_company')}
            </Button>
        </div>
    );
};

export default Toolbar;
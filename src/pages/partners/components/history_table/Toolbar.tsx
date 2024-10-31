import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';

import SearchInput from '@/components/SearchInput';
import Filter from '@/components/table/Filter';
import DatePicker from '@/components/DatePicker';

interface ToolBarProps<TData> {
    table: Table<TData>
}

const Toolbar = <TData extends object>({ table }: ToolBarProps<TData>) => {
    const isFiltered = table.getState().columnFilters.length > 0;
    const { t } = useTranslation();

    return (
        <div className='flex items-center gap-2'>
            <div className="flex items-start">
                <SearchInput
                    placeHolder={t('search')}
                    value={(table.getColumn('company_detail')?.getFilterValue() as string) ?? ''}
                    className="h-8 w-[150px] lg:w-[20vw]"
                    onChange={(event) => table.getColumn('company_detail')?.setFilterValue(event.target.value)} />
            </div>
            <DatePicker />
        </div>
    );
};

export default Toolbar;
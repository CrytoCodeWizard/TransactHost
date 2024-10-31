import {
    ArrowDownIcon,
    ArrowUpIcon,
    CaretSortIcon,
    EyeNoneIcon
} from '@radix-ui/react-icons';

import { Column } from '@tanstack/react-table';
import { Button } from '@/components/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';

interface ColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

const ColumnHeader = <TData, TValue>({
    column,
    title,
    className
}: ColumnHeaderProps<TData, TValue>) => {
    if(!column.getCanSort()) {
        return <div className={cn(className)}> {title} </div>
    }

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button
                        variant='ghost'
                        size='sm'
                        className='-ml-3 h-8 data-[state-open]:bg-accent'>
                        <span>{title}</span>
                        {column.getIsSorted() === 'desc' ? (
                            <ArrowDownIcon className='w-4 h-4 ml-2' />
                        ) : column.getIsSorted() === 'asc' ? (
                            <ArrowUpIcon className='w-4 h-4 ml-2' />
                        ) : (
                            <CaretSortIcon className='w-4 h-4 ml-2' />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start' className='bg-background'>
                    <DropdownMenuItem
                        className="text-muted-foreground/70"
                        onClick={() => column.toggleSorting(false)}>
                        <ArrowUpIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70'/>
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => column.toggleSorting(true)}
                        className="text-muted-foreground/70">
                        <ArrowDownIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70'/>
                        Desc
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="text-muted-foreground/70">
                        <EyeNoneIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70'/>
                        Hide
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ColumnHeader;
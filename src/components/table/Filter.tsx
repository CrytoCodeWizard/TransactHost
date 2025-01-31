import React, { ComponentType } from 'react';
import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Column } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/Button';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from '@/components/ui/command';

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

interface FilterProps<TData, TValue> {
    column?: Column<TData, TValue>
    title?: string
    options: {
        label: string
        value: string
        icon?: ComponentType<{ className?: string }>
    }[]
}

const Filter = <TData, TValue>({
    column,
    title,
    options,
}: FilterProps<TData, TValue>) => {
    const facets = column?.getFacetedUniqueValues();
    const selectedValues = new Set(column?.getFilterValue() as string[]);
    const { t } = useTranslation();

    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    variant="outline"
                    size="sm"
                    className='h-8 border-dashed'>
                    <PlusCircledIcon className='mr-2 h-4 w-4' />
                    {title}
                    {
                        selectedValues?.size > 0 && (
                            <>
                                <Separator orientation='vertical' className='mx-2 h-4' />
                                <Badge
                                    variant='secondary'
                                    className='rounded-sm px-1 font-normal lg:hidden'>
                                    {selectedValues.size}
                                </Badge>
                                <div className="hidden space-x-1 lg:flex">
                                    {
                                        selectedValues.size > 2 ? (
                                            <Badge
                                                variant='secondary'
                                                className='rounded-sm px-1 font-normal'>
                                                {selectedValues.size} selected
                                            </Badge>
                                        ) : (
                                            options
                                                .filter((option) => selectedValues.has(option.value))
                                                .map((option) => (
                                                    <Badge
                                                        className='rounded-sm px-1 font-normal'>
                                                        {t(option.value)}
                                                    </Badge>
                                                ))
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align='start'>
                <Command>
                    <CommandInput className="text-white" placeholder={title} />
                    <CommandList>
                        <CommandEmpty>{t("no_results_found")}</CommandEmpty>
                        <CommandGroup>
                            {
                                options.map((option) => {
                                    const isSelected = selectedValues.has(option.value);
                                    return (
                                        <CommandItem
                                            key={option.value}
                                            onSelect={() => {
                                                if (isSelected) {
                                                    selectedValues.delete(option.value)
                                                } else {
                                                    selectedValues.add(option.value)
                                                }
                                                const filterValues = Array.from(selectedValues)
                                                column?.setFilterValue(
                                                    filterValues.length ? filterValues : undefined
                                                )
                                            }}>
                                            <div
                                                className={cn(
                                                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                                    isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
                                                )}>
                                                <CheckIcon className={cn('h-4 w-4')} />
                                            </div>
                                            {option.icon && (
                                                <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                            )}
                                            <span>{t(option.value)}</span>
                                            {facets?.get(option.value) && (
                                                <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                    {facets.get(option.value)}
                                                </span>
                                            )}
                                        </CommandItem>
                                    )
                                })
                            }
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => column?.setFilterValue(undefined)}
                                        className='justify-center text-center'>
                                        {t("clear_filters")}
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default Filter;
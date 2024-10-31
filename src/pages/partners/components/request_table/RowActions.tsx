import { Row } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

interface RowActionsProps<TData> {
    row: Row<TData>,
    type: string
}

const RowActions = ({
    row,
    type
}: RowActionsProps<any>) => {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-3 w-fit ml-auto'>
            <Button variant='secondary' className='text-xs font-normal px-6'>
                {
                    type === 'incoming' ? t('accept_request') : t('send_a_reminder')
                }
            </Button>
            <Button variant='destructive' className='text-xs font-normal px-6'>
                {
                    type === 'incoming' ? t('decline_request') : t('discard')
                }
            </Button>
        </div>
    )
}

export default RowActions;
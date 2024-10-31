import { IconCirclePlus, IconInfoCircle } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/Button";


const CompanyInformation = () => {
    const { t } = useTranslation();

    return (
        <div className="grid px-5 py-6 border border-[#3A3A42] rounded-md grid-cols-3 max-sm:grid-cols-none">
            <div className='space-y-4 col-span-2'>
                <div className="space-y-1">
                    <p className="font-semibold text-xl">Example Company Ltd.</p>
                    <p className="text-sm text-muted-foreground">{t('registered')}: 08/09/2023</p>
                </div>
                <div className="space-y-1">
                    <p className='text-sm font-semibold'>{t('company_registration_number')}</p>
                    <Input value="12-34-567891" disabled />
                </div>
                <div className="space-y-1">
                    <p className='text-sm font-semibold'>{t('vat_number')}</p>
                    <Input value="12345678-9-10" disabled />
                </div>
                <div className="flex items-center bg-popover-foreground rounded-md px-3 py-2 gap-2 text-sm">
                    <IconInfoCircle className='size-5 text-secondary' />
                    <div className='flex text-sm text-muted gap-2'>
                        <p>{t('change_vat_number')}</p>
                        <span className='underline cursor-pointer font-semibold'>
                            {t('contact_us')}
                        </span>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className='text-xl font-semibold'>{t('main_address')}</p>
                    <div className="space-y-1">
                        <p className='text-sm font-semibold'>{t('country')}</p>
                        <Input value="Hungary" />
                    </div>
                    <div className="grid grid-cols-10 gap-2">
                        <div className="col-span-6 space-y-1">
                            <p className='text-sm font-semibold'>{t('city')}</p>
                            <Input value="Budapest" />
                        </div>
                        <div className="col-span-4 space-y-1">
                            <p className='text-sm font-semibold'>{t('zip_code')}</p>
                            <Input value="1116" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className='text-sm font-semibold'>{t('address')}</p>
                        <Input value="Minta utca 16. 2/A" />
                    </div>
                </div>
                <div className="flex items-center border border-dashed border-secondary rounded-md px-3 py-4 gap-2 cursor-pointer">
                    <IconCirclePlus className='text-secondary' />
                    <div className='flex gap-2 items-center'>
                        <p className='font-semibold'>{t('add_new_address')}</p>
                        <p className='text-sm text-muted'>
                            {t('ex_office_address')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button className='text-xs font-normal px-8' variant='secondary'>{t('save_changes')}</Button>
                    <Button className='text-xs font-normal px-8'>{t('discard')}</Button>
                </div>
            </div>
            <div className='sm:text-end col-span-1 max-sm:mt-4'>
                <Button variant='destructive' className='text-xs font-normal px-6'>{t('delete_account')}</Button>
            </div>
        </div>
    );
}

export default CompanyInformation;
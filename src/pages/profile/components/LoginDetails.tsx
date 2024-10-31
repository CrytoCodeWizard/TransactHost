import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/password-input";

const LoginDetails = () => {
    const { t } = useTranslation();

    return (
        <div className="grid px-5 py-6 border border-[#3A3A42] rounded-md grid-cols-3 max-sm:grid-cols-none">
            <div className='space-y-4 col-span-2'>
                <p className="font-semibold text-xl">{t('login_details')}</p>
                <div className="space-y-1">
                    <p className='text-sm font-semibold'>{t('first_name')}</p>
                    <Input value="Istvan" />
                </div>
                <div className="space-y-1">
                    <p className='text-sm font-semibold'>{t('last_name')}</p>
                    <Input value="Minta" />
                </div>
                <div className="space-y-1">
                    <p className='text-sm font-semibold'>{t('email')}</p>
                    <Input value="minta.istvan@email.com" />
                </div>
                <p className='text-xl font-semibold'>{t('password')}</p>
                <div className="md:flex gap-2 max-md:space-y-4">
                    <div className="space-y-4 w-1/2 max-md:w-full">
                        <div className="space-y-1">
                            <p className='text-sm font-semibold'>{t('current_password')}</p>
                            <Input type='password' value="AAAaaa!!!" />
                        </div>
                        <div className="space-y-1">
                            <p className='text-sm font-semibold'>{t('new_password')}</p>
                            <PasswordInput className='focus-visible:ring-ring' placeholder={t('add_new_password')} />
                        </div>
                        <div className="space-y-1">
                            <p className='text-sm font-semibold'>{t('confirm_new_password')}</p>
                            <PasswordInput className='focus-visible:ring-ring' placeholder={t('confirm_password')} />
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {t('password_requirements')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <div className='flex text-sm gap-2 items-center text-secondary'>
                                    <IconCircleCheck size="20" />
                                    <p>{t('password_characters')}</p>
                                </div>
                                <div className='flex text-sm gap-2 items-center text-secondary'>
                                    <IconCircleCheck size="20" />
                                    <p>{t('password_uppercase')}</p>
                                </div>
                                <div className='flex text-sm gap-2 items-center'>
                                    <IconCircleX size="20" />
                                    <p>{t('password_special')}</p>
                                </div>
                                <div className='flex text-sm gap-2 items-center'>
                                    <IconCircleX size="20" />
                                    <p>{t('password_same')}</p>
                                </div>
                            </ul>
                        </CardContent>
                    </Card>
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

export default LoginDetails;
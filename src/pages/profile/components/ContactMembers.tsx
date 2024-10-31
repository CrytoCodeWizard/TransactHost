import { IconCirclePlus, IconPencil, IconTrash } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/Button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

const ContactMembers = () => {
    const { t } = useTranslation();

    return (
        <div className="grid px-5 py-6 border border-[#3A3A42] rounded-md grid-cols-3 max-sm:grid-cols-none">
            <div className='space-y-4 col-span-2'>
                <div className="space-y-1">
                    <p className="font-semibold text-xl">{t('contact_members')}</p>
                    <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur. Montes lobortis elit sed faucibus bibendum quam odio.
                    </p>
                </div>
                <div className="space-y-4">
                    <p className='text-xl font-semibold'>{t('saved_contacts')}</p>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center">
                                    <p>Minta Janos</p>
                                    <div className="flex gap-2">
                                        <div className="bg-muted rounded-sm p-1 cursor-pointer">
                                            <IconPencil size={20} />
                                        </div>
                                        <div className="bg-muted rounded-sm p-1 cursor-pointer">
                                            <IconTrash size={20} />
                                        </div>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                            <p>Ügyvezető</p>
                            <p>mintajanos@cegnevmail.com</p>
                            <p>+36 20 123 4567</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center">
                                    <p>Minta Janos</p>
                                    <div className="flex gap-2">
                                        <div className="bg-muted rounded-sm p-1 cursor-pointer">
                                            <IconPencil size={20} />
                                        </div>
                                        <div className="bg-muted rounded-sm p-1 cursor-pointer">
                                            <IconTrash size={20} />
                                        </div>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                            <p>Ügyvezető</p>
                            <p>mintajanos@cegnevmail.com</p>
                            <p>+36 20 123 4567</p>
                        </CardContent>
                    </Card>
                    <div className="flex items-center border border-dashed border-secondary rounded-md px-3 py-4 gap-2 cursor-pointer">
                        <IconCirclePlus className='text-secondary' />
                        <p className='font-semibold'>{t('add_new_contact_member')}</p>
                    </div>
                    <div className="flex gap-4">
                        <Button className='text-xs font-normal px-8' variant='secondary'>{t('save_changes')}</Button>
                        <Button className='text-xs font-normal px-8'>{t('discard')}</Button>
                    </div>
                </div>
            </div>
            <div className='sm:text-end col-span-1 max-sm:mt-4'>
                <Button variant='destructive' className='text-xs font-normal px-6'>{t('delete_account')}</Button>
            </div>
        </div>
    );
}

export default ContactMembers;

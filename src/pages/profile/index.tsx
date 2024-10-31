import { useTranslation } from 'react-i18next';
import {
    IconSettings,
    IconShoppingCart,
    IconBell,
} from '@tabler/icons-react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import {
    Layout,
    LayoutBody,
    LayoutHeader
} from '@/components/common/Layout';
import UserNav from '@/components/UserNav';

import CompanyInformation from './components/CompanyInformation';
import LoginDetails from './components/LoginDetails';
import ContactMembers from './components/ContactMembers';

const Profile = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <LayoutHeader>
                <div className='flex flex-auto justify-between items-center'>
                    <div className="flex flex-auto justify-between items-center pl-2 pr-6">
                        <div className="flex flex-row items-center">
                            <IconSettings size={20} />
                            <p className="text-xl px-2">{t('profile_settings')}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <IconShoppingCart className="mx-2 my-1 cursor-pointer" size={20} />
                            <IconBell className="mx-2 my-1 cursor-pointer" size={20} />
                        </div>
                    </div>
                    <UserNav />
                </div>
            </LayoutHeader>
            <LayoutBody>
                <Tabs
                    orientation='vertical'
                    defaultValue='information'
                    className='space-y-6'>
                    <TabsList className='max-sm:grid'>
                        <TabsTrigger value='information' className='w-full'>
                            {t('company_information')}
                        </TabsTrigger>
                        <TabsTrigger value='details'>
                            {t('login_details')}
                        </TabsTrigger>
                        <TabsTrigger value='members'>
                            {t('contact_members')}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value='information' className='space-y-4'>
                        <CompanyInformation />
                    </TabsContent>
                    <TabsContent value='details' className='space-y-4'>
                        <LoginDetails />
                    </TabsContent>
                    <TabsContent value='members'>
                        <ContactMembers />
                    </TabsContent>
                </Tabs>
            </LayoutBody>
        </Layout>
    );
}

export default Profile;

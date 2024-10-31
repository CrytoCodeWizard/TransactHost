import { useTranslation } from 'react-i18next';
import {
    IconChartHistogram,
    IconShoppingCart,
    IconBell
} from '@tabler/icons-react'

import { Button } from '@/components/Button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import UserNav from '@/components/UserNav';
import {
    Layout,
    LayoutBody,
    LayoutHeader
} from '@/components/common/Layout';
import Overview from './components/Overview';
import RecentOrders from './components/RecentOrders';

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <LayoutHeader>
                <div className='flex flex-auto justify-between items-center'>
                    <div className="flex flex-auto justify-between items-center pl-2 pr-6">
                        <div className="flex flex-row items-center">
                            <IconChartHistogram size={20} />
                            <p className="text-xl px-2">{t('dashboard')}</p>
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
                    defaultValue='overview'
                    className='space-y-6'>
                    <TabsList className='max-sm:grid'>
                        <TabsTrigger value='overview' className='w-full'>
                            {t('overview')}
                        </TabsTrigger>
                        <TabsTrigger value='analytics'>
                            {t('analytics')}
                        </TabsTrigger>
                        <TabsTrigger value='reports'>
                            {t('reports')}
                            <div className="w-5 h-5 flex items-center justify-center bg-secondary rounded-md ml-2">
                                2
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value='notifications'>
                            {t('notifications')}
                            <div className="w-5 h-5 flex items-center justify-center bg-secondary rounded-md ml-2">
                                3
                            </div>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value='overview' className='space-y-4'>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-lg font-medium'>
                                        {t('total_orders')}
                                    </CardTitle>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.05078 2.05078H4.05078L6.71078 14.4708C6.80836 14.9256 7.06145 15.3323 7.42649 15.6206C7.79153 15.909 8.24569 16.0611 8.71078 16.0508H18.4908C18.946 16.05 19.3873 15.8941 19.7418 15.6086C20.0964 15.3232 20.3429 14.9253 20.4408 14.4808L22.0908 7.05078H5.12078" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        $45,231.89
                                    </div>
                                    <p className='text-xs text-muted-foreground'>
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-lg font-medium'>
                                        {t('partners')}
                                    </CardTitle>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.0002 10.9992C13.5707 10.4251 13.0228 9.95007 12.3936 9.60631C11.7645 9.26255 11.0687 9.05813 10.3535 9.00691C9.63841 8.9557 8.92061 9.05888 8.24885 9.30947C7.5771 9.56005 6.96709 9.95218 6.4602 10.4592L3.4602 13.4592C2.54941 14.4023 2.04544 15.6653 2.05683 16.9763C2.06822 18.2872 2.59407 19.5413 3.52111 20.4683C4.44815 21.3954 5.70221 21.9212 7.01319 21.9326C8.32418 21.944 9.58719 21.44 10.5302 20.5292L12.2402 18.8192" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </CardHeader>
                                <CardContent className='text-2xl font-bold'>
                                    <div className="text-2xl font-bold">
                                        +2350
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-lg font-medium'>
                                        {t('products')}
                                    </CardTitle>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.28906 7L11.9991 12L20.7091 7" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 22V12" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +12,234
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-lg font-medium'>
                                        {t('users')}
                                    </CardTitle>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22 21.0009V19.0009C21.9993 18.1146 21.7044 17.2536 21.1614 16.5532C20.6184 15.8527 19.8581 15.3524 19 15.1309" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +573
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
                            <Card className='col-span-1 lg:col-span-4'>
                                <CardHeader>
                                    <CardTitle>
                                        {t('overview')}
                                    </CardTitle>
                                    <CardContent className='pl-2'>
                                        <Overview />
                                    </CardContent>
                                </CardHeader>
                            </Card>
                            <Card className='col-span-1 lg:col-span-3'>
                                <CardHeader>
                                    <CardTitle>
                                        {t('recent_orders')}
                                    </CardTitle>
                                    <CardDescription>
                                        We made 265 orders this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentOrders />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value='analytics' className='space-y-4'>
                    </TabsContent>
                    <TabsContent value='reports' className='space-y-4'>
                    </TabsContent>
                    <TabsContent value='notifications' className='space-y-4'>
                    </TabsContent>
                </Tabs>
            </LayoutBody>
        </Layout>
    )
}

export default Dashboard;
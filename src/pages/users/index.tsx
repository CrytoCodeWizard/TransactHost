import {
  IconUsers,
  IconShoppingCart,
  IconBell
} from '@tabler/icons-react'
import { useTranslation } from 'react-i18next';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Layout, LayoutBody, LayoutHeader } from '@/components/common/Layout';
import UserNav from '@/components/UserNav';

import DataTable from "./components/DataTable";
import users from "./data/users";
import userColumns from "./components/columns";

const Users = () => {
  const { t } = useTranslation();
  const userList = userColumns();

  return (
    <Layout>
      <LayoutHeader>
        <div className='flex flex-auto justify-between items-center'>
          <div className="flex flex-auto justify-between items-center pl-2 pr-6">
            <div className="flex flex-row items-center">
              <IconUsers size={20} />
              <p className="text-xl px-2">{t('users')}</p>
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
        <div className='flex flex-row justify-between w-full items-center'>
          <DataTable data={users} columns={userList} />
        </div>
      </LayoutBody>
    </Layout>
  )
}

export default Users;

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
  },
]

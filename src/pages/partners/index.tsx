import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import {
	IconUsers,
	IconAlien,
	IconShoppingCart,
	IconBell
} from '@tabler/icons-react'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalBody,
	ModalTitle,
	ModalTrigger,
} from "@/components/Modal";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Progress } from "@/components/ui/progress"
import { Layout, LayoutBody, LayoutHeader } from '@/components/common/Layout';
import UserNav from '@/components/UserNav';

import PartnerDataTable from "./components/partners_table/DataTable";
import partnerColumns from "./components/partners_table/columns";
import partnerData from "./data/partners_data/partners";

import RequestDataTable from "./components/request_table/DataTable";
import requestData from "./data/request_data/request";

import HistoryDataTable from "./components/history_table/DataTable";
import historyColumns from "./components/history_table/columns";
import historyData from "./data/history_data/history";


const Partners = () => {
	const { t } = useTranslation();
	const partnerList = partnerColumns();
	const historyList = historyColumns();
	const [progress, setProgress] = useState(50);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(10), 500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<Layout>
			<LayoutHeader className="border-b">
				<div className='flex flex-auto justify-between items-center'>
					<div className="flex flex-auto justify-between items-center pl-2 pr-6">
						<div className="flex flex-row items-center">
							<IconAlien size={20} />
							<p className="text-xl px-2">{t('partnerships')}</p>
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
					defaultValue='active'
					className='space-y-6'>
					<TabsList className="max-sm:grid">
						<TabsTrigger value="active">
							{t('active_connections')}
						</TabsTrigger>
						<TabsTrigger value="incoming">
							{t('incoming_requests')}
							<div className="w-5 h-5 flex items-center justify-center bg-secondary rounded-md ml-2">
								3
							</div>
						</TabsTrigger>
						<TabsTrigger value="outgoing">
							{t('outgoing_requests')}
							<div className="w-5 h-5 flex items-center justify-center bg-secondary rounded-md ml-2">
								2
							</div>
						</TabsTrigger>
					</TabsList>
					<TabsContent value="active" className="space-y-4">
						{/* <Modal>
							<ModalTrigger asChild>
								<Button variant='secondary'>Add Partner</Button>
							</ModalTrigger>
							<ModalContent>
								<ModalHeader>
									<ModalTitle>Contact request accepted</ModalTitle>
									<ModalDescription>
										You have successfully accepted the contact request from the partner below. You can now receive and place a new order from this partner.
									</ModalDescription>
								</ModalHeader>
								<ModalBody>
									<p className="text-sm">Partner information</p>
									<Card>
										<CardHeader className="font-semibold px-6 py-2">
											Vestibulum commodo Kft.
										</CardHeader>
										<CardContent className="">
											<div className="text-sm">12 - 34 - 567891</div>
											<div className="text-sm">12345678 - 1 - 12</div>
											<div className="text-sm">1111 Budapest, Minta utca 128. 16/A</div>
										</CardContent>
									</Card>
								</ModalBody>
								<ModalFooter className="mt-4">
									<Progress value={progress} />
								</ModalFooter>
							</ModalContent>
						</Modal> */}
						<PartnerDataTable data={partnerData} columns={partnerList} />
					</TabsContent>
					<TabsContent value="incoming" className="space-y-4">
						<div className="space-y-4 w-full px-5 py-6 border border-[#3A3A42] rounded-md">
							<p className="font-semibold text-xl">{t('incoming_contact_requests')}</p>
							<RequestDataTable data={requestData} type="incoming" />
							<p className="font-semibold text-xl">{t('history')}</p>
							<HistoryDataTable data={historyData} columns={historyList} />
						</div>
					</TabsContent>
					<TabsContent value="outgoing" className="space-y-4">
						<div className="space-y-4 w-full px-5 py-6 border border-[#3A3A42] rounded-md">
							<p className="font-semibold text-xl">Outgoing contact requests</p>
							<RequestDataTable data={requestData} type="outgoing" />
							<p className="font-semibold text-xl">History</p>
							<HistoryDataTable data={historyData} columns={historyList} />
						</div>
					</TabsContent>
				</Tabs>
			</LayoutBody>
		</Layout>
	)
}

export default Partners;

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

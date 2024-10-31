import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconChartHistogram,
  IconUserShield,
  IconUsers,
  IconCirclePlus,
  IconSquares,
  IconShoppingCart,
  IconFileBarcode,
  IconClipboardText,
  IconDiamond,
  IconSwitchHorizontal,
  IconHelp
} from '@tabler/icons-react';

export interface NavLink {
  title: string,
  label?: string,
  href: string,
  type: number,
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

const sideLinks = (): SideLink[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('new_order'),
      label: '',
      href: '',
      type: 1,
      icon: <IconCirclePlus size={22} />,
    },
    {
      title: t('dashboard'),
      label: '',
      href: '/',
      type: 1,
      icon: <IconChartHistogram size={22} />,
    },
    {
      title: t('partners'),
      label: '',
      href: '',
      type: 1,
      icon: <IconUserShield size={22} />,
      sub: [
        {
          title: t('partnerships'),
          label: '',
          href: '/partners',
          type: 1,
          icon: <></>,
        },
        {
          title: t('find_new_partner'),
          label: '',
          href: '/partnerships/find-new-partner',
          type: 1,
          icon: <></>,
        },
        {
          title: t('invitations_sent'),
          label: '',
          href: '/partnerships/invitations-sent',
          type: 1,
          icon: <></>,
        }
      ],
    },
    {
      title: t('products'),
      label: '',
      href: '',
      type: 1,
      icon: <IconSquares size={22} />,
    },
    {
      title: t('orders'),
      label: '',
      href: '/requests',
      type: 1,
      icon: <IconShoppingCart size={22} />
    },
    {
      title: t('accounts'),
      label: '',
      href: '/analysis',
      type: 1,
      icon: <IconFileBarcode size={22} />,
    },
    {
      title: t('other'),
      label: '',
      href: '',
      type: 1,
      icon: <></>,
    },
    {
      title: t('shipments'),
      label: '',
      href: '/extra-components',
      type: 1,
      icon: <IconClipboardText size={22} />,
    },
    {
      title: t('users'),
      label: '',
      href: '/users',
      type: 2,
      icon: <IconUsers size={22} />
    },
    {
      title: t('my_subscription'),
      label: '',
      href: '/settings',
      type: 2,
      icon: <IconDiamond size={22} />,
    },
    {
      title: t('erp_sync_log'),
      label: '',
      href: '/settings',
      type: 2,
      icon: <IconSwitchHorizontal size={22} />,
    },
    {
      title: t('help_center'),
      label: '',
      href: '/settings',
      type: 2,
      icon: <IconHelp size={22} />,
    }
  ]
}

export default sideLinks;
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar';
import { Button } from '@/components/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';

const UserNav = () => {
    const { i18n, t } = useTranslation();
    const { user, logout } = useAuth();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex flex-row border-l px-2'>
                <Button variant='ghost' className='relative h-8 w-8 rounded-full mx-3'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='https://ca.slack-edge.com/T06CTUX4SPP-U06CZARGGDA-beb47e3c720f-512' alt='avatar image' />
                    </Avatar>
                </Button>
                <div className="flex flex-col justify-start items-start space-y-1 max-sm:hidden">
                    <p className="text-sm font-medium leading-none">
                        {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {t(user?.roles?.[0] || 'user')}
                    </p>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 bg-popover-foreground' align='end' forceMount>
                <DropdownMenuItem className="font-normal text-white cursor-pointer">
                    <Link to='/profile'>{t('profile_settings')}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className='border' />
                <DropdownMenuGroup>
                    <DropdownMenuItem className='text-white cursor-pointer' onClick={() => changeLanguage('hu')}>
                        Hungarian
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-white cursor-pointer' onClick={() => changeLanguage('en')}>
                        English
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className='border' />
                <DropdownMenuItem className='text-white cursor-pointer' onClick={logout}>
                    {t('log_out')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNav;
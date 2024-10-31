import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar';

const RecentOrders = () => {
    return (
        <div className='space-y-8'>
            <div className="flex items-center">
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='' alt='Avatar'/>
                    <AvatarFallback>
                        MP
                    </AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                  <p className='text-sm font-medium leading-none'>
                    Minta Partner KFT.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    28/135 559 Ft/2024.03.12
                  </p>
                </div>
                <div className='ml-auto font-medium'>643 264 Ft</div>
            </div>
            <div className='flex items-center'>
              <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
                <AvatarImage src='/avatars/02.png' alt='Avatar' />
                <AvatarFallback>
                  MP
                </AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Minta Partner KFT.
                </p>
                <p className='text-sm text-muted-foreground'>
                  28/135 559 Ft/2024.03.12
                </p>
              </div>
              <div className='ml-auto font-medium'>247 574 Ft</div>
            </div>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/03.png' alt='Avatar' />
                <AvatarFallback>
                  MP
                </AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Minta Partner KFT.
                </p>
                <p className='text-sm text-muted-foreground'>
                  28/135 559 Ft/2024.03.12
                </p>
              </div>
              <div className='ml-auto font-medium'>231 343 Ft</div>
            </div>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/04.png' alt='Avatar' />
                <AvatarFallback>
                  MP
                </AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Minta Partner KFT.
                </p>
                <p className='text-sm text-muted-foreground'>
                  28/135 559 Ft/2024.03.12
                </p>
              </div>
              <div className='ml-auto font-medium'>
                132 932 Ft
              </div>
            </div>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/05.png' alt='Avatar' />
                <AvatarFallback>
                  MP
                </AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Minta Partner KFT.
                </p>
                <p className='text-sm text-muted-foreground'>
                  28/135 559 Ft/2024.03.12
                </p>
              </div>
              <div className='ml-auto font-medium'>342 532 Ft</div>
            </div>
        </div>
    )
}

export default RecentOrders;
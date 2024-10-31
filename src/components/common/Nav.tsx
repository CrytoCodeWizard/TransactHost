import { Link } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";
import { Button, buttonVariants } from '@/components/Button';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import useCheckActiveNav from '@/hooks/useCheckActiveNav';
import { SideLink } from "@/data/sideLinks";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean,
  links: SideLink[],
  closeNav: () => void
}

interface NavLinkProps extends SideLink {
  subLink?: boolean,
  closeNav: () => void
}

const Nav = ({
  links,
  isCollapsed,
  className,
  closeNav
}: NavProps) => {
  const renderLink = ({ sub, ...rest }: SideLink) => {
    if (rest.title === 'Other') {
      return (
        <>
          <DropdownMenuSeparator className="border w-11/12 m-auto my-6" />
          {
            !isCollapsed && (
              <div className="text-base px-2 text-gray-500 mx-4 my-2">
                Other
              </div>
            )
          }
        </>
      )
    }
    if (rest.title === 'Egyéb') {
      return (
        <>
          <DropdownMenuSeparator className="border w-11/12 m-auto my-6" />
          {
            !isCollapsed && (
              <div className="text-base px-2 text-gray-500 mx-4 my-2">
                Egyéb
              </div>
            )
          }
        </>
      )
    }
    const key = `${rest.title}-${rest.href}`
    if (isCollapsed && sub)
      return (
        <NavLinkIconDropdown
          {...rest}
          sub={sub}
          key={key}
          closeNav={closeNav}
        />
      )

    if (isCollapsed)
      return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />

    if (sub)
      return (
        <NavLinkDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />
      )

    return <NavLink {...rest} key={key} closeNav={closeNav} />
  }

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        'group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none',
        className
      )}
    >
      <TooltipProvider delayDuration={0}>
        <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
          {links.map(renderLink)}
        </nav>
      </TooltipProvider>
    </div>
  )
}

const NavLink = ({
  title,
  icon,
  label,
  href,
  closeNav,
  subLink = false,
}: NavLinkProps) => {
  const { checkActiveNav } = useCheckActiveNav();

  return (
    <Link
      to={href}
      onClick={closeNav}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? 'secondary' : 'ghost',
          size: 'sm',
        }),
        'h-10 justify-start text-wrap rounded-md px-3 mx-4',
        subLink && 'h-10 w-full mr-3 px-2'
      )}
      aria-current={checkActiveNav(href) ? 'page' : undefined}
    >
      <div className='mr-2'>{icon}</div>
      <div className="text-base">
        {title}
      </div>
      {label && (
        <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
          {label}
        </div>
      )}
    </Link>
  )
}

const NavLinkDropdown = ({ title, icon, label, sub, closeNav }: NavLinkProps) => {
  const { checkActiveNav } = useCheckActiveNav();

  // If one of child element is active
  const isChildActive = !!sub?.find((s) => checkActiveNav(s.href))

  return (
    <Collapsible defaultOpen={isChildActive}>
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'group h-12 w- justify-start rounded-md mx-4 px-3'
        )}
      >
        <div className='mr-2'>{icon}</div>
        <div className="text-base">
          {title}
        </div>
        {label && (
          <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
            {label}
          </div>
        )}
        <span
          className={cn(
            'ml-auto transition-all group-data-[state="open"]:-rotate-180'
          )}
        >
          <IconChevronDown stroke={1} />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className='collapsibleDropdown' asChild>
        <ul>
          {sub!.map((sublink) => (
            <li key={sublink.title} className='my-1 mx-4 ml-6 px-3'>
              <NavLink
                {...sublink}
                subLink
                closeNav={closeNav} />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

const NavLinkIcon = ({ title, icon, label, href }: NavLinkProps) => {
  const { checkActiveNav } = useCheckActiveNav();

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={cn(
            buttonVariants({
              variant: checkActiveNav(href) ? 'secondary' : 'ghost',
              size: 'icon'
            }),
            'h-12 w-12'
          )}>
          {icon}
          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {title}
        {label && (
          <span className="ml-auto text-muted-foreground">{label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  )
}

const NavLinkIconDropdown = ({ title, icon, label, sub }: NavLinkProps) => {
  const { checkActiveNav } = useCheckActiveNav();

  //  Open collapsible by default
  //  If one of child element is active
  const isChildActive = !!sub?.find((s) => checkActiveNav(s.href));

  return (
    <DropdownMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isChildActive ? 'secondary' : 'ghost'}
              size='icon'
              className="h-12 w-12">
              {icon}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="flex items-center gap-4">
          {title} {' '}
          {
            label && <span className="ml-auto text-muted-foreground">{label}</span>
          }
          <IconChevronDown
            size={18}
            className="-rotate-90 text-muted-foreground" />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent
        side="right"
        align="start"
        sideOffset={4}
        className="bg-background">
        <DropdownMenuLabel className="text-white">
          {title} {label ? `(${label})` : ''}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border" />
        {sub!.map(({ title, icon, label, href }) => (
          <DropdownMenuItem key={`${title}-${href}`}>
            <Link
              to={href}
              className={`${checkActiveNav(href) ? 'bg-background' : ''}`}>
              {icon} <span className="ml-2 max-w-52 text-white text-wrap">{title}</span>
              {label && <span className="ml-auto text-xs">{label}</span>}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Nav;
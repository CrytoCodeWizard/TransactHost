import * as React from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    fadedBelow?: boolean
    fixedHeight?: boolean
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
    ({className, fadedBelow = false, fixedHeight = false, ...props}, ref) => (
        <div
            ref={ref}
            className={cn(
                'relative flex h-full flex-col',
                fixedHeight && 'md:h-svh',
                className
            )}
            {...props}
            />
    )
);
Layout.displayName = 'Layout';

const LayoutHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex h-[var(--header-height)] flex-none items-center border-b gap-4 bg-background p-4 md:px-8',
            className
        )}
        {...props}
    />
))
LayoutHeader.displayName = 'LayoutHeader';

interface LayoutBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    fixedHeight?: boolean
}

const LayoutBody = React.forwardRef<HTMLDivElement, LayoutBodyProps>(
    ({ className, fixedHeight, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'flex-1 overflow-hidden px-4 py-6 md:px-16',
                fixedHeight && 'h-[calc(100%-var(--header-height))]',
                className
            )}
            {...props}
        />
    )
)
LayoutBody.displayName = 'LayoutBody';

export { Layout, LayoutHeader, LayoutBody };
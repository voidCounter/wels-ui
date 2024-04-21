import { cn } from '@/lib/utils';
import React from 'react';
interface SideNavItemProps {
    className?: string;
    itemTitle: string;
    children?: React.ReactNode;
}
export const SideNavItem = ({
    className,
    itemTitle = 'NavItem',
}: SideNavItemProps) => {
    return (
        <div className={cn(`flex flex-col space-y-1`, className)}>
            <div className={`flex flex-row justify-between mx-4 mt-2 p-2`}>
                {itemTitle}
            </div>
        </div>
    );
};

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

interface SidebarProps {
    className?: string;
    children: React.ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
    const [isOpen, setOpen] = useState(false);
    const [status, setStatus] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
        setTimeout(() => setStatus(false), 500);
    };
    return (
        <nav
            className={cn(
                `relative hidden h-screen border-r pt-20 md:block transition-all duration-300`,
                status && 'duration-500',
                isOpen ? 'w-72' : 'w-[78px]',
                className
            )}
        >
            <ArrowLeft
                className={cn(
                    'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground duration-500',
                    !isOpen && 'rotate-180'
                )}
                onClick={handleToggle}
            />
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="mt-3 space-y-1">{children}</div>
                </div>
            </div>
        </nav>
    );
};

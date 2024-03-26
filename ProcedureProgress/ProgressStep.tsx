import * as React from 'react';
interface Props {
    icon: null | React.ReactElement;
    status: 'approved' | 'waiting' | 'processing' | 'cancelled';
    serialNo?: string;
    direction?: 'vertical' | 'horizontal';
    children: React.ReactNode;
}
const statusColor = {
    approved: {
        background: 'bg-success',
        foreground: 'text-success-foreground',
    },
    waiting: {
        background: 'bg-secondary',
        foreground: 'text-secondary-foreground',
    },
    cancelled: {
        background: 'bg-destructive',
        foreground: 'text-destructive-foreground',
    },
    processing: {
        background: 'bg-warning',
        foreground: 'text-warning-foreground',
    },
};

/** A component that displays a progress step.
 * @component
 * @param {object} props - The component props.
 * @param {string} [props.serialNo] - The serial number of the step.
 * @param {string} [props.status="processing"] - The status of the step.
 * @param {React.ReactNode} props.children - Write the name of the step.
 * @returns {JSX.Element} - The rendered component.
 */

export const ProgressStep = ({
    icon = null,
    status = 'processing',
    serialNo = '',
    direction = 'vertical',
    children,
}: Props): JSX.Element => {
    return direction == 'vertical' ? (
        <div className={`relative w-full flex`}>
            <div className="absolute flex justify-center items-center h-full">
                <div
                    className={`${statusColor[status].background} w-2 h-full relative`}
                ></div>
                <div
                    className={`rounded-full w-8 h-8 ${statusColor[status].background} ${statusColor[status].foreground} absolute flex items-center justify-center`}
                >
                    {serialNo}
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center pl-10 py-4">
                <div
                    className={`${statusColor[status].background} p-4 flex justify-center items-center rounded-full`}
                >
                    {icon &&
                        React.cloneElement(icon, {
                            className: `${statusColor[status].foreground}`,
                            size: '32',
                            strokeWidth: '1.5',
                        })}
                </div>
                <div className="text-base text-center">{children}</div>
            </div>
        </div>
    ) : (
        <div className="relative w-full flex h-full">
            <div className="absolute flex flex-col justify-center items-center w-full">
                <div
                    className={`${statusColor[status].background} w-full h-2 relative`}
                ></div>
                <div
                    className={`rounded-full w-8 h-8 ${statusColor[status].background} ${statusColor[status].foreground} absolute flex items-center justify-center`}
                >
                    {serialNo}
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center w-full pt-10 px-4">
                <div
                    className={`${statusColor[status].background} p-4 flex justify-center items-center rounded-full`}
                >
                    {icon &&
                        React.cloneElement(icon, {
                            className: `${statusColor[status].foreground}`,
                            size: '32',
                            strokeWidth: '1.5',
                        })}
                </div>
                <div className="text-base text-center">{children}</div>
            </div>
        </div>
    );
};

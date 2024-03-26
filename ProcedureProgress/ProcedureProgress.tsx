import { ProgressStep } from './ProgressStep';
import * as React from 'react';

interface Props {
    direction?: 'vertical' | 'horizontal' | null;
    showSerial?: boolean;
    children: React.ReactNode;
}
/**
 * ProcedureProgress Component
 *
 * This component represents a progress indicator that displays a series of steps.
 *
 * @component
 * @param {object} props - The props for the ProcedureProgress component.
 * @param {"vertical" | "horizontal" | null} [props.direction="vertical"] - The direction of the progress steps. Can be "vertical", "horizontal", or null.
 * @param {boolean} [props.showSerial=true] - Determines whether to display serial numbers for the progress steps.
 * @param {React.ReactNode} props.children - The progress steps to be displayed within the ProcedureProgress component.
 * @returns {JSX.Element} - The rendered ProcedureProgress component.
 */

export const ProcedureProgress = ({
    direction = 'vertical',
    showSerial = true,
    children,
}: Props): JSX.Element => {
    const renderedSteps = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type == ProgressStep) {
            const serialNo = showSerial ? `${index + 1}` : '';
            return React.cloneElement(child, {
                ...child.props,
                serialNo: serialNo,
                direction: direction,
            });
        }
        return null;
    });
    return (
        <div
            className={`flex ${
                direction == 'vertical' ? 'flex-col' : 'flex-row'
            } items-start`}
        >
            {renderedSteps}
        </div>
    );
};

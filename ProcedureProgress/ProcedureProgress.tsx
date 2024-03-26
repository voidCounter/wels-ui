import { ProgressStep } from "./ProgressStep";
import * as React from "react";

interface Props {
    direction?: "vertical" | "horizontal" | null;
    showSerial?: boolean;
    children: React.ReactNode;
}
export const ProcedureProgress = ({
    direction = "vertical",
    showSerial = true,
    children,
}: Props): JSX.Element => {
    const renderedSteps = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type == ProgressStep) {
            const serialNo = showSerial ? `${index + 1}` : "";
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
                direction == "vertical" ? "flex-col" : "flex-row"
            } items-start`}
        >
            {renderedSteps}
        </div>
    );
};

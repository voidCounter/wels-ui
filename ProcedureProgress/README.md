## ProcedureProgress Component

The `ProcedureProgress` component displays a series of progress steps in either a vertical or horizontal layout.

**Props:**

| Name       | Type                       | Default    | Description                                                                  | Required |
| ---------- | -------------------------- | ---------- | ---------------------------------------------------------------------------- | -------- |
| direction  | `vertical` \| `horizontal` | `vertical` | The direction of the progress steps. Can be `"vertical"` or `"horizontal"`.  | Optional |
| showSerial | `boolean`                  | `true`     | Determines whether to show the serial numbers for the progress steps.        | Optional |
| children   | `React.ReactNode`          |            | The progress steps to be displayed inside the `ProcedureProgress` component. | Required |

**Example Usage:**

```jsx
import { ProcedureProgress, ProgressStep } from "./components";

<ProcedureProgress direction="horizontal" showSerial={false}>
    <ProgressStep status="approved">Step 1: Approval</ProgressStep>
    <ProgressStep status="processing">Step 2: Processing</ProgressStep>
    <ProgressStep status="waiting">Step 3: Waiting for User Input</ProgressStep>
</ProcedureProgress>;
```

## ProgressStep Component

The `ProgressStep` component is used to display a progress step in a vertical or horizontal progression bar. It allows customization of the step's icon, status, serial number, and direction.

**Props:**

The `ProgressStep` component accepts the following props:
| Name | Type | Default | Description | Required |
|------------|-----------------------------|-------------|-----------------------------------------------------------------------------------------------------|----------|
| icon | `React.ReactElement` \| `null` | `null` | The icon to display for the step. | Optional |
| status | `approved` \| `waiting` \| `processing` \| `cancelled` | `processing` | The status of the step. | Required |
| serialNo | `string` | '' | The serial number of the step. | Optional |
| direction | `vertical` \| `horizontal` | `vertical` | The direction of the progress bar. | Optional |
| children | `React.ReactNode` | | The content to display for the step. | Required |

**Example Usage:**

> **Note:** Ensure that `ProgressStep` component is used as a child component of `ProcedureProgress` component to automatically generate serial numbers.

-   Using no icon

```jsx
<ProgressStep status="approved" serialNo="1">
    Step 1: Completed
</ProgressStep>
```

-   Using icon

```jsx
<ProgressStep icon={<CustomIcon />} status="waiting" serialNo="2">
    Step 2: In Progress
</ProgressStep>
```
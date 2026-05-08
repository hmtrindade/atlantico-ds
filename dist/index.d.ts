import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as TabsPrimitive from '@radix-ui/react-tabs';
export { default as tailwindPreset } from './tailwind-preset.js';
import { ClassValue } from 'clsx';

declare const atlButtonVariants: (props?: {
    typeButton?: "primary" | "secondary" | "critical" | "disabled" | "tretiary" | "standard";
    size?: "small" | "large";
    shape?: "square-radius" | "full-radius";
    style?: "filled" | "outline" | "text";
} & class_variance_authority_types.ClassProp) => string;
interface AtlButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">, VariantProps<typeof atlButtonVariants> {
    asChild?: boolean;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
    showText?: boolean;
}
declare const AtlButton: React.ForwardRefExoticComponent<AtlButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const atlIconButtonVariants: (props?: {
    variant?: "primary" | "standard";
    shape?: "none" | "circle" | "radius";
    state?: "disabled" | "enabled" | "hovered" | "pressed";
    size?: "small" | "large";
} & class_variance_authority_types.ClassProp) => string;
interface AtlIconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">, VariantProps<typeof atlIconButtonVariants> {
    icon: React.ElementType;
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
declare const AtlIconButton: React.ForwardRefExoticComponent<AtlIconButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const atlBadgeVariants: (props?: {
    type?: "success" | "alert" | "standard" | "processing" | "caution";
    size?: "small" | "medium";
} & class_variance_authority_types.ClassProp) => string;
interface AtlBadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof atlBadgeVariants> {
    badgeContent?: string | number;
    showText?: boolean;
}
declare const AtlBadge: React.ForwardRefExoticComponent<AtlBadgeProps & React.RefAttributes<HTMLSpanElement>>;

declare const atlCheckboxVariants: (props?: {
    size?: "small" | "large" | "medium";
    stateStyle?: "error" | "disabled" | "enabled" | "hovered";
} & class_variance_authority_types.ClassProp) => string;
interface AtlCheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, VariantProps<typeof atlCheckboxVariants> {
}
declare const AtlCheckbox: React.ForwardRefExoticComponent<AtlCheckboxProps & React.RefAttributes<HTMLButtonElement>>;

interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}
interface AtlBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    showBack?: boolean;
    onBack?: () => void;
    maxVisible?: number;
}
declare const AtlBreadcrumb: React.ForwardRefExoticComponent<AtlBreadcrumbProps & React.RefAttributes<HTMLElement>>;

interface AtlCardProps extends React.HTMLAttributes<HTMLDivElement> {
    state?: "enabled" | "pressed-end" | "hovered";
}
declare const AtlCard: React.ForwardRefExoticComponent<AtlCardProps & React.RefAttributes<HTMLDivElement>>;
interface AtlCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    headline?: string;
    subheadline?: string;
    tertiaryText?: string;
    action?: React.ReactNode;
}
declare const AtlCardHeader: React.ForwardRefExoticComponent<AtlCardHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const AtlCardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AtlCardFullContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AtlCardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface AtlAutoCompleteOption {
    label: string;
    value: string;
}
interface AtlAutoCompleteProps {
    label?: string;
    helpText?: string;
    placeholder?: string;
    isRequired?: boolean;
    showOptional?: boolean;
    showTooltip?: boolean;
    tooltipText?: string;
    options?: AtlAutoCompleteOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    onInputChange?: (text: string) => void;
    state?: "enable" | "hovered" | "focused" | "error" | "disabled";
    size?: "large" | "small";
    className?: string;
}
declare const AtlAutoComplete: React.ForwardRefExoticComponent<AtlAutoCompleteProps & React.RefAttributes<HTMLDivElement>>;

interface AtlDatePickerProps {
    /** Single date mode */
    value?: Date;
    onChange?: (date: Date) => void;
    /** Range mode */
    mode?: "single" | "range";
    rangeStart?: Date;
    rangeEnd?: Date;
    onRangeChange?: (start: Date | undefined, end: Date | undefined) => void;
    className?: string;
}
declare const AtlDatePicker: React.ForwardRefExoticComponent<AtlDatePickerProps & React.RefAttributes<HTMLDivElement>>;

interface AtlCircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "large" | "small";
    showText?: boolean;
    text?: string;
}
declare const AtlCircularProgress: React.ForwardRefExoticComponent<AtlCircularProgressProps & React.RefAttributes<HTMLDivElement>>;

interface AtlLoadTimesProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const AtlLoadTimes: React.ForwardRefExoticComponent<AtlLoadTimesProps & React.RefAttributes<HTMLDivElement>>;

declare const atlRadioVariants: (props?: {
    size?: "small" | "large" | "medium";
    stateStyle?: "error" | "disabled" | "enabled" | "hovered";
} & class_variance_authority_types.ClassProp) => string;
interface AtlRadioButtonProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, VariantProps<typeof atlRadioVariants> {
}
declare const AtlRadioButton: React.ForwardRefExoticComponent<AtlRadioButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const AtlRadioGroup: React.ForwardRefExoticComponent<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>>;

interface AtlSelectOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
interface AtlSelectProps {
    label?: string;
    helpText?: string;
    placeholder?: string;
    isRequired?: boolean;
    showOptional?: boolean;
    showTooltip?: boolean;
    tooltipText?: string;
    options?: AtlSelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    state?: "enable" | "hovered" | "focused" | "disabled" | "error";
    size?: "large" | "small";
    className?: string;
}
declare const AtlSelect: React.ForwardRefExoticComponent<AtlSelectProps & React.RefAttributes<HTMLDivElement>>;

declare const atlSelectItemVariants: (props?: {
    state?: "disabled" | "selected" | "enabled" | "hovered";
    size?: "Large" | "Small";
} & class_variance_authority_types.ClassProp) => string;
interface AtlSelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof atlSelectItemVariants> {
    icon?: React.ReactNode;
    label?: string;
}
declare const AtlSelectItem: React.ForwardRefExoticComponent<AtlSelectItemProps & React.RefAttributes<HTMLButtonElement>>;

interface AtlSelectListItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
interface AtlSelectListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
    items: AtlSelectListItem[];
    selectedValue?: string;
    onSelect?: (value: string) => void;
    size?: "Large" | "Small";
}
declare const AtlSelectList: React.ForwardRefExoticComponent<AtlSelectListProps & React.RefAttributes<HTMLDivElement>>;

interface AtlSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: "large" | "small";
    state?: "enabled" | "hovered" | "disabled";
}
declare const AtlSwitch: React.ForwardRefExoticComponent<AtlSwitchProps & React.RefAttributes<HTMLButtonElement>>;

interface AtlStepperStep {
    label: string;
    helpText?: string;
}
interface AtlStepperProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: AtlStepperStep[];
    currentStep: number;
    orientation?: "horizontal" | "vertical";
    size?: "large" | "small";
    showText?: boolean;
    showHelpText?: boolean;
    showLine?: boolean;
}
declare const AtlStepper: React.ForwardRefExoticComponent<AtlStepperProps & React.RefAttributes<HTMLDivElement>>;

declare const AtlTabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const AtlTabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface AtlTabTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
    icon?: React.ElementType;
}
declare const AtlTabTrigger: React.ForwardRefExoticComponent<AtlTabTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AtlTabContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface AtlTextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
    label?: string;
    helpText?: string;
    showOptional?: boolean;
    showTooltip?: boolean;
    tooltipText?: string;
    isRequired?: boolean;
    showCount?: boolean;
    maxLength?: number;
    state?: "enabled" | "hovered" | "focused" | "error" | "disabled";
}
declare const AtlTextArea: React.ForwardRefExoticComponent<AtlTextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const atlSkeletonVariants: (props?: {
    variant?: "text" | "circular" | "rectangular" | "rounded";
    position?: "start" | "end";
} & class_variance_authority_types.ClassProp) => string;
interface AtlSkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof atlSkeletonVariants> {
}
declare const AtlSkeleton: React.ForwardRefExoticComponent<AtlSkeletonProps & React.RefAttributes<HTMLDivElement>>;

interface AtlPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    title: string;
    description?: string;
    showBreadcrumb?: boolean;
    breadcrumbItems?: BreadcrumbItem[];
    showSearch?: boolean;
    onSearch?: (query: string) => void;
    type?: "action" | "chips" | "stepper" | "text";
    actions?: React.ReactNode;
}
declare const AtlPageHeader: React.ForwardRefExoticComponent<AtlPageHeaderProps & React.RefAttributes<HTMLDivElement>>;

interface AtlTextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    helpText?: string;
    showOptional?: boolean;
    showTooltip?: boolean;
    tooltipText?: string;
    isRequired?: boolean;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
    state?: "enable" | "hovered" | "focused" | "disabled" | "error" | "no-editable";
    fieldSize?: "large" | "small";
}
declare const AtlTextField: React.ForwardRefExoticComponent<AtlTextFieldProps & React.RefAttributes<HTMLInputElement>>;

declare const atlChipVariants: (props?: {
    chipType?: "critical" | "disabled" | "standart" | "neutral";
    chipStyle?: "outline" | "filed";
    size?: "small" | "large";
    state?: "disabled" | "selected" | "enabled" | "hovered" | "pressed";
} & class_variance_authority_types.ClassProp) => string;
interface AtlChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">, VariantProps<typeof atlChipVariants> {
    label?: string;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
    showBadge?: boolean;
    badgeContent?: string | number;
    showImage?: boolean;
    imageUrl?: string;
    clickable?: boolean;
}
declare const AtlChip: React.ForwardRefExoticComponent<AtlChipProps & React.RefAttributes<HTMLButtonElement>>;

interface AtlInputCounterProps {
    label?: string;
    helpText?: string;
    showOptional?: boolean;
    showTooltip?: boolean;
    tooltipText?: string;
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    state?: "enable" | "hovered" | "focused" | "disabled";
    size?: "large" | "small";
    className?: string;
}
declare const AtlInputCounter: React.ForwardRefExoticComponent<AtlInputCounterProps & React.RefAttributes<HTMLDivElement>>;

declare const atlToastVariants: (props?: {
    toastType?: "error" | "success" | "critical" | "alert" | "info";
    size?: "small" | "large";
} & class_variance_authority_types.ClassProp) => string;
interface AtlToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof atlToastVariants> {
    title?: string;
    text?: string;
    showText?: boolean;
}
declare const AtlToast: React.ForwardRefExoticComponent<AtlToastProps & React.RefAttributes<HTMLDivElement>>;

declare const atlToastBannerVariants: (props?: {
    toastType?: "error" | "success" | "critical" | "alert" | "info";
    size?: "small" | "large" | "mobile";
} & class_variance_authority_types.ClassProp) => string;
interface AtlToastBannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof atlToastBannerVariants> {
    title?: string;
    text?: string;
    showText?: boolean;
    showButton?: boolean;
    buttonLabel?: string;
    onButtonClick?: () => void;
    showClose?: boolean;
    onClose?: () => void;
}
declare const AtlToastBanner: React.ForwardRefExoticComponent<AtlToastBannerProps & React.RefAttributes<HTMLDivElement>>;

declare const containerVariants: (props?: {
    toggleType?: "primary" | "tretiary" | "standard" | "secundary";
    behavior?: "hug-contents" | "fill-container";
} & class_variance_authority_types.ClassProp) => string;
interface AtlToggleTabItem {
    label: string;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
    showLabel?: boolean;
}
interface AtlToggleTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, VariantProps<typeof containerVariants> {
    items: AtlToggleTabItem[];
    selected?: string;
    onChange?: (value: string) => void;
    size?: "large" | "small";
}
declare const AtlToggleTabs: React.ForwardRefExoticComponent<AtlToggleTabsProps & React.RefAttributes<HTMLDivElement>>;

interface AtlTooltipProps {
    text: string;
    className?: string;
}
declare const AtlTooltip: React.FC<AtlTooltipProps>;

interface AtlPaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}
declare const AtlPagination: React.ForwardRefExoticComponent<AtlPaginationProps & React.RefAttributes<HTMLDivElement>>;

interface AtlTypeFileProps extends React.HTMLAttributes<HTMLSpanElement> {
    type: ".csv" | ".doc" | ".img" | ".pdf";
    size?: number;
}
declare const AtlTypeFile: React.ForwardRefExoticComponent<AtlTypeFileProps & React.RefAttributes<HTMLSpanElement>>;

type AtlBrandType = "ColorTrinus" | "NeutralTrinus" | "ColorNeo" | "NeutralNeo" | "ColorTrinusBank" | "NeutralTrinusBank";
type AtlBrandSize = "full" | "icon";
interface AtlBrandProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    type?: AtlBrandType;
    size?: AtlBrandSize;
}
declare const AtlBrand: React.ForwardRefExoticComponent<AtlBrandProps & React.RefAttributes<HTMLImageElement>>;

type SortDirection = "asc" | "desc" | null;
interface AtlTableColumn<T = any> {
    /** Unique key matching data field */
    key: string;
    /** Header label */
    label: string;
    /** Column width in px (default auto) */
    width?: number;
    /** Enable sorting on this column */
    sortable?: boolean;
    /** Custom cell render */
    render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
    /** Custom header render */
    renderHeader?: () => React.ReactNode;
    /** Alignment */
    align?: "left" | "center" | "right";
    /** Optional header icon */
    icon?: React.ElementType;
}
interface AtlTableProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
    columns: AtlTableColumn<T>[];
    data: T[];
    /** Show totals row */
    showTotais?: boolean;
    /** Totals content slot */
    totalsContent?: React.ReactNode;
    /** Show pagination */
    showPagination?: boolean;
    /** Show horizontal scroll bar */
    showScroll?: boolean;
    /** Show footer area */
    showFooter?: boolean;
    /** Show row-count selector */
    showRowCount?: boolean;
    /** Current page (1-indexed) */
    currentPage?: number;
    /** Total pages */
    totalPages?: number;
    /** Rows per page */
    rowsPerPage?: number;
    /** Row-count options */
    rowsPerPageOptions?: number[];
    /** Page change handler */
    onPageChange?: (page: number) => void;
    /** Sort change handler */
    onSortChange?: (key: string, direction: SortDirection) => void;
    /** Rows per page change */
    onRowsPerPageChange?: (count: number) => void;
    /** Current sort state */
    sortKey?: string;
    /** Current sort direction */
    sortDirection?: SortDirection;
    /** Row actions renderer (renders in last column) */
    renderRowActions?: (row: T, rowIndex: number) => React.ReactNode;
    /** Row key extractor */
    rowKey?: (row: T, index: number) => string | number;
    /** Empty state message */
    emptyMessage?: string;
}
declare const AtlTable: <T extends Record<string, any>>(props: AtlTableProps<T> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement;

declare function cn(...inputs: ClassValue[]): string;

export { AtlAutoComplete, type AtlAutoCompleteOption, type AtlAutoCompleteProps, AtlBadge, type AtlBadgeProps, AtlBrand, type AtlBrandProps, type AtlBrandSize, type AtlBrandType, AtlBreadcrumb, type AtlBreadcrumbProps, AtlButton, type AtlButtonProps, AtlCard, AtlCardContent, AtlCardFooter, AtlCardFullContent, AtlCardHeader, type AtlCardHeaderProps, type AtlCardProps, AtlCheckbox, type AtlCheckboxProps, AtlChip, type AtlChipProps, AtlCircularProgress, type AtlCircularProgressProps, AtlDatePicker, type AtlDatePickerProps, AtlIconButton, type AtlIconButtonProps, AtlInputCounter, type AtlInputCounterProps, AtlLoadTimes, type AtlLoadTimesProps, AtlPageHeader, type AtlPageHeaderProps, AtlPagination, type AtlPaginationProps, AtlRadioButton, type AtlRadioButtonProps, AtlRadioGroup, AtlSelect, AtlSelectItem, type AtlSelectItemProps, AtlSelectList, type AtlSelectListItem, type AtlSelectListProps, type AtlSelectOption, type AtlSelectProps, AtlSkeleton, type AtlSkeletonProps, AtlStepper, type AtlStepperProps, type AtlStepperStep, AtlSwitch, type AtlSwitchProps, AtlTabContent, AtlTabTrigger, type AtlTabTriggerProps, AtlTable, type AtlTableColumn, type AtlTableProps, AtlTabs, AtlTabsList, AtlTextArea, type AtlTextAreaProps, AtlTextField, type AtlTextFieldProps, AtlToast, AtlToastBanner, type AtlToastBannerProps, type AtlToastProps, type AtlToggleTabItem, AtlToggleTabs, type AtlToggleTabsProps, AtlTooltip, type AtlTooltipProps, AtlTypeFile, type AtlTypeFileProps, type BreadcrumbItem, type SortDirection, atlBadgeVariants, atlButtonVariants, atlCheckboxVariants, atlChipVariants, atlIconButtonVariants, atlRadioVariants, atlSelectItemVariants, atlSkeletonVariants, atlToastBannerVariants, atlToastVariants, containerVariants as atlToggleTabsVariants, cn };

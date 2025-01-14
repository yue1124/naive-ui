import { Ref } from 'vue';
import { ValidateError, RuleItem, ValidateOption, ValidateMessages } from 'async-validator';
import { FormSetupProps } from './Form';
export interface FormRules {
    [path: string]: FormRules | FormItemRule | FormItemRule[];
}
declare type SetRule<T, R> = T extends (rule: any, ...args: infer K) => infer P ? (rule: R, ...args: K) => P : never;
export declare type FormItemRuleValidatorParams = Parameters<SetRule<NonNullable<RuleItem['validator']>, FormItemRule>>;
export declare type FormItemRuleValidator = (...args: FormItemRuleValidatorParams) => boolean | Error | Error[] | Promise<void> | undefined;
export declare type FormItemRuleAsyncValidator = (...args: FormItemRuleValidatorParams) => Promise<void> | undefined;
export declare type FormItemRule = Omit<RuleItem, 'validator' | 'asyncValidator'> & {
    key?: string;
    trigger?: ValidationTrigger | string | Array<ValidationTrigger | string>;
    validator?: FormItemRuleValidator;
    asyncValidator?: FormItemRuleAsyncValidator;
};
export interface FormItemValidateOptions {
    trigger?: ValidationTrigger | string;
    callback?: ValidateCallback;
    shouldRuleBeApplied?: ShouldRuleBeApplied;
    options?: ValidateOption;
}
export declare type FormItemInternalValidate = (trigger: ValidationTrigger | string | null | undefined, shouldRuleBeApplied?: ShouldRuleBeApplied, options?: ValidateOption) => Promise<{
    valid: boolean;
    errors?: ValidateError[];
}>;
export declare type FormItemValidate = ((options: FormItemValidateOptions) => Promise<void>) & ((trigger?: string, callback?: ValidateCallback) => Promise<void>);
export interface FormItemInst {
    validate: FormItemValidate;
    restoreValidation: () => void;
    path?: string;
    internalValidate: FormItemInternalValidate;
}
export declare type FormItemColRef = FormItemInst;
export declare type FormItemRowRef = FormItemInst;
export interface FormInjection {
    props: FormSetupProps;
    maxChildLabelWidthRef: Ref<number | undefined>;
    deriveMaxChildLabelWidth: (currentWidth: number) => void;
}
export declare type LabelAlign = 'left' | 'center' | 'right';
export declare type LabelPlacement = 'left' | 'top';
export declare type Size = 'small' | 'medium' | 'large';
export declare type ValidationTrigger = 'input' | 'change' | 'blur' | 'focus';
export declare type ShouldRuleBeApplied = (rule: FormItemRule) => boolean;
export declare type ValidateCallback = (errors?: ValidateError[]) => void;
export declare type FormValidateCallback = (errors?: ValidateError[][]) => void;
export declare type FormValidate = (callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) => Promise<void>;
export declare type FormValidationError = ValidateError[];
export interface FormInst {
    validate: FormValidate;
    restoreValidation: () => void;
}
export declare type FormValidationStatus = 'success' | 'error' | 'warning';
export interface FormValidateMessages extends ValidateMessages {
}
export {};

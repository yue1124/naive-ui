import { ExtractPropTypes } from 'vue';
import { useTheme } from '../../_mixins';
declare type themePropKeys = keyof typeof useTheme.props;
export declare type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>, Exclude<themePropKeys, 'themeOverrides'> | Extract<keyof T, `internal${string}`>>;
export declare type ExtractInternalPropTypes<T> = Partial<ExtractPropTypes<T>>;
export {};

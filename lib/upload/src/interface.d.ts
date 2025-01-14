import { Ref, CSSProperties } from 'vue';
import { ImageGroupProps } from '../../image';
import type { MergedTheme } from '../../_mixins';
import type { UploadTheme } from '../styles';
export interface FileInfo {
    id: string;
    name: string;
    percentage?: number;
    status: 'pending' | 'uploading' | 'finished' | 'removed' | 'error';
    url?: string | null;
    file?: File | null;
    thumbnailUrl?: string | null;
    type?: string | null;
}
export declare type FuncOrRecordOrUndef = Record<string, string> | (({ file }: {
    file: FileInfo;
}) => Record<string, string>) | undefined;
export declare type OnChange = (data: {
    file: FileInfo;
    fileList: FileInfo[];
    event: ProgressEvent | Event | undefined;
}) => void;
export declare type OnFinish = ({ file, event }: {
    file: FileInfo;
    event?: ProgressEvent;
}) => FileInfo | undefined;
export declare type OnRemove = (data: {
    file: FileInfo;
    fileList: FileInfo[];
}) => Promise<boolean> | boolean | any;
export declare type OnDownload = (file: FileInfo) => Promise<boolean> | boolean | any;
export interface UploadInternalInst {
    doChange: DoChange;
    XhrMap: Map<string, XMLHttpRequest>;
    onError: OnError | undefined;
    onFinish: OnFinish | undefined;
}
export declare type DoChange = (fileAfterChange: FileInfo, event?: ProgressEvent | Event, options?: {
    append?: boolean;
    remove?: boolean;
}) => void;
export declare type OnUpdateFileList = (fileList: FileInfo[]) => void;
export interface UploadInjection {
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<UploadTheme>>;
    showCancelButtonRef: Ref<boolean>;
    showRemoveButtonRef: Ref<boolean>;
    showDownloadButtonRef: Ref<boolean>;
    showRetryButtonRef: Ref<boolean>;
    showTriggerRef: Ref<boolean>;
    mergedFileListRef: Ref<FileInfo[]>;
    onRemoveRef: Ref<OnRemove | undefined>;
    onDownloadRef: Ref<OnDownload | undefined>;
    XhrMap: Map<string, XMLHttpRequest>;
    doChange: DoChange;
    showPreviewButtonRef: Ref<boolean>;
    onPreviewRef: Ref<OnPreview | undefined>;
    listTypeRef: Ref<ListType>;
    dragOverRef: Ref<boolean>;
    draggerInsideRef: {
        value: boolean;
    };
    fileListStyleRef: Ref<string | CSSProperties | undefined>;
    mergedDisabledRef: Ref<boolean>;
    maxReachedRef: Ref<boolean>;
    abstractRef: Ref<boolean>;
    imageGroupPropsRef: Ref<ImageGroupProps | undefined>;
    cssVarsRef: undefined | Ref<CSSProperties>;
    themeClassRef: undefined | Ref<string>;
    onRender: undefined | (() => void);
    submit: (fileId?: string) => void;
    getFileThumbnailUrl: (file: FileInfo) => Promise<string>;
    handleFileAddition: (files: FileList | null, e?: Event) => void;
    openOpenFileDialog: () => void;
}
export declare const uploadInjectionKey: import("vue").InjectionKey<UploadInjection>;
export interface XhrHandlers {
    handleXHRLoad: (e: ProgressEvent) => void;
    handleXHRAbort: (e: ProgressEvent) => void;
    handleXHRProgress: (e: ProgressEvent) => void;
    handleXHRError: (e: ProgressEvent) => void;
}
export interface UploadInst {
    openOpenFileDialog: () => void;
    submit: () => void;
    clear: () => void;
}
export declare type OnBeforeUpload = (data: {
    file: FileInfo;
    fileList: FileInfo[];
}) => Promise<unknown>;
export declare type ListType = 'text' | 'image' | 'image-card';
export declare type OnPreview = (file: FileInfo) => void;
export declare type CreateThumbnailUrl = (file: File) => Promise<string>;
export interface CustomRequestOptions {
    file: FileInfo;
    action?: string;
    withCredentials?: boolean;
    data?: FuncOrRecordOrUndef;
    headers?: FuncOrRecordOrUndef;
    onProgress: (e: {
        percent: number;
    }) => void;
    onFinish: () => void;
    onError: () => void;
}
export declare type CustomRequest = (options: CustomRequestOptions) => void;
export declare type OnError = ({ file, event }: {
    file: FileInfo;
    event?: ProgressEvent;
}) => FileInfo | undefined;

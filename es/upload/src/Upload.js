var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { h, defineComponent, computed, provide, toRef, ref, Fragment, Teleport, nextTick } from 'vue';
import { createId } from 'seemly';
import { useMergedState } from 'vooks';
import { useConfig, useTheme, useFormItem, useThemeClass } from '../../_mixins';
import { warn, call, throwError } from '../../_utils';
import { uploadLight } from '../styles';
import { uploadDraggerKey } from './UploadDragger';
import { uploadInjectionKey } from './interface';
import { createImageDataUrl } from './utils';
import NUploadTrigger from './UploadTrigger';
import NUploadFileList from './UploadFileList';
import style from './styles/index.cssr';
/**
 * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
 */
function createXhrHandlers(inst, file, XHR) {
    const { doChange, XhrMap } = inst;
    let percentage = 0;
    function handleXHRError(e) {
        var _a;
        let fileAfterChange = Object.assign({}, file, {
            status: 'error',
            percentage
        });
        XhrMap.delete(file.id);
        fileAfterChange =
            ((_a = inst.onError) === null || _a === void 0 ? void 0 : _a.call(inst, { file: fileAfterChange, event: e })) || fileAfterChange;
        doChange(fileAfterChange, e);
    }
    function handleXHRLoad(e) {
        var _a;
        if (XHR.status < 200 || XHR.status >= 300) {
            handleXHRError(e);
            return;
        }
        let fileAfterChange = Object.assign({}, file, {
            status: 'finished',
            percentage,
            file: null
        });
        XhrMap.delete(file.id);
        fileAfterChange =
            ((_a = inst.onFinish) === null || _a === void 0 ? void 0 : _a.call(inst, { file: fileAfterChange, event: e })) || fileAfterChange;
        doChange(fileAfterChange, e);
    }
    return {
        handleXHRLoad,
        handleXHRError,
        handleXHRAbort(e) {
            const fileAfterChange = Object.assign({}, file, {
                status: 'removed',
                file: null,
                percentage
            });
            XhrMap.delete(file.id);
            doChange(fileAfterChange, e);
        },
        handleXHRProgress(e) {
            const fileAfterChange = Object.assign({}, file, {
                status: 'uploading'
            });
            if (e.lengthComputable) {
                const progress = Math.ceil((e.loaded / e.total) * 100);
                fileAfterChange.percentage = progress;
                percentage = progress;
            }
            doChange(fileAfterChange, e);
        }
    };
}
function customSubmitImpl(options) {
    const { inst, file, data, headers, withCredentials, action, customRequest } = options;
    const { doChange } = options.inst;
    let percentage = 0;
    customRequest({
        file,
        data,
        headers,
        withCredentials,
        action,
        onProgress(event) {
            const fileAfterChange = Object.assign({}, file, {
                status: 'uploading'
            });
            const progress = event.percent;
            fileAfterChange.percentage = progress;
            percentage = progress;
            doChange(fileAfterChange);
        },
        onFinish() {
            var _a;
            let fileAfterChange = Object.assign({}, file, {
                status: 'finished',
                percentage,
                file: null
            });
            fileAfterChange =
                ((_a = inst.onFinish) === null || _a === void 0 ? void 0 : _a.call(inst, { file: fileAfterChange })) || fileAfterChange;
            doChange(fileAfterChange);
        },
        onError() {
            var _a;
            let fileAfterChange = Object.assign({}, file, {
                status: 'error',
                percentage
            });
            fileAfterChange =
                ((_a = inst.onError) === null || _a === void 0 ? void 0 : _a.call(inst, { file: fileAfterChange })) || fileAfterChange;
            doChange(fileAfterChange);
        }
    });
}
function registerHandler(inst, file, request) {
    const handlers = createXhrHandlers(inst, file, request);
    request.onabort = handlers.handleXHRAbort;
    request.onerror = handlers.handleXHRError;
    request.onload = handlers.handleXHRLoad;
    if (request.upload) {
        request.upload.onprogress = handlers.handleXHRProgress;
    }
}
function unwrapFunctionValue(data, file) {
    if (typeof data === 'function') {
        return data({ file });
    }
    if (data)
        return data;
    return {};
}
function setHeaders(request, headers, file) {
    const headersObject = unwrapFunctionValue(headers, file);
    if (!headersObject)
        return;
    Object.keys(headersObject).forEach((key) => {
        request.setRequestHeader(key, headersObject[key]);
    });
}
function appendData(formData, data, file) {
    const dataObject = unwrapFunctionValue(data, file);
    if (!dataObject)
        return;
    Object.keys(dataObject).forEach((key) => {
        formData.append(key, dataObject[key]);
    });
}
function submitImpl(inst, fieldName, file, { method, action, withCredentials, headers, data }) {
    const request = new XMLHttpRequest();
    inst.XhrMap.set(file.id, request);
    request.withCredentials = withCredentials;
    const formData = new FormData();
    appendData(formData, data, file);
    formData.append(fieldName, file.file);
    registerHandler(inst, file, request);
    if (action !== undefined) {
        request.open(method.toUpperCase(), action);
        setHeaders(request, headers, file);
        request.send(formData);
        const fileAfterChange = Object.assign({}, file, {
            status: 'uploading'
        });
        inst.doChange(fileAfterChange);
    }
}
const uploadProps = Object.assign(Object.assign({}, useTheme.props), { name: {
        type: String,
        default: 'file'
    }, accept: String, action: String, customRequest: Function, 
    // to be impl
    // directory: {
    //   type: Boolean,
    //   default: false
    // },
    method: {
        type: String,
        default: 'POST'
    }, multiple: Boolean, showFileList: {
        type: Boolean,
        default: true
    }, data: [Object, Function], headers: [Object, Function], withCredentials: Boolean, disabled: {
        type: Boolean,
        default: undefined
    }, onChange: Function, onRemove: Function, onFinish: Function, onError: Function, onBeforeUpload: Function, 
    /** currently of no usage */
    onDownload: Function, defaultUpload: {
        type: Boolean,
        default: true
    }, fileList: Array, 'onUpdate:fileList': [Function, Array], onUpdateFileList: [Function, Array], fileListStyle: [String, Object], defaultFileList: {
        type: Array,
        default: () => []
    }, showCancelButton: {
        type: Boolean,
        default: true
    }, showRemoveButton: {
        type: Boolean,
        default: true
    }, showDownloadButton: Boolean, showRetryButton: {
        type: Boolean,
        default: true
    }, showPreviewButton: {
        type: Boolean,
        default: true
    }, listType: {
        type: String,
        default: 'text'
    }, onPreview: Function, createThumbnailUrl: Function, abstract: Boolean, max: Number, showTrigger: {
        type: Boolean,
        default: true
    }, imageGroupProps: Object, inputProps: Object });
export default defineComponent({
    name: 'Upload',
    props: uploadProps,
    setup(props) {
        if (props.abstract && props.listType === 'image-card') {
            throwError('upload', 'when the list-type is image-card, abstract is not supported.');
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme('Upload', '-upload', style, uploadLight, props, mergedClsPrefixRef);
        const formItem = useFormItem(props);
        const maxReachedRef = computed(() => {
            const { max } = props;
            if (max !== undefined) {
                return mergedFileListRef.value.length >= max;
            }
            return false;
        });
        const uncontrolledFileListRef = ref(props.defaultFileList);
        const controlledFileListRef = toRef(props, 'fileList');
        const inputElRef = ref(null);
        const draggerInsideRef = {
            value: false
        };
        const dragOverRef = ref(false);
        const XhrMap = new Map();
        const mergedFileListRef = useMergedState(controlledFileListRef, uncontrolledFileListRef);
        function openOpenFileDialog() {
            var _a;
            (_a = inputElRef.value) === null || _a === void 0 ? void 0 : _a.click();
        }
        function handleFileInputChange(e) {
            const target = e.target;
            handleFileAddition(target.files, e);
            // May have bug! set to null?
            target.value = '';
        }
        function doUpdateFileList(files) {
            const { 'onUpdate:fileList': _onUpdateFileList, onUpdateFileList } = props;
            if (_onUpdateFileList)
                call(_onUpdateFileList, files);
            if (onUpdateFileList)
                call(onUpdateFileList, files);
            uncontrolledFileListRef.value = files;
        }
        function handleFileAddition(files, e) {
            if (!files || files.length === 0)
                return;
            const { onBeforeUpload } = props;
            let filesAsArray = props.multiple ? Array.from(files) : [files[0]];
            const { max } = props;
            if (max) {
                filesAsArray = filesAsArray.slice(0, max - mergedFileListRef.value.length);
            }
            void Promise.all(filesAsArray.map((file) => __awaiter(this, void 0, void 0, function* () {
                const fileInfo = {
                    id: createId(),
                    name: file.name,
                    status: 'pending',
                    percentage: 0,
                    file: file,
                    url: null,
                    type: file.type,
                    thumbnailUrl: null
                };
                if (!onBeforeUpload ||
                    (yield onBeforeUpload({
                        file: fileInfo,
                        fileList: mergedFileListRef.value
                    })) !== false) {
                    return fileInfo;
                }
                return null;
            })))
                .then((fileInfos) => __awaiter(this, void 0, void 0, function* () {
                let nextTickChain = Promise.resolve();
                fileInfos.forEach((fileInfo) => {
                    nextTickChain = nextTickChain.then(nextTick).then(() => {
                        fileInfo &&
                            doChange(fileInfo, e, {
                                append: true
                            });
                    });
                });
                return yield nextTickChain;
            }))
                .then(() => {
                if (props.defaultUpload) {
                    submit();
                }
            });
        }
        function submit(fileId) {
            const { method, action, withCredentials, headers, data, name: fieldName } = props;
            const filesToUpload = fileId !== undefined
                ? mergedFileListRef.value.filter((file) => file.id === fileId)
                : mergedFileListRef.value;
            const shouldReupload = fileId !== undefined;
            filesToUpload.forEach((file) => {
                const { status } = file;
                if (status === 'pending' || (status === 'error' && shouldReupload)) {
                    if (props.customRequest) {
                        customSubmitImpl({
                            inst: {
                                doChange,
                                XhrMap,
                                onFinish: props.onFinish,
                                onError: props.onError
                            },
                            file,
                            action,
                            withCredentials,
                            headers,
                            data,
                            customRequest: props.customRequest
                        });
                    }
                    else {
                        submitImpl({
                            doChange,
                            XhrMap,
                            onFinish: props.onFinish,
                            onError: props.onError
                        }, fieldName, file, {
                            method,
                            action,
                            withCredentials,
                            headers,
                            data
                        });
                    }
                }
            });
        }
        const doChange = (fileAfterChange, event, options = {
            append: false,
            remove: false
        }) => {
            const { append, remove } = options;
            const fileListAfterChange = Array.from(mergedFileListRef.value);
            const fileIndex = fileListAfterChange.findIndex((file) => file.id === fileAfterChange.id);
            if (append || remove || ~fileIndex) {
                if (append) {
                    fileListAfterChange.push(fileAfterChange);
                }
                else if (remove) {
                    fileListAfterChange.splice(fileIndex, 1);
                }
                else {
                    fileListAfterChange.splice(fileIndex, 1, fileAfterChange);
                }
                const { onChange } = props;
                if (onChange) {
                    onChange({
                        file: fileAfterChange,
                        fileList: fileListAfterChange,
                        event
                    });
                }
                doUpdateFileList(fileListAfterChange);
            }
            else if (process.env.NODE_ENV !== 'production') {
                warn('upload', 'File has no corresponding id in current file list.');
            }
        };
        function getFileThumbnailUrl(file) {
            return __awaiter(this, void 0, void 0, function* () {
                const { createThumbnailUrl } = props;
                return createThumbnailUrl
                    ? yield createThumbnailUrl(file.file)
                    : yield createImageDataUrl(file.file);
            });
        }
        const cssVarsRef = computed(() => {
            const { common: { cubicBezierEaseInOut }, self: { draggerColor, draggerBorder, draggerBorderHover, itemColorHover, itemColorHoverError, itemTextColorError, itemTextColorSuccess, itemTextColor, itemIconColor, itemDisabledOpacity, lineHeight, borderRadius, fontSize, itemBorderImageCardError, itemBorderImageCard } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-dragger-border': draggerBorder,
                '--n-dragger-border-hover': draggerBorderHover,
                '--n-dragger-color': draggerColor,
                '--n-font-size': fontSize,
                '--n-item-color-hover': itemColorHover,
                '--n-item-color-hover-error': itemColorHoverError,
                '--n-item-disabled-opacity': itemDisabledOpacity,
                '--n-item-icon-color': itemIconColor,
                '--n-item-text-color': itemTextColor,
                '--n-item-text-color-error': itemTextColorError,
                '--n-item-text-color-success': itemTextColorSuccess,
                '--n-line-height': lineHeight,
                '--n-item-border-image-card-error': itemBorderImageCardError,
                '--n-item-border-image-card': itemBorderImageCard
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('upload', undefined, cssVarsRef, props)
            : undefined;
        provide(uploadInjectionKey, {
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            showCancelButtonRef: toRef(props, 'showCancelButton'),
            showDownloadButtonRef: toRef(props, 'showDownloadButton'),
            showRemoveButtonRef: toRef(props, 'showRemoveButton'),
            showRetryButtonRef: toRef(props, 'showRetryButton'),
            onRemoveRef: toRef(props, 'onRemove'),
            onDownloadRef: toRef(props, 'onDownload'),
            mergedFileListRef: mergedFileListRef,
            XhrMap,
            submit,
            doChange,
            showPreviewButtonRef: toRef(props, 'showPreviewButton'),
            onPreviewRef: toRef(props, 'onPreview'),
            getFileThumbnailUrl,
            listTypeRef: toRef(props, 'listType'),
            dragOverRef,
            openOpenFileDialog,
            draggerInsideRef,
            handleFileAddition,
            mergedDisabledRef: formItem.mergedDisabledRef,
            maxReachedRef,
            fileListStyleRef: toRef(props, 'fileListStyle'),
            abstractRef: toRef(props, 'abstract'),
            cssVarsRef: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClassRef: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
            showTriggerRef: toRef(props, 'showTrigger'),
            imageGroupPropsRef: toRef(props, 'imageGroupProps')
        });
        const exposedMethods = {
            clear: () => {
                uncontrolledFileListRef.value = [];
            },
            submit,
            openOpenFileDialog
        };
        return Object.assign({ mergedClsPrefix: mergedClsPrefixRef, draggerInsideRef,
            inputElRef, mergedTheme: themeRef, dragOver: dragOverRef, handleFileInputChange, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender }, exposedMethods);
    },
    render() {
        var _a, _b;
        const { draggerInsideRef, mergedClsPrefix, $slots, onRender } = this;
        if ($slots.default && !this.abstract) {
            const firstChild = $slots.default()[0];
            if ((_a = firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === null || _a === void 0 ? void 0 : _a[uploadDraggerKey]) {
                draggerInsideRef.value = true;
            }
        }
        const inputNode = (h("input", Object.assign({}, this.inputProps, { ref: "inputElRef", type: "file", class: `${mergedClsPrefix}-upload-file-input`, accept: this.accept, multiple: this.multiple, onChange: this.handleFileInputChange })));
        if (this.abstract) {
            return (h(Fragment, null, (_b = $slots.default) === null || _b === void 0 ? void 0 :
                _b.call($slots),
                h(Teleport, { to: "body" }, inputNode)));
        }
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return (h("div", { class: [
                `${mergedClsPrefix}-upload`,
                draggerInsideRef.value && `${mergedClsPrefix}-upload--dragger-inside`,
                this.dragOver && `${mergedClsPrefix}-upload--drag-over`,
                this.themeClass
            ], style: this.cssVars },
            inputNode,
            this.showTrigger && this.listType !== 'image-card' && (h(NUploadTrigger, null, $slots)),
            this.showFileList && h(NUploadFileList, null, $slots)));
    }
});

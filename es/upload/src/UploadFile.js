var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { h, defineComponent, computed, inject, ref, watchEffect } from 'vue';
import { CancelIcon, TrashIcon, AttachIcon, RetryIcon, DownloadIcon, EyeIcon } from '../../_internal/icons';
import { NButton } from '../../button';
import { NIconSwitchTransition, NBaseIcon } from '../../_internal';
import { warn } from '../../_utils';
import NUploadProgress from './UploadProgress';
import { uploadInjectionKey } from './interface';
import { imageIcon, documentIcon } from './icons';
import { environmentSupportFile, isImageFile } from './utils';
import { NImage } from '../../image';
export default defineComponent({
    name: 'UploadFile',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        file: {
            type: Object,
            required: true
        },
        listType: {
            type: String,
            required: true
        }
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NUpload = inject(uploadInjectionKey);
        const imageRef = ref(null);
        const thumbnailUrlRef = ref('');
        const progressStatusRef = computed(() => {
            const { file } = props;
            if (file.status === 'finished')
                return 'success';
            if (file.status === 'error')
                return 'error';
            return 'info';
        });
        const buttonTypeRef = computed(() => {
            const { file } = props;
            if (file.status === 'error')
                return 'error';
            return undefined;
        });
        const showProgressRef = computed(() => {
            const { file } = props;
            return file.status === 'uploading';
        });
        const showCancelButtonRef = computed(() => {
            if (!NUpload.showCancelButtonRef.value)
                return false;
            const { file } = props;
            return ['uploading', 'pending', 'error'].includes(file.status);
        });
        const showRemoveButtonRef = computed(() => {
            if (!NUpload.showRemoveButtonRef.value)
                return false;
            const { file } = props;
            return ['finished'].includes(file.status);
        });
        const showDownloadButtonRef = computed(() => {
            if (!NUpload.showDownloadButtonRef.value)
                return false;
            const { file } = props;
            return ['finished'].includes(file.status);
        });
        const showRetryButtonRef = computed(() => {
            if (!NUpload.showRetryButtonRef.value)
                return false;
            const { file } = props;
            return ['error'].includes(file.status);
        });
        const showPreviewButtonRef = computed(() => {
            if (!NUpload.showPreviewButtonRef.value)
                return false;
            const { file: { status, url }, listType } = props;
            return (['finished'].includes(status) &&
                (url || thumbnailUrlRef.value) &&
                listType === 'image-card');
        });
        function handleRetryClick() {
            NUpload.submit(props.file.id);
        }
        function handleRemoveOrCancelClick(e) {
            e.preventDefault();
            const { file } = props;
            if (['finished', 'pending', 'error'].includes(file.status)) {
                handleRemove(file);
            }
            else if (['uploading'].includes(file.status)) {
                handleAbort(file);
            }
            else {
                warn('upload', 'The button clicked type is unknown.');
            }
        }
        function handleDownloadClick(e) {
            e.preventDefault();
            handleDownload(props.file);
        }
        function handleRemove(file) {
            const { XhrMap, doChange, onRemoveRef: { value: onRemove }, mergedFileListRef: { value: mergedFileList } } = NUpload;
            void Promise.resolve(onRemove
                ? onRemove({
                    file: Object.assign({}, file),
                    fileList: mergedFileList
                })
                : true).then((result) => {
                if (result === false)
                    return;
                const fileAfterChange = Object.assign({}, file, {
                    status: 'removed'
                });
                XhrMap.delete(file.id);
                doChange(fileAfterChange, undefined, {
                    remove: true
                });
            });
        }
        function handleDownload(file) {
            const { onDownloadRef: { value: onDownload } } = NUpload;
            void Promise.resolve(onDownload ? onDownload(Object.assign({}, file)) : true).then((res) => {
                /** I haven't figure out its usage, so just leave it here */
            });
        }
        function handleAbort(file) {
            const { XhrMap } = NUpload;
            const XHR = XhrMap.get(file.id);
            XHR === null || XHR === void 0 ? void 0 : XHR.abort();
            handleRemove(Object.assign({}, file));
        }
        function handlePreviewClick() {
            const { onPreviewRef: { value: onPreview } } = NUpload;
            if (onPreview) {
                onPreview(props.file);
            }
            else if (props.listType === 'image-card') {
                const { value } = imageRef;
                if (!value)
                    return;
                value.click();
            }
        }
        const deriveFileThumbnailUrl = () => __awaiter(this, void 0, void 0, function* () {
            const { listType } = props;
            if (listType !== 'image' && listType !== 'image-card') {
                return;
            }
            if (!environmentSupportFile || !(props.file.file instanceof File)) {
                return;
            }
            thumbnailUrlRef.value = yield NUpload.getFileThumbnailUrl(props.file);
        });
        watchEffect(() => {
            void deriveFileThumbnailUrl();
        });
        return {
            mergedTheme: NUpload.mergedThemeRef,
            progressStatus: progressStatusRef,
            buttonType: buttonTypeRef,
            showProgress: showProgressRef,
            disabled: NUpload.mergedDisabledRef,
            showCancelButton: showCancelButtonRef,
            showRemoveButton: showRemoveButtonRef,
            showDownloadButton: showDownloadButtonRef,
            showRetryButton: showRetryButtonRef,
            showPreviewButton: showPreviewButtonRef,
            thumbnailUrl: thumbnailUrlRef,
            imageRef,
            handleRemoveOrCancelClick,
            handleDownloadClick,
            handleRetryClick,
            handlePreviewClick
        };
    },
    render() {
        const { clsPrefix, mergedTheme, listType, file } = this;
        // if there is text list type, show file icon
        let icon;
        const isImageType = listType === 'image';
        const isImageCardType = listType === 'image-card';
        if (isImageType || isImageCardType) {
            icon = !isImageFile(file) ? (h("span", { class: `${clsPrefix}-upload-file-info__thumbnail` },
                h(NBaseIcon, { clsPrefix: clsPrefix }, { default: () => documentIcon }))) : (file.url || this.thumbnailUrl) && file.status !== 'error' ? (h("a", { rel: "noopener noreferer", target: "_blank", href: file.url || undefined, class: `${clsPrefix}-upload-file-info__thumbnail`, onClick: this.handlePreviewClick }, listType === 'image-card' ? (h(NImage, { src: this.thumbnailUrl || file.thumbnailUrl || file.url || undefined, previewSrc: file.url || undefined, alt: file.name, ref: "imageRef" })) : (h("img", { src: this.thumbnailUrl || file.thumbnailUrl || file.url || undefined, alt: file.name })))) : (h("span", { class: `${clsPrefix}-upload-file-info__thumbnail` },
                h(NBaseIcon, { clsPrefix: clsPrefix }, { default: () => imageIcon })));
        }
        else {
            icon = (h("span", { class: `${clsPrefix}-upload-file-info__thumbnail` },
                h(NBaseIcon, { clsPrefix: clsPrefix }, { default: () => h(AttachIcon, null) })));
        }
        const progress = (h(NUploadProgress, { show: this.showProgress, percentage: file.percentage || 0, status: this.progressStatus }));
        const showName = listType === 'text' || listType === 'image';
        return (h("div", { class: [
                `${clsPrefix}-upload-file`,
                `${clsPrefix}-upload-file--${this.progressStatus}-status`,
                file.url &&
                    file.status !== 'error' &&
                    listType !== 'image-card' &&
                    `${clsPrefix}-upload-file--with-url`,
                `${clsPrefix}-upload-file--${listType}-type`
            ] },
            h("div", { class: `${clsPrefix}-upload-file-info` },
                icon,
                h("div", { class: `${clsPrefix}-upload-file-info__name` },
                    showName &&
                        (file.url && file.status !== 'error' ? (h("a", { rel: "noopener noreferer", target: "_blank", href: file.url || undefined, onClick: this.handlePreviewClick }, file.name)) : (h("span", { onClick: this.handlePreviewClick }, file.name))),
                    isImageType && progress),
                h("div", { class: [
                        `${clsPrefix}-upload-file-info__action`,
                        `${clsPrefix}-upload-file-info__action--${listType}-type`
                    ] },
                    this.showPreviewButton ? (h(NButton, { key: "preview", text: true, type: this.buttonType, onClick: this.handlePreviewClick, theme: mergedTheme.peers.Button, themeOverrides: mergedTheme.peerOverrides.Button }, {
                        icon: () => (h(NBaseIcon, { clsPrefix: clsPrefix }, { default: () => h(EyeIcon, null) }))
                    })) : null,
                    (this.showRemoveButton || this.showCancelButton) &&
                        !this.disabled && (h(NButton, { key: "cancelOrTrash", theme: mergedTheme.peers.Button, themeOverrides: mergedTheme.peerOverrides.Button, text: true, type: this.buttonType, onClick: this.handleRemoveOrCancelClick }, {
                        icon: () => (h(NIconSwitchTransition, null, {
                            default: () => this.showRemoveButton ? (h(NBaseIcon, { clsPrefix: clsPrefix, key: "trash" }, { default: () => h(TrashIcon, null) })) : (h(NBaseIcon, { clsPrefix: clsPrefix, key: "cancel" }, { default: () => h(CancelIcon, null) }))
                        }))
                    })),
                    this.showRetryButton && !this.disabled && (h(NButton, { key: "retry", text: true, type: this.buttonType, onClick: this.handleRetryClick, theme: mergedTheme.peers.Button, themeOverrides: mergedTheme.peerOverrides.Button }, {
                        icon: () => (h(NBaseIcon, { clsPrefix: clsPrefix }, { default: () => h(RetryIcon, null) }))
                    })),
                    this.showDownloadButton ? (h(NButton, { key: "download", text: true, type: this.buttonType, onClick: this.handleDownloadClick, theme: mergedTheme.peers.Button, themeOverrides: mergedTheme.peerOverrides.Button }, {
                        icon: () => (h(NBaseIcon, { clsPrefix: clsPrefix }, { default: () => h(DownloadIcon, null) }))
                    })) : null)),
            !isImageType && progress));
    }
});

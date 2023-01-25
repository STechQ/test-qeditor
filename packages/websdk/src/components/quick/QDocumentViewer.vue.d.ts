import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    show: boolean;
    loadedRatio: number;
    numPages: number;
    page: number;
    turn: number;
    showToolbar: boolean;
    pdfKey: number;
}, {
    createPdf(): void;
    getType(): any;
    onFrameScrollBottom(): void;
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }: {
        target: {
            scrollTop: any;
            clientHeight: any;
            scrollHeight: any;
        };
    }): void;
}, unknown, {
    src: any;
    height: string;
    width: string;
    scale: string;
    showToolBar: boolean;
    loadingContent: string;
}>;
export default _default;
//# sourceMappingURL=QDocumentViewer.vue.d.ts.map
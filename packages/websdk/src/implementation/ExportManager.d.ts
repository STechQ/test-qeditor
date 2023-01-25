export declare class ExportManager {
    fileName: string;
    items: Array<object>;
    headers: Array<object>;
    constructor({ fileName, items, headers }: {
        fileName: string;
        items: Array<object>;
        headers: Array<object>;
    });
    private getItemValue;
    exportToXlsx(): void;
}
//# sourceMappingURL=ExportManager.d.ts.map
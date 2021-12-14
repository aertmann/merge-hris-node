import { TypeEnum } from './typeEnum';
export declare class Earning {
    'id'?: string;
    'employeePayrollRun'?: string | null;
    'amount'?: number | null;
    'type'?: TypeEnum | null;
    'remoteData'?: Array<{
        [key: string]: any;
    }> | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}

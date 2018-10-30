export interface IValidator {
    validationHandlers: { [key: string]: Function };
    validateAll(): string[] | null;
    validateOne(key: string): string[] | null;
}
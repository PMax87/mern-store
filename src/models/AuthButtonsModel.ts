export interface AuthButtonsModel extends Array<AuthButtonValue> {}

interface AuthButtonValue {
    url: string,
    label: string,
    bgColor: string,
    textColor: string,
    borderColor?: string,
}
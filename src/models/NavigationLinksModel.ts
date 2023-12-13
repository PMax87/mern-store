export interface NavigationLinksModel extends Array<NavigationLinkValue> {}

interface NavigationLinkValue {
    url: string,
    label: string,
    icon: JSX.Element
}
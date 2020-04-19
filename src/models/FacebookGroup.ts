export default interface FacebookGroup {
    id:          string,
    name?:        string,
    isPublic?:    boolean,
    description?: string,
    memberCount?: number,
    adminCount?:  number,
    [key: string]: any;
}
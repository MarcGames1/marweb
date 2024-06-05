export enum UserRoles {
    Subscriber = 'Subscriber',
    Cursant = 'Cursant',
    Author = 'Author',
    Admin = 'Admin',
}
export interface IUser {
    id:string,
    nume ?: string,
    preNume?: string,
    email: string,
    role:UserRoles,
    passwordResetCode?:string
    hasConfirmedEmail?:boolean
}

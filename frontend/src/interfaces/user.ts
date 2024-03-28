
 export enum userRole {
   ADMIN = 'Admin',
   AUTHOR = 'Author',
   SUBSCRIBER = 'Subscriber',
 }

 export interface IUseUserRoleData {
   ok: boolean;
  
   loading: false;
 }


export interface IUser {
    _id: string;
    avatarUrl?: string;
    nume: string;
    preNume: string;
    email: string;
    role: userRole[];
}
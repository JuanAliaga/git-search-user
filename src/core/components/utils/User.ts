import { type } from "os";

export type User={
    login:string;
    id: number;
    followers: number;
    public_repos: number;
    following:number;
    avatar_url:string;
    created_at:string;
    location:string;
    site:string;
    company:string;
    html_url:string;
}
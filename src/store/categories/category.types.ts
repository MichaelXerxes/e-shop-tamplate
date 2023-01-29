import { type } from "os";

export enum CATEGORIES_ACTION_TYPE{
    SET_CATEGORIES_MAP='category/SET_CATEGORIES_MAP',
    SET_CATEGORIES='category/SET_CATEGORIES_MAP',
    FETCH_CATEGORIES_FAILED='category/FETCH_CATEGORIES_FAILED',
    FETCH_CATEGORIES_LOADING='category/FETCH_CATEGORIES_LOADING',
}

export type CategoryItem={
    id:number;
    imgaeUrl:string;
    name:string;
    price:number;
}

export type Category={
    title:string;
    imageUrl:string;
    items:CategoryItem[];

}

export type CategoryMap={
    [key:string]:CategoryItem[];
}

export interface Stage{
    name: string;
    content:string;
}

export interface Company{
    name:string;
    id: string;
    subtitle: string;
    imgUrl: string;
    stages?: Stage[];
}
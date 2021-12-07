export class Usuario{
    constructor(
        public id:number,
        public email:string,
        public fullName:string,
        public address:string
    ){}

    get idUser(){
        return `${this.id}`
    }
    get User(){
        return `${this.email}${this.fullName}${this.address}`
    }
}
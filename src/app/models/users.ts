export  interface Iusers{
  firstname:string,
  lastname:string,
  address:IAddress[]
}

interface IAddress{
  housename:string,
  zip:string,
}
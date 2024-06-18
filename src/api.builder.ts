
export class ApiBuilder{
    private static DomainURl = 'https://api.escuelajs.co/'
    private static Api_Post_Fix = 'api/'
    private static Api_VErsion = 'v1/'

    public static getEndPoint(endpoint:string){
        return this.DomainURl + this.Api_Post_Fix + this.Api_VErsion + endpoint
    }
}
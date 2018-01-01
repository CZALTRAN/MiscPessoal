

export class LoggingService{
    logStatusChange(status:string)
    {
        console.log("O status do servidor mudou:" + status);
    }
}
class DataBase extends Error{
    constructor(statusCode, message){
        super()
        this.name = 'DataBase Error';
        this.statusCode = statusCode;
        this.message = message
    }
}

class VerificationError extends Error{
    constructor(statusCode, message){
        super()
        this.name = 'DataBase Error';
        this.statusCode = statusCode;
        this.message = message
    }
}


export {
    DataBase,
    VerificationError
}
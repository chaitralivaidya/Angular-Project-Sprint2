export class User{
    userName : string = "";
    passWord : string = "";
    userRole : number = 0;

    constructor(userName :string , passWord:string, userRole : number )
    {
        this.userName = userName;
        this.passWord = passWord;
        this.userRole = userRole;
    }
}
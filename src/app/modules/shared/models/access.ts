export interface AccessToken{
    sub:     string;
    iss:     string;
    iat:     number;
    exp:     number;
    has_psw: boolean;
    complete: boolean;
    photoUrl: string;
    firstName: string;
    lastName: string;
}
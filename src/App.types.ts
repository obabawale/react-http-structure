export interface User {
    email: string,
    id: number
    firstname: string,
    lastname: string
}

export interface UserToken {
    accessToken: string,
    user: User
}

export interface loginCredentials {
    'email': string,
    'password': string
}

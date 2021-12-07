export interface Login{
    email: string,
    password: string | number
}

export interface Welcome {
    id:           number;
    email:        string;
    fullName:     string;
    address:      string;
    cellPhone:    string;
    isAccepted:   boolean;
    isDeleted:    boolean;
    observations: null;
    password:     string;
    vehicle:      null;
    rol:          Rol;
}

export interface Rol {
    id:        number;
    name:      string;
    isDeleted: number;
}
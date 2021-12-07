//Interfaz de respuesta del equipo
export interface Equipment {
    equipmentId?:         number;
    mark?:                string;
    model?:               string;
    failure?:             string;
    travelEquipmentDTOs?: TravelEquipmentDTO[];
}

export interface TravelEquipmentDTO {
    id?:            number;
    operationDate?: Date|string;
    observation?:   null;
    cadete?:        null;
    operator?:      Operator|string;
    equipment?:     null;
    statusTravel?:  number;
}

export interface Operator {
    id?:        number;
    email?:     string;
    fullName?:  string;
    address?:   string;
    cellPhone?: string;
}
//interfaz para la tabla
export interface Tabla {
    fecha:string,
    marca:string,
    modelo:string,
    estadoEqui:string,
    EstadoEnvio:string|number


}


export interface Camara {
    camaraName : string,
    camaraStatus : string,
    camaraTemperature : string
    camaraLocation ?: number[]
}

export interface TemperaturaCamara {
    key: string,
    value: number
}
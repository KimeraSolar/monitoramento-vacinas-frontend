export interface Camara {
    camaraName : string,
    camaraStatus : 'Normal' | 'Alerta' | 'Perigo' | 'Inativa',
    camaraTemperature : string
    camaraLocation ?: number[]
}

export interface TemperaturaCamara {
    key: string,
    value: number
}
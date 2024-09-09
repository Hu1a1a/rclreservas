import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class ServicioService {
    Menu: any = [
        {
            id: "eventos",
            Name: "Eventos",
            icon: "assets/icon/azul/eventos-azul.svg",
            s_icon: "assets/icon/blanco/eventos-blanco.svg",
            Selected: true,
            Filter: [
                {
                    Type: "Select",
                    Campo: "",
                    Label: "Selecciona tu evento",
                    Selection: ["Evento1", "Evento2", "Evento3", "Evento4", "Evento5"],
                    Selected: "",
                    icon: "assets/icon/seleccion-evento.svg"
                },
                {
                    Type: "Date",
                    Campo: "",
                    Label: "Selecciona la fecha",
                    Selected: "",
                    icon: "assets/icon/seleccion-fecha.svg"
                },
                {
                    Type: "Select",
                    Campo: "",
                    Label: "Nº de Personas",
                    Selection: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    Selected: "",
                    icon: "assets/icon/seleccion-personas.svg"
                }
            ]
        },
        {
            id: "deportivas",
            Name: "Actividades Deportivas",
            icon: "assets/icon/azul/actividades-deportivas-azul.svg",
            s_icon: "assets/icon/blanco/actividades-deportivas-blanco.svg",
            Selected: false,
        },
        {
            id: "servicios",
            Name: "Servicios",
            icon: "assets/icon/azul/servicios-azul.svg",
            s_icon: "assets/icon/blanco/servicios-blanco.svg",
            Selected: false,
        },
        {
            id: "alquiler",
            Name: "Espacios de Alquiler",
            icon: "assets/icon/azul/espacios-de-alquiler-azul.svg",
            s_icon: "assets/icon/blanco/espacios-de-alquiler-blanco.svg",
            Selected: false,
        }
    ]

}

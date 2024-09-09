import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class MenuService {
    head: any = [
        { Name: "Inicio", Router: "#/" },
        {
            Name: "Servicio", Children: [
                { Name: "Eventos", Router: "#/servicios/eventos" },
                { Name: "Actividades Deportivas", Router: "#/servicios/deportivas" },
                { Name: "Servicios", Router: "#/servicios/servicios" },
                { Name: "Espacios de Alquiler", Router: "#/servicios/alquiler" },
            ]
        },
        {
            Name: "Calendario", Children: [
                { Name: "Calendario1", Router: "#/" },
                { Name: "Calendario1", Router: "#/" },
                { Name: "Calendario1", Router: "#/" },
                { Name: "Calendario1", Router: "#/" },
                { Name: "Calendario1", Router: "#/" }
            ]
        },
        {
            Name: "Dashboard", Children: [
                { Name: "Dashboard1", Router: "#/" },
                { Name: "Dashboard1", Router: "#/" },
                { Name: "Dashboard1", Router: "#/" },
                { Name: "Dashboard1", Router: "#/" },
                { Name: "Dashboard1", Router: "#/" }
            ]
        },
        { Name: "Mi perfil", Router: "#/" },
    ]
    footer: any = [
        { Name: "Inicio", Router: "#/" },
        { Name: "Eventos", Router: "#/" },
        { Name: "Calendario", Router: "#/" },
        { Name: "Dashboard", Router: "#/" },
        { Name: "Mi Perfil", Router: "#/" },
        { Name: "Eventos", Router: "#/" },
        { Name: "Servicios", Router: "#/" },
        { Name: "Actividades Deportivas", Router: "#/" },
        { Name: "Espacios de Alquiler", Router: "#/" },
        { Name: "Eventos", Router: "#/" },
        { Name: "Servicios", Router: "#/" },
        { Name: "Actividades Deportivas", Router: "#/" },
        { Name: "Espacios de Alquiler", Router: "#/" },
    ]
}

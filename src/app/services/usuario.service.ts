import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/enviroment";
import { tap } from "rxjs/operators";

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    
    constructor(
        private http: HttpClient
    ) { }

    crearUsuario(formData: any ) {
        console.log(formData)
        return this.http.post(`${base_url}`, formData)
            .pipe(
                tap((resp: any) => {
                    this.guardarLocalStorage( resp );
                })
            )
    }

    guardarLocalStorage( user: any ) {

        localStorage.setItem('user', user );

    }
}
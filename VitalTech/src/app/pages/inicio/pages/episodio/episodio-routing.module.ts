import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { EpisodisComponent } from "./modif-episodis.component";

const routes: Routes = [
    {
        path: '',
        component: EpisodisComponent
    },
]

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EpisodioRoutes {
    
}
import { __decorate } from "tslib";
import { DataService } from "./app.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, HttpClientModule],
        providers: [DataService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
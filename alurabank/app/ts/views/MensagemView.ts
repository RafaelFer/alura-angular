class MensagemView{

    private _elemento: Element;


    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }


    update(model: String): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: String): string {
        return `<p class="alert alert-info">${model}</p>`;   
    }
}
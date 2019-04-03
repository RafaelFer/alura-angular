class MensagemView extends View<string> {

    update(model: String): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: String): string {
        return `<p class="alert alert-info">${model}</p>`;   
    }
}
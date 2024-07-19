class ValidateForm {
    constructor() {
        this.form =  document.querySelector('#form')
        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        alert('enviado')
    }
}

const validate = new ValidateForm()
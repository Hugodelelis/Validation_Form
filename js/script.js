class ValidateForm {
    constructor() {
        this.form = document.querySelector('#form')
        this.events()        
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault() 

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        const NameValid = this.IsNameValid()
        const validEmail = this.isEmailValid()
        const validPassword = this.isPasswordValid()
        const validCPF = this.isCpfValid()

        if(NameValid && validEmail && validPassword && validCPF) {
            alert('Formulário enviado')
            this.form.submit()
        }
    }

    IsNameValid() {
        let name = document.querySelector('#nome')
        let secondName = document.querySelector('#sobreNome')
        let valid = true
        

        if(secondName.value.length < 3) {
            this.setError(secondName, 'Sobrenome precisa ter 3 ou mais letras.')
            valid = false
        }

        if(name.value.length < 3 || name.value.length > 12) {
            this.setError(name, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false
        }

        if(!name.value.match(/^[a-zA-Z0-9]+$/)) {
            this.setError(name, 'O Usúario deve conter apenas letras e números.')
            valid = false
        }
        return valid
    }

    isEmailValid() {
        let email = document.querySelector('#email')
        let valid = true

        if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            this.setError(email, 'Email inválido.')
            valid = false
        }

        return valid
    }

    isPasswordValid() {
        let password = document.querySelector("#senha")
        let confirmPassword = document.querySelector('#confirmaSenha')
        let valid = true

        if(password.value.length < 6 || password.value.length > 12) {
            this.setError(password, 'A senha deve conter entre 6 a 12 caracteres.')
            valid = false
        }

        if(password.value !== confirmPassword.value) {
            this.setError(confirmPassword, 'A confirmação de senha déve ser igual a senha.')
        }

        if(password.value.length <= 0) {
            this.setError(confirmPassword, 'Preencha o campo senha.')
        }

        return valid
    }

    isCpfValid() {
        const cpf = new ValidCPF(document.querySelector('#cpf').value)
        let valid = true

        if(!cpf.valid()) {
            this.setError(document.querySelector('#cpf'), 'CPF inválido')
            valid = false
        }
        
        return valid
    }

    setError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
    
}

const validate = new ValidateForm()
const mask = new MaskCPF()

class MaskCPF {
    constructor() {
        this.cpfField = document.querySelector('#cpf');
        this.cpfField.addEventListener('input', this.applyMask.bind(this));
    }

    applyMask() {
        this.cpfField.value = this.mask(this.cpfField.value);
    }

    mask(value) {
        value = value.replace(/\D/g, '');
        if (value.length > 9) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            return value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (value.length > 3) {
            return value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        } else {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        }
    }
}
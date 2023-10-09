export const validateLogin = (email, password) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
  
    const errors = {};
  
    if (!email) {
      errors.email = "Digite um e-mail";
    } else if (!regEx.test(email)) {
      errors.email = "Digite um e-mail válido";
    }
  
    if (!password) {
      errors.password = "Digite uma senha";
    }

    return errors
}


export const validateRegister = (name, email, password, passConf) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
    const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    const errors = {};

    if (!name) {
      errors.name = "Digite um nome";
    }
  
    if (!email) {
      errors.email = "Digite um e-mail";
    } else if (!regEx.test(email)) {
      errors.email = "Digite um e-mail válido";
    }
  
    if (!password) {
      errors.password = "Digite uma senha";
    } else if (!regExPassword.test(password)) {
      errors.password = "Senha não atende aos requisitos mínimos";
    }

    if (password !== passConf) {
      errors.passConf = "As senhas não coincidem";
    }

    return errors
}
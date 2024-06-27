import * as yup from "yup";

let validations = yup.object().shape({
    email: yup.string().email("Geçerli bir e mail giriniz.").required("Bu alan zorunludur."),
    password:yup.string().min(5,"Min 5 karakter olmalıdır.").required("Bu alan zorunludur."),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"Parolalar uyuşmuyor.").required("Bu alan zorunludur.") //oneof ile passwordla aynı olmalı demiş oluyoruz.
})

export default validations;

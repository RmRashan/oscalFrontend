import * as yup from 'yup'
export const validationSchema = yup.object().shape({
    username: yup.string().required('Username is Required *'),
    password: yup.string().min(3, "Minimum 3 Char ").required('Password is Required *'),
});
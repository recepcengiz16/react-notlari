import { Formik, useFormik } from 'formik';
import React from 'react'
import validations from './validation';

function Signup() {

    const { handleSubmit, handleChange, handleBlur, errors, values, touched, isSubmitting} = useFormik({
        initialValues: {
          email: '', 
          password: '', 
          passwordConfirm:''
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations
      });

  return (
    // touched da daha önce o inputa focus olunmuş mu yani ona tıkladın sonra diğerine mi geçtin onu gösteriyor.
    <div>
      <Formik 
    >
      
        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
          <input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && <div> {errors.email} </div>}

          <br /> <br />

          <input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && <div> {errors.password} </div>}

            <br /> <br />

          <input
            name="passwordConfirm"
            onChange={handleChange}
            onBlur={handleBlur} // touched ın çalışması için onBluru da yazmamız lazım.
            value={values.passwordConfirm}
          />
          {errors.passwordConfirm && touched.passwordConfirm && <div> {errors.passwordConfirm} </div>}

          

          <code>{JSON.stringify(values)}</code>
          <br /> <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </Formik>
    </div>
  )
}

export default Signup;

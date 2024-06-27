import './App.css';
//import { Formik, useFormik } from 'formik';
import Signup from './components/Signup';


function App() {

  // const { handleSubmit, handleChange, handleBlur, errors, values, touched, isSubmitting} = useFormik({
  //   initialValues: {
  //     email: '', 
  //     password: '', 
  //     gender:'male',
  //     country:'en', 
  //     hobbies:[]
  //   },
  //   onSubmit: values => {
  //     console.log(values);
  //   },
  // });

  return (
    <div className="App">
      <Signup />
      {/* <Formik
        initialValues={{ email: '', password: '', gender:'male',country:'en', hobbies:[] }}
        
        onSubmit={(values) => {
          console.log(values);
        }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        
      }) => (
        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
          <input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

          <br /> <br />

          <input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}

          <br /> <br />

          <span>Erkek</span>
          <input 
          name='gender'
          type='radio'
          onChange={handleChange}
          onBlur={handleBlur}
          value={'male'}
          checked={values.gender==='male'}
          />
          <span>Kadın</span>
          <input 
          name='gender'
          type='radio'
          onChange={handleChange}
          onBlur={handleBlur}
          value={'female'}
          checked={values.gender==='female'}
          />

        <br /> <br />

        <div>
          Futbol
          <input type="checkbox" name="hobbies" value="Futbol" onChange={handleChange} /> 
        </div>

        <div>
          Sinema
          <input type="checkbox" name="hobbies" value="Sinema" onChange={handleChange} />
        </div>
        <div>
          Yüzme
          <input type="checkbox" name="hobbies" value="Yüzme" onChange={handleChange} />
        </div>

        <br /> <br />

        <select name="country" onChange={handleChange} value={values.country}>
          <option value="tr">Turkey</option>
          <option value="en">England</option>
          <option value="usa">USA</option>
        </select>

        <br /> <br />

          <code>{JSON.stringify(values)}</code>
          <br /> <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
      </Formik> */}

      {/* <Formik 
    >
      
        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
          <input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

          <br /> <br />

          <input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}

          <br /> <br />

          <span>Erkek</span>
          <input 
          name='gender'
          type='radio'
          onChange={handleChange}
          onBlur={handleBlur}
          value={'male'}
          checked={values.gender==='male'}
          />
          <span>Kadın</span>
          <input 
          name='gender'
          type='radio'
          onChange={handleChange}
          onBlur={handleBlur}
          value={'female'}
          checked={values.gender==='female'}
          />

        <br /> <br />

        <div>
          Futbol
          <input type="checkbox" name="hobbies" value="Futbol" onChange={handleChange} /> 
        </div>

        <div>
          Sinema
          <input type="checkbox" name="hobbies" value="Sinema" onChange={handleChange} />
        </div>
        <div>
          Yüzme
          <input type="checkbox" name="hobbies" value="Yüzme" onChange={handleChange} />
        </div>

        <br /> <br />

        <select name="country" onChange={handleChange} value={values.country}>
          <option value="tr">Turkey</option>
          <option value="en">England</option>
          <option value="usa">USA</option>
        </select>

        <br /> <br />

          <code>{JSON.stringify(values)}</code>
          <br /> <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </Formik> */}
    </div>
  );
}

export default App;

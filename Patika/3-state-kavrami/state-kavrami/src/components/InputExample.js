import React, { useState } from 'react'

export default function InputExample() {

    const [form,setForm] = useState({ name:"",surname:"" });

    const onChangeInput = (e)=>{
        setForm({...form, [e.target.name] : e.taget.value }) //bu şekilde de atama yapmak bence daha iyi
    }

  return (
    <div>
      <input name='name' value={form.name} onChange={onChangeInput} />
      <input name='surname' value={form.surname} onChange={onChangeInput} />
    </div>
  )
}

import axios from "axios";
import { useState } from "react";

export const useForm = (initialForm, validationForm) => {

   const [form, setForm] = useState(initialForm);
   const [error, setError] = useState({ status: false });
   const [showErrors, setShowErrors] = useState(false);
   const [loading, setLoading] = useState(false);
   const [responseApi, setResponseApi] = useState(null);
   const [autorizar, setAutorizar] = useState(false);


   const handleChange = (e) => {

      const target = e.target;
      const value = target.name === 'correo' ? target.value.toLowerCase() : target.value;
      const name = target.name;

      setForm({
         ...form,
         [name]: value
      });
      // console.log(form);
   };

   const handleBlur = (e) => {
      handleChange(e);
      setError(validationForm(form));
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      handleBlur(e);
      setShowErrors(true);

      if (Object.keys(error).length === 1 && error.status) {

         setLoading(true);

         // axios.post(`https://colgatesiemprecontigo.col1.co/api/bogota/postData`, form)
         // axios.post(`https://colgatesiemprecontigo.col1.co/api/cali/postData`, form) /stand/registro
         // axios.post(`https://colgatesiemprecontigo.col1.co/api/cartagena/postData`, form)
         axios.post(`https://colgatesiemprecontigo.col1.co/api/ruleta/registro`, form)
            .then(function (response) {
               setLoading(false);
               setResponseApi(response.data);
               resetForm();
               console.log(response)
            })
            .catch(function (error) {
               setLoading(false);
               setResponseApi(false);
               console.log(error)
            })
      } else {
         console.log('erorr', Object.keys(error).length, error.status)
      }
   };

   const handleAutorizar = () => {
      setAutorizar(!autorizar);
   }

   const resetForm = () => {
      document.getElementById("formAsistencia").reset();
      setForm(initialForm);
      setError({ status: false })
      setShowErrors(false);
      setAutorizar(false);

      setTimeout(() => {
         setResponseApi(null)
      }, 7000);
   }

   return {
      form,
      error,
      showErrors,
      loading,
      responseApi,
      autorizar,
      handleChange,
      handleBlur,
      handleSubmit,
      handleAutorizar
   }

}
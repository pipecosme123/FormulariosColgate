import React, { useEffect } from 'react';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from '../useForm';
// import Regimen from '../img/Regimen.png';
import Regimen2 from '../img/PerioGard_regimen.png';
// import logo from '../img/Logo-congreso.png';
// import TituloPendon from '../img/TituloPendon.png';

const initialForm = {
   noIdentificacion: '',
   nombre: '',
   apellido: '',
   direccion: '',
   ciudad: '',
   correo: '',
   celular: '',
   especialidad: '',
   nameTabla: 'asistentes_c2_cali'
}

const validationForm = (form) => {

   let errors = {}

   let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

   if (form['noIdentificacion'] === '') {
      errors['noIdentificacion'] = "Debes llenar este campo";
   } else if (form['noIdentificacion'].length > 15) {
      errors["noIdentificacion"] = `Límite de caracteres superado. ${form['noIdentificacion'].length}/15`;
   }

   if (form['nombre'] === '') {
      errors['nombre'] = "Debes llenar este campo";
   } else if (form['nombre'].length > 45) {
      errors['nombre'] = `Límite de caracteres superado. ${form['nombre'].length}/45`;
   }

   if (form['apellido'] === '') {
      errors['apellido'] = "Debes llenar este campo";
   } else if (form['apellido'].length > 45) {
      errors['apellido'] = `Límite de caracteres superado. ${form['apellido'].length}/45`;
   }

   if (form['direccion'] === '') {
      errors['direccion'] = "Debes llenar este campo";
   } else if (form['direccion'].length > 45) {
      errors['direccion'] = `Límite de caracteres superado. ${form['direccion'].length}/45`;
   }

   if (form['ciudad'] === '') {
      errors['ciudad'] = "Debes llenar este campo";
   } else if (form['ciudad'].length > 45) {
      errors['ciudad'] = `Límite de caracteres superado. ${form['ciudad'].length}/45`;
   }

   if (form['correo'] === '') {
      errors['correo'] = "Debes llenar este campo";
   } else if (form['correo'].length > 45) {
      errors['correo'] = `Límite de caracteres superado. ${form['correo'].length}/45`;
   } else if (!re.exec(form['correo'])) {
      errors['correo'] = 'El correo electrónico no es valido';
   }

   if (form['celular'] === '') {
      errors['celular'] = "Debes llenar este campo";
   } else if (form['celular'].length > 15) {
      errors['celular'] = `Límite de caracteres superado. ${form['celular'].length}/15`;
   }

   if (form['especialidad'] === '') {
      errors['especialidad'] = "Debes llenar este campo";
   } else if (form['especialidad'].length > 45) {
      errors['especialidad'] = `Límite de caracteres superado. ${form['especialidad'].length}/45`;
   }

   errors.status = true;

   return errors;
}

const Forms = () => {

   // const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");

   const {
      error,
      showErrors,
      loading,
      responseApi,
      autorizar,
      handleChange,
      handleBlur,
      handleSubmit,
      handleAutorizar
   } = useForm(initialForm, validationForm);

   // const imageHandler = (e) => {
   //    const reader = new FileReader();
   //    reader.onload = () => {
   //       if (reader.readyState === 2) {
   //          setProfileImg(reader.result)
   //          handleChange(e);
   //       }
   //    }
   //    reader.readAsDataURL(e.target.files[0])
   // };

   useEffect(() => {

   }, [])

   return (
      <div className='Forms'>
         <div className="pendon">
            {/* <h3>Quincuagésimo</h3> */}
            <h1>Congreso Regional de Periodoncia</h1>
            <h3>- Cali -</h3>
            {/* <img src={logo} className="logo" alt="" />  */}
            {/* <h5>22 - 24 de Septiembre</h5> */}
            {/*   <img src={TituloPendon} className="titulo" alt="" />
           <p>Virtualmente seguimos a su lado.</p>
            <p>Hoy estamos aquí para invitarles a que registren fotográficamente este momento y reciban su kit de productos Colgate en su consultorio.</p>  */}
            {/* <img src={Regimen} className="regimen" alt="" /> */}
            <img src={Regimen2} className="regimen" alt="" /> {/* Cali  Cali*/}
            
         </div>
         <Form className="mx-3" onSubmit={handleSubmit} encType="multipart/form-data" id='formAsistencia'>
            <Row>

               <h5>Formulario de inscripción</h5>
               <hr />
               <Col xs={12}>
                  <Form.Group className="mb-2" controlId="noIdentificacion">
                     <Form.Label>Número de identificación:</Form.Label>
                     <Form.Control name="noIdentificacion" type="number" placeholder="C.C." onChange={handleChange} onBlur={handleBlur} isInvalid={error.noIdentificacion && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.noIdentificacion}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="nombre">
                     <Form.Label>Nombres:</Form.Label>
                     <Form.Control name="nombre" type="text" placeholder="Nombre" onChange={handleChange} onBlur={handleBlur} isInvalid={error.nombre && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.nombre}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="apellido">
                     <Form.Label>Apellidos:</Form.Label>
                     <Form.Control name="apellido" type="text" placeholder="Apellido" onChange={handleChange} onBlur={handleBlur} isInvalid={error.apellido && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.apellido}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="direccion">
                     <Form.Label>Dirección del consultorio:</Form.Label>
                     <Form.Control name="direccion" type="text" placeholder="Dirección de consultorio" onChange={handleChange} onBlur={handleBlur} isInvalid={error.direccion && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.direccion}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="ciudad">
                     <Form.Label>Ciudad del consultorio:</Form.Label>
                     <Form.Control name="ciudad" type="text" placeholder="Ciudad" onChange={handleChange} onBlur={handleBlur} isInvalid={error.ciudad && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.ciudad}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="correo">
                     <Form.Label>Correo electrónico:</Form.Label>
                     <Form.Control name="correo" type="text" placeholder="name@example.com" onChange={handleChange} onBlur={handleBlur} isInvalid={error.correo && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.correo}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="celular">
                     <Form.Label>Celular:</Form.Label>
                     <Form.Control name="celular" type="number" placeholder="Celular" onChange={handleChange} onBlur={handleBlur} isInvalid={error.celular && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.celular}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="especialidad">
                     <Form.Label>Especialidad:</Form.Label>
                     <Form.Control name="especialidad" type="text" placeholder="Especialidad" onChange={handleChange} onBlur={handleBlur} isInvalid={error.especialidad && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.especialidad}</Form.Control.Feedback>
                  </Form.Group>
               </Col>

               {/* <Col xs={12}>
                  <Form.Group controlId="image" className="mb-2">
                     <Form.Label>Subir foto:</Form.Label>
                     <Form.Control type="file" accept="image/*" name="image" onChange={imageHandler} onBlur={handleBlur} isInvalid={error.image && showErrors ? true : false} />
                     <Form.Control.Feedback type="invalid">{error.}</Form.Control.Feedback>
                  </Form.Group>

                  <div className="img-holder">
                     <img src={profileImg} alt="" id="img" className="img" />
                  </div>
               </Col> */}
            </Row>

            <Row>
               <Col xs={12} className='habeas'>
                  {/* <div className="habeasData">
                     <p>Estimado(a) de acuerdo a la política de hábeas data es muy importante para nosotros nos autorice el manejo de sus datos, solo tardará unos minutos.</p>

                     <p>
                        Autorizo a <b>COLGATE PALMOLIVE DEL ECUADOR SOCIEDAD ANÓNIMA INDUSTRIAL Y COMERCIAL</b> a que realice la recolección, uso, y tratamiento de mis datos personales para fines comerciales según la Constitución de la República del Ecuador sobre el derecho de protección de los datos personales y cualquier norma que lo modifique o adicione, y también considerando la política de tratamiento de datos personales disponible en <a href="www.colgate.com.ec">www.colgate.com.ec</a>. Toda la información que los usuarios provean al registro de la presente plataforma está sujeta a la Política de Privacidad de Colgate-Palmolive, detallada en la página <a href="https://www.colgatepalmolive.com.ec/legal-privacy-policy">https://www.colgatepalmolive.com.ec/legal-privacy-policy</a>, misma que rige la forma en la cual Colgate-Palmolive (o cualquiera de sus subsidiarias o filiales) recopila y emplea dicha información. Los usuarios aceptan y reconocen que al aceptar estos términos y condiciones otorga su consentimiento a la recopilación, uso, tratamiento y/o transferencia de dicha información, en la forma establecida en la Política de Privacidad de Colgate-Palmolive.
                     </p>
                  </div> */}
                  <div>
                     <p className="habeasData">
                     Autorizo la recolección, almacenamiento, uso, tratamiento, y transmisión internacional o a terceros de mis datos personales por parte de COLGATE PALMOLIVE COMPAÑÍA con NIT 890.300.546-6, con el fin de recibir información sobre sus productos, campañas publicitarias y promociones , hacer parte de sus actividades para profesionales de la salud y recibir información comercial especializada de la misma. Esto de acuerdo a lo establecido en la Ley 1581 de 2012 y el decreto 377 de 2013, y conforme a la política de datos personales disponible en <a href="https://www.colgatepalmolive.com.co/legal-privacy-policy" target="_blank" rel="noopener noreferrer"><i><u>https://www.colgatepalmolive.com.co/legal-privacy-policy</u></i></a>. Entendiendo que puedo solicitar la modificación o supresión de mis datos personales en cualquier momento. 
                     </p>
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check name="autorizar" type="checkbox" label="Si autorizo la recolección y uso de mis datos personales" onClick={() => handleAutorizar()} />
                  </Form.Group>
               </Col>

               <Col xs={12} className="my-3 center">
                  <Button variant="primary" type="submit" className={autorizar ? "" : "noAutorizar"} disabled={!autorizar ? true : false}>
                     Enviar
                  </Button>
               </Col>
            </Row>

            {loading &&
               <div className="Overlay">
                  <Spinner animation="border" variant="info" />
               </div>
            }

            {
               responseApi === true &&
               <Alert variant='success'>
                  <b>¡Registro exitoso!</b>
               </Alert>
            }
            {
               responseApi === false &&
               <Alert variant='danger'>
                  Hubo un error, por favor vuelve a intentarlo
               </Alert>
            }
            {
               responseApi === 'existe' &&
               <Alert variant='warning'>
                  Ya estas registrado en nuestra base de datos
               </Alert>
            }
         </Form>

      </div>
   );
};

export default Forms;
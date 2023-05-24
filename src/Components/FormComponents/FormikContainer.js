
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormControl';
import LoadingButton from '@mui/lab/LoadingButton';

function FormikContainer({addDevice,submitted}) {

    const initialValues ={
        deviceName:'',
        description:'',
        imageFile:null
    }

    const validationSchema = Yup.object({
        deviceName:Yup.string().required('Required !'),
        description:Yup.string().required('Required !'),
        imageFile:Yup.mixed().required()
        .test("File Size","File size too big!", value => value && value.size < 1024 * 1024)
        .test("File Type","Only image(.jpeg and .png) supported!", value => value && ['image/png','image/jpeg'].includes(value.type))
        
    })

    const onSubmit = val => {

        const device = new FormData();
        Object.keys(val).forEach(key => device.append(key,val[key]))
        addDevice(device);
        submitted(true);
    }

  return (
    <Formik 
    initialValues = {initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}
    >
        {
            (formik) => {
                
                return(
                    <Form className="form-frame-control" >

                        <FormikControl 
                        control='file upload'
                        label='Device Photo'
                        name='imageFile'
                        className="form-control" 
                        type='file'
                        onChange={e => formik.setFieldValue('imageFile', e.target.files[0])}/>
                        {formik.errors.imageFile && (<div> {formik.errors.imageFile}</div>)}

                        <FormikControl
                        control='input'
                        name='deviceName'
                        label='Device Name'
                        className="form-control" />

                        <FormikControl 
                        control='textarea'
                        label=' Device Description'
                        name='description'
                        className="form-control" />

                        {
                            <LoadingButton fullWidth sx={{marginY:1}} loading={formik.isSubmitting}  variant="contained" type='submit' disabled={formik.isSubmitting ||!formik.isValid || !formik.dirty}> Add Device</LoadingButton>
                        }
                        
                    </Form>
                )
            }
        }
        
    </Formik>
    
  )
}

export default FormikContainer
import * as yup from 'yup'


export const formSchema = yup.object({
    name: yup.string().required("   Please Enter Name"),
    description: yup.string().required("Please Enter Description"),
    type: yup.string().required("Please Select A Type"),
    weakness: yup.string().required("Please Select Weakness"),
    image: yup.string().required("Please Upoad An Image")
})
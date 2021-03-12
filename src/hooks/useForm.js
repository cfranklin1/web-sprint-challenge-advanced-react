import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

// write your custom hook here to control your checkout form
const useForm = (initialValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useLocalStorage("form", initialValues); 


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

      return [handleChanges, handleSubmit, showSuccessMessage, values];
}

export default useForm;
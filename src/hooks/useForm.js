import {useState, useEffect, useCallback} from 'react';

export const useForm = (formData, validation, callback) => {
  const [state, setState] = useState(formData);
  const [disable, setDisable] = useState(true);

  const validateState = useCallback(() => {
    const hasError = Object.keys(validation).some(key => {
      const isInputFieldRequired = validation[key]?.required;
      const stateValue = state[key]?.value;
      const stateError = state[key]?.error;
      return (isInputFieldRequired && !stateValue) || stateError;
    });

    return hasError;
  }, [state, validation]);

  useEffect(() => {
    setDisable(validateState());
  }, [validateState]);

  const handleChange = (name, value, other, fieldName) => {
    const field = validation[name];
    let error = '';
    if (field?.required) {
      if (!value) {
        error = `Please enter ${fieldName}`;
      } else {
        if (!Number(value) && field.validator.regEx&&field) {
          if (!field.validator.regEx.test(value)) {
            // ('value2');
            error = field.validator.error;
          }
        }
        if (Number(value) && !!field.validator?.mobileValidate?.regEx) {
          if (!field.validator.mobileValidate.regEx.test(value)) {
            // ('value1');
            error = field.validator.mobileValidate.error;
          }
        }
        if (field?.length?.value) {
          if (field?.length?.value <= value.length) {
            error = field.length.error;
          }
        }
        if (name === 'confirmPassword') {
          if (value !== other) {
            error = field.validator.error;
          }
        }
      }
    }

    setState(prevState => ({
      ...prevState,
      [name]: {...prevState[name], value:value, error},
    }));
  };
  const handleFocus = (name, value) => {
    setState(prevState => ({
      ...prevState,
      [name]: {...prevState[name], focus: value},
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(state);
  };

  return {state, disable, handleChange, handleSubmit, handleFocus};
};

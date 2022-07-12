import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty);

  const {
    value: enteredLastname, 
    isValid: enteredLastameIsValid,
    hasError: lastnameInputHasError, 
    valueChangeHandler: lastnameChangeHandler, 
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameInput
  } = useInput(isNotEmpty);
  
  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(isEmail);


  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid && enteredLastameIsValid){
    formIsValid = true;
  }


  const formSubmissionHandler = event => {
    event.preventDefault();
    

    if(!formIsValid){
      return;
    }

    

    console.log("Form Submitted");
    console.log(enteredName, enteredLastname ,enteredEmail);

  
    resetNameInput();
    resetLastnameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const lastnameInputClasses = lastnameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            value={enteredName} 
            onChange={nameChangeHandler} 
            onBlur={nameBlurHandler}
             />
            {nameInputHasError && <p className="error-text">First Name must not be empty.</p>}
          
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='lastname'
            value={enteredLastname} 
            onChange={lastnameChangeHandler} 
            onBlur={lastnameBlurHandler}
             />
            {lastnameInputHasError && <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' 
          id='email'
          value={enteredEmail} 
          onChange={emailChangeHandler} 
          onBlur={emailBlurHandler}
           />
          {emailInputHasError && <p className="error-text">Invalid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

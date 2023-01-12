import "./form-input.styles.scss";
import {GroupSTyles,InputStyles,FormInputLabel}from'./form-input.s'

const FormInput = ({ label, ...otherProps }) => {
    return (
      <GroupSTyles>
        <InputStyles {...otherProps} />
        {label && (
          <FormInputLabel
          shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
        )}
      </GroupSTyles>
    );
  };
  
  export default FormInput;

import "./form-input.styles.scss";

const FormInput = ({ label,...otherProps }) => {
  <div>
    <label>{label}</label>
    <input
    /*  type="text"
      required
      onChange={changeHandler}
      name="displayName"
      value={value}
      */
     {...otherProps}
    />
  </div>;
};
export default FormInput;

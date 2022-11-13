const FormInputText = ({
  name,
  placeholder,
  type,
  rows,
  classes,
}: {
  name: string;
  placeholder: string;
  type: 'text' | 'textarea';
  rows?: number;
  classes?: string;
}) => {
  if (type === 'text') {
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`border border-[3px] border-light-grey rounded-[10px] px-4 py-4 placeholder:text-[#9E9E9E] text-base ${classes}`}
      />
    );
  }

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`border border-[3px] border-light-grey rounded-[10px] px-4 py-4 placeholder:text-[#9E9E9E] text-base ${classes}`}
      rows={rows}
    />
  );
};

export default FormInputText;

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function CommonForm({
  action,
  formControls,
  buttonText,
  isBtnDisabled,
  btnType,
  formData,
  setFormData,
  handleFileChange,
}) {
  function renderInputByComponentType(control) {
    const {
      componentType,
      disabled,
      placeholder,
      name,
      label,
    } = control;

    let content = null;

    switch (componentType) {
      case "input":
        content = (
          <div className="relative flex items-center mt-8" key={name}>
            <Input
              type="text"
              disabled={disabled}
              placeholder={placeholder}
              name={name}
              id={name}
              value={formData[name]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border dark:bg-black bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
        break;

      case "file":
        content = (
          <Label
            htmlFor={name}
            className="flex bg-gray-100 dark:bg-black items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer"
            key={name}
          >
            <h2>{label}</h2>
            <Input
              onChange={handleFileChange}
              id={name}
              type="file"
            />
          </Label>
        );
        break;

      default:
        content = (
          <div className="relative flex items-center mt-8" key={name}>
            <Input
              type="text"
              disabled={disabled}
              placeholder={placeholder}
              name={name}
              id={name}
              value={formData[name]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full dark:bg-black rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
        break;
    }

    return content;
  }

  return (
    <form action={action}>
      {formControls.map((control) => renderInputByComponentType(control))}
      <div className="mt-6 w-full">
        <Button
          type={btnType || "submit"}
          className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
          disabled={isBtnDisabled}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

export default CommonForm;

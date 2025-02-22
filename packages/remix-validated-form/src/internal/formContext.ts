import { createContext } from "react";
import { FieldErrors } from "../validation/types";

export type FormContextValue = {
  /**
   * All the errors in all the fields in the form.
   */
  fieldErrors: FieldErrors;
  /**
   * Clear the errors of the specified fields.
   */
  clearError: (...names: string[]) => void;
  /**
   * Validate the specified field.
   */
  validateField: (fieldName: string) => void;
  /**
   * The `action` prop of the form.
   */
  action?: string;
  /**
   * Whether or not the form is submitting.
   */
  isSubmitting: boolean;
  /**
   * The default values of the form.
   */
  defaultValues?: { [fieldName: string]: any };
};

export const FormContext = createContext<FormContextValue>({
  fieldErrors: {},
  clearError: () => {},
  validateField: () => {},
  isSubmitting: false,
});

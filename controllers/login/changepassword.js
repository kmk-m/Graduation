import Joi from "joi";
import joipassword, { joiPassword } from "joi-password";
import Responses from "../../util/response";
import bcrypt from "bcrypt";

const validateBody = (body) => {
  const objectSchema = Joi.object({
    password: joiPassword
      .string()
      .min(8)
      .max(32)
      .required()
      .noWhiteSpaces()
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .messages({
        "string.empty": `password cannot be empty`,
        "string.min": `password length must be equal or higher than {#limit} characters`,
        "string.max": `password length must not exceed {#limit} characters`,
        "any.required": `password is a required field`,
        "string.minOfUppercase":
          "{#label} should contain at least {#min} uppercase character",
        "string.minOfLowercase":
          "{#label} should contain at least {#min} lowercase character",
        "string.minOfNumeric":
          "{#label} should contain at least {#min} numeric character",
        "string.noWhiteSpaces": "{#label} should not contain white spaces",
      }),
    confirmpassword: joiPassword
      .string()
      .min(8)
      .max(32)
      .required()
      .noWhiteSpaces()
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .messages({
        "string.empty": `password cannot be empty`,
        "string.min": `password length must be equal or higher than {#limit} characters`,
        "string.max": `password length must not exceed {#limit} characters`,
        "any.required": `password is a required field`,
        "string.minOfUppercase":
          "{#label} should contain at least {#min} uppercase character",
        "string.minOfLowercase":
          "{#label} should contain at least {#min} lowercase character",
        "string.minOfNumeric":
          "{#label} should contain at least {#min} numeric character",
        "string.noWhiteSpaces": "{#label} should not contain white spaces",
      }),
  });
  return objectSchema.validate(body, { abortEarly: true });
};
async function changepassword(req, res, next) {
  try {
    const { id } = req.params;
    const { user, resetcode } = req.models;

    const validateError = validateBody(req.body);
    if (validateError.error) {
      return Responses.badRequest(
        res,
        "ValidationError",
        validateError.error.details[0].message
      );
    }
    const { password, confirmpassword } = validateError.value;
    if (password !== confirmpassword) {
      return Responses.badRequest(
        req,
        "Passwords doesnot match",
        "Passwords doesnot match"
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await user.update(
      { password: hashPassword },
      {
        where: {
          userId: id,
        },
      }
    );
    await resetcode.destroy({
      where: {
        userId: id,
      },
    });
    return Responses.success(res, "success", "Password change");
  } catch (err) {
    return next(err);
  }
}
export default changepassword;

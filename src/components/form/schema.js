import * as yup from "yup";

export const schema = yup.object().shape({
  fromWhere: yup.string().required("Початкове місце обов'язкове"),
  toWhere: yup.string().required("Місце призначення обов'язкове"),
  deliveryType: yup.string().oneOf(["parcel", "document", "letter"]).required(),
  weight: yup
    .number()
    .required("Вага обов'язкова")
    .positive("Вага має бути позитивним числом"),
  maxSide: yup.number().when("deliveryType", {
    is: (type) => type === "parcel" || type === "document",
    then: (schema) =>
      schema
        .required("Максимальний розмір сторони обов'язковий")
        .positive("Розмір має бути позитивним числом"),
  }),
  declaredPrice: yup.number().when("deliveryType", {
    is: (type) => type === "parcel" || type === "document",
    then: (schema) =>
      schema
        .required("Вартість обов'язкова")
        .min(0, "Вартість має бути не менше 0 грн"),
  }),
  courier: yup.boolean(),
  courierDelivery: yup.boolean(),
  deliverySms: yup.boolean(),
  withDeliveryNotification: yup.boolean(),
  documentBack: yup.boolean(),
  deliveryToAddress: yup.boolean(),
  listOfEnclosedItems: yup.boolean(),
});

export default schema;

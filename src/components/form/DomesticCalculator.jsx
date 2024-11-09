import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import CheckBox from "../checkbox/CheckBox";
import Input from "../textInput/TextInput";
import Button from "../button/Button";
import Autocomplete from "../autocomplete/Autocomplete";
import styles from "./styles.module.css";
function DomesticCalculator() {
  const [startLocationValue, setStartLocationValue] = useState("");
  const [DestinationValue, setDestination] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  useEffect(() => {
    switch (activeButtonIndex) {
      case 0:
        reset();
        setValue("deliveryType", "parcel");
        break;
      case 1:
        reset();
        setValue("deliveryType", "document");
        break;
      case 2:
        reset();
        setValue("deliveryType", "letter");
        break;
    }
  }, [activeButtonIndex, setValue, reset]);
  return (
    <>
      <form
        style={{ with: "300px" }}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <h3>1. Маршрут</h3>
        <div className={styles["item-container"]}>
          <Autocomplete
            {...register("fromWhere")}
            value={startLocationValue}
            onChange={(e) => setStartLocationValue(e.target.value)}
            options={[
              { id: 1, text: "aaaaa" },
              { id: 2, text: "bbbb" },
            ]}
          ></Autocomplete>
          <Autocomplete
            value={DestinationValue}
            {...register("toWhere")}
            onChange={(e) => setDestination(e.target.value)}
            options={[
              { id: 1, text: "aaaaa" },
              { id: 2, text: "bbbb" },
            ]}
          ></Autocomplete>
        </div>
        <h3>2. Тип відправлення</h3>
        <div className={styles["item-container"]}>
          <Button
            type="button"
            onClick={() => setActiveButtonIndex(0)}
            iconSource={`/assets/buttonIcons/parcel.svg`}
            isActive={activeButtonIndex === 0 ? true : false}
          >
            Посилка
          </Button>
          <Button
            type="button"
            onClick={() => setActiveButtonIndex(1)}
            isActive={activeButtonIndex === 1 ? true : false}
            iconSource={`/assets/buttonIcons/document.svg`}
          >
            Документи
          </Button>
          <Button
            type="button"
            onClick={() => setActiveButtonIndex(2)}
            isActive={activeButtonIndex === 2 ? true : false}
            iconSource={`/assets/buttonIcons/list.svg`}
          >
            Лист
          </Button>
        </div>
        <h3>3. Параметри відправлення</h3>
        {(() => {
          switch (activeButtonIndex) {
            case 0:
              return (
                <>
                  <div className={styles["item-container"]}>
                    <Input {...register("weight")} placeholder="кг"></Input>
                    <Input {...register("maxSide")} placeholder="см"></Input>
                    <Input
                      {...register("declaredPrice")}
                      placeholder="грн"
                    ></Input>
                  </div>
                  <div
                    style={{
                      marginTop: "1em",
                    }}
                    className={styles["item-container"]}
                  >
                    <CheckBox
                      {...register("courier")}
                      content="Виклик кур'єра"
                    ></CheckBox>
                    <CheckBox
                      {...register("courierDelivery")}
                      content="Доставка кур'єром"
                    ></CheckBox>
                    <CheckBox
                      {...register("deliverySms")}
                      content="СМС про отримання"
                    ></CheckBox>
                    <CheckBox
                      {...register("withDeliveryNotification")}
                      content="Рекомендоване повідомлення про вручення"
                    ></CheckBox>
                    <CheckBox
                      {...register("documentBack")}
                      content="Зворотня доставка документів"
                    ></CheckBox>
                  </div>
                </>
              );
            case 1:
              setValue("weight", 1);
              setValue("maxSide", 35);
              setValue("declaredPrice", 500);

              return (
                <>
                  <div className={styles["item-container"]}>
                    <Input
                      disabled
                      {...register("weight")}
                      placeholder="кг"
                    ></Input>
                    <Input
                      disabled
                      {...register("maxSide")}
                      placeholder="см"
                    ></Input>
                    <Input
                      disabled
                      {...register("declaredPrice")}
                      placeholder="грн"
                    ></Input>
                  </div>
                  <div
                    style={{ marginTop: "1em" }}
                    className={styles["item-container"]}
                  >
                    <CheckBox
                      {...register("documentBack")}
                      content="Зворотня доставка документів"
                    ></CheckBox>
                    <CheckBox
                      {...register("withDeliveryNotification")}
                      content="Рекомендоване повідомленя про вручення"
                    ></CheckBox>
                    <CheckBox
                      {...register("deliveryToAddress")}
                      content="Доставка на адресу"
                    ></CheckBox>
                    <CheckBox
                      {...register("listOfEnclosedItems")}
                      content="Перевірка відповідності вкладення поштового відправлення опису вкладення"
                    ></CheckBox>
                  </div>
                </>
              );
            case 2:
              return (
                <>
                  <Input {...register("weight")} placeholder="кг"></Input>
                  <CheckBox
                    content={"З повідомленням про вручення"}
                    {...register("withDeliveryNotification")}
                  ></CheckBox>
                </>
              );
          }
        })()}
        <input type="submit" value={"Розрахувати вартість"} />
      </form>
    </>
  );
}

export default DomesticCalculator;

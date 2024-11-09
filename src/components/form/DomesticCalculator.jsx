import { useState } from "react";
import { useForm } from "react-hook-form";
import CheckBox from "../checkbox/CheckBox";
import Input from "../textInput/TextInput";
import Button from "../button/Button";
import Autocomplete from "../autocomplete/Autocomplete";
import styles from "./styles.module.css";
function DomesticCalculator() {
  const [startLocationValue, setStartLocationValue] = useState("");
  const [DestinationValue, setDestination] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form style={{ with: "300px" }} onSubmit={handleSubmit(onSubmit)}>
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
                      margin: "1em",
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
              return <Input placeholder="fadfdsfds"></Input>;
            case 2:
              return <CheckBox content="adsdasdsa"></CheckBox>;
          }
        })()}
        <input type="submit" value={"asdsa"} />
      </form>
    </>
  );
}

export default DomesticCalculator;

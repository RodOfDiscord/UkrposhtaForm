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
  const { register } = useForm();

  const onSubmit = (d) => {
    d.preventDefault();
    console.log(JSON.stringify(d));
  };

  return (
    <>
      <form style={{ with: "300px" }} onSubmit={onSubmit}>
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
                    <Input placeHolder="кг"></Input>
                    <Input placeHolder="см"></Input>
                    <Input placeHolder="грн"></Input>
                  </div>
                  <div
                    style={{
                      margin: "1em",
                    }}
                    className={styles["item-container"]}
                  >
                    <CheckBox content="Виклик кур'єра"></CheckBox>
                    <CheckBox content="Доставка кур'єром"></CheckBox>
                    <CheckBox content="СМС про отримання"></CheckBox>
                    <CheckBox content="Рекомендоване повідомлення про вручення"></CheckBox>
                    <CheckBox content="Зворотня доставка документів"></CheckBox>
                  </div>
                </>
              );
            case 1:
              return <Input placeHolder="fadfdsfds"></Input>;
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

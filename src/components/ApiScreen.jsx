import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import styles from "./ApiScreen.module.css";

const ApiScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API для курса валют от ЦБ РФ
    axios
      .get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => setData(response.data.Valute.USD.Value))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.api}>
      <h2>Курс USD к рублю:</h2>
      {data ? <p className={styles.rate}>{data} ₽</p> : <p>Загрузка...</p>}
      <Navigation />
    </div>
  );
};

export default ApiScreen;

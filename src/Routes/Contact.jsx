import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Form from "../Components/Form";
import styles2 from "../Styles/app.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(AppContext);
  return (
    <main className={`${styles2[theme]}`}>
      <div className={styles2.titleContainer}>
        <h2>Want to know more?</h2>
        <section>
          <p>Send us your questions and we will contact you</p>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default Contact;

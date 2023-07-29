import { Message } from './About.styled';

const About = () => (
  <Message>
    Цей додаток було створено з метою демонстрації потенційному роботодавцю моїх
    навичок роботи з HTML, CSS, JavaScript, React, React Router та React Redux.
    Додаток було створено без бібліоткеки Axios для вдосконалення навичок роботи
    з HTTP-запитами. Так як під капотом у React Redux Toolkit знаходиться Immer
    - ми можемо не соромлячись "мутувати" state, а Immer за нас його правильно
    оновить.
  </Message>
);

export default About;

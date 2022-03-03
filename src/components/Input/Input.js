import { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import styles from "./input.module.scss";
import * as EmailValidator from 'email-validator'
function Input() {
  // const API_KEY = "AIzaSyB3g1qqJwjYbOa9Y0nQX2LPj9aRL8zaC58"
  //   const API_KEY = "332016-2747b181-6bcc-46ae-b9ba-18e4d49ddd65";
  const API_KEY = "AIzaSyDxahqUJOhHj2f5b8PvKPwe5F9KMPx2H7c";

  const [inputVal, setInputVal] = useState("");
  const all = usePlacesWidget({
    apiKey: API_KEY,
    onPlaceSelected: (place) => setInputVal(place.formatted_address),
    // inputAutocompleteValue: "country",
  });

  console.log({ test: all });

  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.addressC}`}>
        <img src="/icon/locicon.svg" alt="" />
        <input
          type="text"
          ref={all.ref}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={`Enter Your Address`}
        />
      </article>
      {/* <article className={`${styles.emailC}`}>
        <img src="/icon/locicon.svg" alt="" />
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={`Enter Your Email`}
        />
      </article> */}
      <article className={`${styles.buttonC}`}>
        <div className={`${styles.button}`}>Get Offer</div>
      </article>
    </section>
  );
}

export default Input;

import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import './synonym-api.style.scss'

enum OrderToFind {
  syn = "Synonyms - Szinonímák",
  trg = "Triggers - Kapcsolódó szavak",
  ant = "Antonyms - Ellentét",
  spc = "Kind of - Olyasmi",
  gen = "More general than - Általánosabb",
  com = "Comprises - Tartalmazza",
  par = "Part of - Része",
  rhy = "Rhymes - Rímel rá",
  nry = "Approximate rhymes - Megközelítő rím",
  hom = "Homophones  - Hasonló hangzású",
  cns = "Consonant match - Mássalhangzó egyezés",
}

interface SynonymType {
  word: string;
}

const SynonymApi = () => {
  const [inputField, setInputField] = useState("");
  const [selectInputFieldKey, setSelectInputFieldKey] = useState("syn");

  const [synonymArray, setSynonymArray] = useState<SynonymType[]>([]);

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputField(event.currentTarget.value);
  };

  const selectInputChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {

    const indexOfTarget = Object.values(OrderToFind).indexOf((event.currentTarget.value) as unknown as OrderToFind);

    const key = Object.keys(OrderToFind)[indexOfTarget];
    
    setSelectInputFieldKey(key)
    
  }

  const getSynonymHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.datamuse.com/words?rel_${selectInputFieldKey}=${inputField}`
    );
    const data = await response.json();
    setSynonymArray(data);
  };

  return (
    <Container className="synonym_form">
      <h2>Synonym API</h2>
      <p>https://api.datamuse.com/ In this link there is an API, which store words and their synonyms, rhymes etc.
        You can choose a type and then write a word and see the result!
      </p>
      <form onSubmit={getSynonymHandler} className="ui form">
        <div className="field synonym_field">
          <label htmlFor="synonym_type">Choose a type:</label>
          <select id="synonym_type" name="synonym_type" onChange={selectInputChangeHandler}>
              {Object.values(OrderToFind).map((order: OrderToFind)=> 
                <option
                    aria-selected="true"
                    key={order}
                    value={order}
               >{order}
                </option>
                )}
          </select>
        </div>
        <div className="field synonym_field">
          <label>Write a word, and I give the synonyms:</label>
          <input type="text" value={inputField} onChange={inputChangeHandler} />
        </div>

        <button type="submit" className="ui button blue">Submit</button>
      </form>
      <div className="field synonym_field">
        {synonymArray.map((item) => (
          <li key={item.word}>{item.word}</li>
        ))}
      </div>
    </Container>
  );
};

export default SynonymApi;

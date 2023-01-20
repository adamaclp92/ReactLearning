import React, { useState } from "react";

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
    <React.Fragment>
      <form onSubmit={getSynonymHandler} className="form-container">
        <div className="input-container">
          <label htmlFor="synonym-type">Choose a type:</label>
          <select id="synonym-type" name="synonym-type" onChange={selectInputChangeHandler}>
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
        <div className="input-container">
          <label>Write a word, and I give the synonyms:</label>
          <input type="text" value={inputField} onChange={inputChangeHandler} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <ul>
        {synonymArray.map((item) => (
          <li key={item.word}>{item.word}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SynonymApi;

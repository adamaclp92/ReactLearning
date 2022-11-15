import React, { useEffect, useState } from "react";

import "./App.css";
import RmeFilter from "./components/RmeFilters/RmeFilter";

import GetAllRme from "./components/Rmes/GetAllRme";
import useHttpRequest from "./hooks/useHttpRequest";
import ExtendedRme from "./models/ExtendedRme";
import Rme from "./models/Rme";

const App = () => {
  const [extendedRmeList, setExtendedRmeList] = useState<ExtendedRme[]>([]);
  const { isLoading, error, httpRequest: fetchRmes } = useHttpRequest();
  const [enteredValue, setEnteredValue] = useState({
    enteredProvider: "",
    enteredServiceName: "",
    enteredRmeName: "",
    enteredServiceFull: "",
  });

  useEffect(() => {
    const transformRme = (rmeObj: Rme[]) => {
      const loadedExtendedRmes: ExtendedRme[] = [];

      const providerService = [];

      for (const rmeKey in rmeObj) {
        providerService.push(rmeObj[rmeKey].service.split("/"));

        loadedExtendedRmes.push({
          id: rmeKey,
          rme: rmeObj[rmeKey].rme,
          serviceFull: rmeObj[rmeKey].service,
          provider: providerService[rmeKey][0],
          service: providerService[rmeKey][1],
        });
      }

      setExtendedRmeList(loadedExtendedRmes);
    };

    fetchRmes({ uri: "http://localhost:8080/api/data/" }, transformRme);
  }, [fetchRmes]);

  const inputDatas = (
    enteredProvider: string,
    enteredServiceName: string,
    enteredRmeName: string,
    enteredServiceFull: string
  ) => {
    setEnteredValue((prevState) => ({
      ...prevState,
      enteredProvider: enteredProvider,
      enteredServiceName: enteredServiceName,
      enteredRmeName: enteredRmeName,
      enteredServiceFull: enteredServiceFull,
    }));
  };

  useEffect(() => {
    const filteredArray = extendedRmeList.filter(
      (item) =>
        item.provider
          .toLowerCase()
          .includes(enteredValue.enteredProvider.toLowerCase()) &&
        item.service
          .toLowerCase()
          .includes(enteredValue.enteredServiceName.toLowerCase()) &&
        item.rme
          .toLowerCase()
          .includes(enteredValue.enteredRmeName.toLowerCase()) &&
        item.serviceFull
          .toLowerCase()
          .includes(enteredValue.enteredServiceFull.toLowerCase())
    );
    setExtendedRmeList(filteredArray);
    console.log(enteredValue);
  }, [enteredValue]);

  return (
    <React.Fragment>
      <RmeFilter onInputDatas={inputDatas} />
      <GetAllRme
        items={extendedRmeList}
        loading={isLoading}
        error={error!}
        onFetch={fetchRmes}
      />
    </React.Fragment>
  );
};

export default App;

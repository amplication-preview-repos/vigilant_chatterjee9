import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RedactedTextList } from "./redactedText/RedactedTextList";
import { RedactedTextCreate } from "./redactedText/RedactedTextCreate";
import { RedactedTextEdit } from "./redactedText/RedactedTextEdit";
import { RedactedTextShow } from "./redactedText/RedactedTextShow";
import { TextInputList } from "./textInput/TextInputList";
import { TextInputCreate } from "./textInput/TextInputCreate";
import { TextInputEdit } from "./textInput/TextInputEdit";
import { TextInputShow } from "./textInput/TextInputShow";
import { PiiList } from "./pii/PiiList";
import { PiiCreate } from "./pii/PiiCreate";
import { PiiEdit } from "./pii/PiiEdit";
import { PiiShow } from "./pii/PiiShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PIIRedactionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RedactedText"
          list={RedactedTextList}
          edit={RedactedTextEdit}
          create={RedactedTextCreate}
          show={RedactedTextShow}
        />
        <Resource
          name="TextInput"
          list={TextInputList}
          edit={TextInputEdit}
          create={TextInputCreate}
          show={TextInputShow}
        />
        <Resource
          name="Pii"
          list={PiiList}
          edit={PiiEdit}
          create={PiiCreate}
          show={PiiShow}
        />
      </Admin>
    </div>
  );
};

export default App;

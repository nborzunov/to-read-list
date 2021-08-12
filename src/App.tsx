import React, { FC } from "react";
import { AppLayout } from "./components/Layout/AppLayout/AppLayout";
import BookShelf from "./containers/BookShelf";
import "./App.css";


const App: FC = () => {
  return (
    <AppLayout>
      <BookShelf />
    </AppLayout>
  );
};


export default App;



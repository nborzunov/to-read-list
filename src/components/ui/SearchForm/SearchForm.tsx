import { observer } from "mobx-react-lite";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useStore } from "../../../store/store";
import styles from "./SearchForm.module.css";

type propTypes = {
  onSearch: (searchText: string) => void,
  isLoading: boolean

}
const SearchForm: FC<propTypes> = observer(({ onSearch, isLoading }) => {
  const [value, setValue] = useState("");

  const onNewSearch = useStore().onSearch;
  const debouncedSearch = useDebounce(onNewSearch, 600);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value;
    setValue(newQuery);
    debouncedSearch(newQuery);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Find book.."
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={styles.button}
      >
        Go
      </button>
    </form>
  );
});

export default SearchForm;





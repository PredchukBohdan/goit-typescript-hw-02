import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
interface SearchBarProps {
  onSubmits: (value: string) => void;
}

export const SearchBar = ({ onSubmits }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      "query"
    ) as HTMLInputElement;
    const inputValue = input.value.trim();

    if (inputValue === "") {
      e.currentTarget.reset();
      toast("You must enter text to search.");
      return;
    }
    onSubmits(inputValue);
    e.currentTarget.reset();
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

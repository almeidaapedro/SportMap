import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Digite o nome da quadra..."
      style={{
        flex: 1,
        minWidth: "300px",
        padding: "16px 20px",
        border: "1px solid #E2E8F0",
        borderRadius: "14px",
        outline: "none",
        fontSize: "15px",
      }}
    />
  );
}

export default SearchBar;
import { useState } from "react";
import { GridComponent } from "../../components/GridComponent";
import { dataSource } from "../../data/users";

export function UsersList() {
  const [records, setRecords] = useState(dataSource);
  const [filterText, setFilterText] = useState("");

  const filteredRecords = records.filter((record) => {
    return (
      record.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      record.lastName.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  function toggleActiveRow(id, value) {
    console.log("toggleActiveRow", id, value);
    setRecords(
      records.map((record) => {
        if (record.id === id) {
          return {
            ...record,
            active: value,
          };
        }
        return record;
      })
    );
  }

  return (
    <GridComponent
      records={filteredRecords}
      onFilter={(value) => setFilterText(value)}
      toggleActiveRow={toggleActiveRow}
    />
  );
}

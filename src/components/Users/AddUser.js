import React, { useState } from "react";
import { Card } from "../UI/Card";
import styles from "./AddUser.module.css";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enterUserName.trim().length === 0 || enterUserAge.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valod name and age (non-empty values)",
      });
      return;
    }
    if (+enterUserAge < 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (Age > 0 )",
      });
      return;
    }
    props.onAddUserData(enterUserName, enterUserAge);
    setEnterUserName("");
    setEnterUserAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnterUserName(e.target.value);
  };

  const usernameChangeAge = (e) => {
    setEnterUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error ? (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      ) : (
        ""
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            ad="age"
            type="number"
            value={enterUserAge}
            onChange={usernameChangeAge}
          />
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

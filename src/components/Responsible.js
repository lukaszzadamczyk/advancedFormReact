import React from "react";
import "../style/responsible.css";

const Responsible = (props) => {
  const allUsers = [...props.users.coordinator.id];
  const me = allUsers.splice(3, 1);
  const oneUser = me.map((me) => (
    <option key={me.id} value={me.id}>
      {me.name} {me.lastname}
    </option>
  ));
  const users = allUsers.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name} {user.lastname}
    </option>
  ));

  return (
    <>
      <select name="id">
        <option disabled>Me</option>
        {oneUser}
        <option disabled>Others</option>
        {users}
      </select>
      {props.users.errors.id && (
        <div className="message">
          <span>{props.responsible.id_incorrect}</span>
        </div>
      )}
    </>
  );
};

export default Responsible;

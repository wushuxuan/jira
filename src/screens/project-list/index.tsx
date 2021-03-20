import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import * as qs from "qs";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 2000);
  useEffect(() => {
    fetch(
      `http://localhost:3001/projects?${qs.stringify(
        cleanObject(debounceParam)
      )}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch("http://localhost:3001/users").then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  );
};

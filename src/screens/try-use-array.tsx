import { useMount, useArray } from "../utils";
import React from "react";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 20 },
    { name: "tom", age: 21 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {
    // console.log(value.notExist);
    // add({ name: 'david' });
    // removeIndex("123")
  });

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>

      {value.map((person: { name: string; age: number }, index: number) => (
        <div>
          <span>{index}</span>
          <span>{person.name + person.age}</span>
        </div>
      ))}
    </div>
  );
};

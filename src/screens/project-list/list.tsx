import React from "react";
import { User } from "./search-panel";

interface Project {
  id: number;
  name: string;
  personId: number;
}

interface ListPorps {
  users: User[];
  list: Project[];
}

export const List = ({ users, list }: ListPorps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project: any) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

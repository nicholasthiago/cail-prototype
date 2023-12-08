// import { stringCleaner } from "@/utils/util";
import "./item-list.css";

export default function ItemList({ data = [] }) {
  function build_Header() {
    return Object.keys(data[0]).map((el, i) => (
      <th
        className={"font-bold text-s text-gray-700 uppercase px-6 py-3"}
        key={i}
      >
        {" "}
        {el}{" "}
      </th>
    ));
  }

  function build_Body() {
    return data.map((student, i) => {
      return (
        <tr key={i}>
          {Object.values(student).map((el, i) => {
            return (
              <td className={"px-6 py-3 "} key={i}>
                {" "}
                {el.toString()}{" "}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  return (
    <div
      className={
        "relative overflow-x-auto sm:rounded-lg flex flex-col items-center justify-center"
      }
    >
      <table className={"table-auto w-full text-sm text-left rtl:text-right"}>
        <tbody>
          <tr className={"capitalize"}>{build_Header()}</tr>

          {build_Body()}
        </tbody>
      </table>
    </div>
  );
}

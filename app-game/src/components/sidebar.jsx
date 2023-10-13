"use client";

import React, { useState, useEffect } from "react";

function Sidebar({ player, buttonElements, error }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { nome: "Pedro", pontos: "8" },
      { nome: "Kayo", pontos: "14" },
      { nome: "Bruno", pontos: "7" },
    ]);
  }, []);

  return (
    <div className="font-Righteous bg-[white] h-[100vh]">
      <div className="p-[20px]">
        Olá, <br /> <span className="text-[25px]">USUARIO</span>
      </div>
      <hr />
      <div className="flex text-[24px] p-[20px] gap-[70px]">
        <h1>Erros</h1>
        <div className="rounded-full bg-[black] w-[39px] h-[39px] text-center">
          <p className="text-[white]">{error}</p>
        </div>
      </div>
      <hr />
      <div className="flex text-[24px] p-[20px] gap-[40px]">
        <h1>Ranking</h1>
        <div className="rounded-full bg-[black] w-[39px] h-[39px] text-center">
          <p className="text-[white]">1</p>
        </div>
      </div>
      <table className="w-[100%]">
        <tbody className="w-[100%]">
          {data.map((value, index) => (
            <tr
              key={index}
              className="flex justify-between w-[100%] px-[30px] py-[5px]"
            >
              <td className="text-[18px]">{value.nome}</td>
              <td>
                <div className="rounded-full bg-[black] w-[23px] h-[23px] text-center">
                  <p className="text-[white]">{value.pontos}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col gap-[20px] p-[10px]">{buttonElements}</div>
    </div>
  );
}
export default Sidebar;

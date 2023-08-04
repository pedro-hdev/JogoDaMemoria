import React from "react";
import Input from "@/components/input";
import Buttonwhite from "@/components/buttonwhite";
export default function Register() {
  return (
    <div className="flex justify-center items-center text-center p-[8px] flex-col">
      <form className="pt-[70px] flex flex-col justify-center items-center">
        <h1 className="font-Righteous text-[24px] text-[white] text-center tracking-[2px]">
          REGISTRAR
        </h1>

        <div className="mt-[15px] flex flex-col gap-[20px]">
          <Input placeholder="Seu nome" type="text" />

          <Input placeholder="Seu sobrenome" type="text" />

          <Input placeholder="Seu email" type="email" />

          <Input placeholder="Sua senha" type="password" />
        </div>

        <Buttonwhite texto="CRIAR CONTA"></Buttonwhite>
      </form>
    </div>
  );
}

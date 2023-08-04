import Buttonwhite from "@/components/buttonwhite";
import Input from "@/components/input";
import Link from "next/link"
import Register from "./register";

export default function Home() {
  return (
    <div className="flex justify-center items-center text-center p-[8px] flex-col">
      <form className=" pt-[100px] flex flex-col justify-center items-center">
        <h1 className="font-Righteous text-[24px] text-[white] text-center">LOGIN</h1>
        <label className="pt-[50px]">
          <Input placeholder={"LOGIN"} type={"text"}></Input>

        </label>
        <label className="pt-[20px]">
          <Input placeholder={"SENHA"} type={"password"}></Input>
        </label>
        <Buttonwhite texto="ENTRAR"></Buttonwhite>
      </form>
      <p>Não tem uma conta? <a href="">Registre-se aqui.</a></p>
    </div>
  )
}

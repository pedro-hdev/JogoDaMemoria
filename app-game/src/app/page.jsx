import Buttonwhite from "@/components/buttonwhite";
import Input from "@/components/input";


export default function Home() {
  return (
    <div className="flex justify-center items-center text-center p-[8px] flex-col">
      <form className=" pt-[100px] flex flex-col justify-center items-center">
        <h1 className="font-Righteous text-[24px] text-[white] text-center tracking-[2px]">
          LOGIN
        </h1>
        <div className="mt-[15px] flex flex-col gap-[20px]">
          <Input placeholder="LOGIN" type="text"></Input>

          <Input placeholder="SENHA" type="password"></Input>
        </div>
        <Buttonwhite texto="ENTRAR"></Buttonwhite>
      </form>
      <p className=" font-Righteous text-white font-[400] mt-[8px]">
        Não tem uma conta?{" "}
        <a className="text-blue-300" href="/register">
          Registre-se aqui.
        </a>
      </p>
    </div>
  );
}

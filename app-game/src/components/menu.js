import React from "react";

function Menu({ logolink, textolink1, textolink2, logo, texto1, texto2 }) {
  return (
    <div className="font-Righteous flex bg-black p-3 justify-between text-[white] text-[13px] font-[400] tracking-[2px] sm:text-[16px] lg:text-[24px]">
      <a href={logolink}>{logo}</a>
      <div className="flex gap-3">
        <a href={textolink1}>{texto1}</a>
        <a href={textolink2}>{texto2}</a>
      </div>
    </div>
  );
}
export default Menu;

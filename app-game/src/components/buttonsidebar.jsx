function Buttonsidebar({ texto, onClick }) {
  return (
    <button onClick={() => onClick} className="font-Righteous bg-[#fff] w-[203px] h-[46px] border-solid border-[5px] border-[black] rounded-[30px] text-[18px]">
      {texto}
    </button>
  );
}

export default Buttonsidebar;

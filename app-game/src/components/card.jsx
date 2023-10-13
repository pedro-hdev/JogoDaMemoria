export default function Card({ urlImage, value, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`bg-slate-200 shadow-sm border-0 w-[280px] h-[210px] rounded-[30px] overflow-hidden p-[20px] hover:-mt-[20px] duration-300`}
      >
        <img className="w-full h-full" src={urlImage} alt={value} />
      </button>
    );
  }
  
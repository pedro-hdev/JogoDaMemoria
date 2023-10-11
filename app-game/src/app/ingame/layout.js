import Menu from "@/components/menu";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#3A3A3A] h-full">
        <header>
          <Menu
            logolink="/"
            logo="JOGO DA MEMÓRIA"
            textolink1=""
            texto1="LOGOUT"
            textolink2=""
            texto2="SOBRE"
          />
        </header>
        {children}
      </body>
    </html>
  );
}

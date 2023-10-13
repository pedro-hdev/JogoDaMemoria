"use client";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Menu from "@/components/menu";
import Card from "@/components/card";

export default function Game({ params }) {
  const [handle, setHandle] = useState([{}]);
  const [userPlayer, setUserPlayer] = useState(false);
  const [selection, setSelection] = useState([]);
  const [error, setError] = useState(0);

  /* 
  
    - Pegar todo o objeto de pokemons e jogar no DOM
    - Ao clicar no botão o pokemon deverá aparecer
  
  */

  useEffect(() => {
    const pokemons = [
      {
        id: 1,
        name: "bulbasaur",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
      {
        id: 2,
        name: "bulbasaur",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
      {
        id: 3,
        name: "charmander",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      },
      {
        id: 4,
        name: "charmander",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      },
      {
        id: 5,
        name: "squirtle",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      },
      {
        id: 6,
        name: "squirtle",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      },
      {
        id: 7,
        name: "caterpie",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      },
      {
        id: 8,
        name: "caterpie",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      },
      {
        id: 9,
        name: "pidgey",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
      },
      {
        id: 10,
        name: "pidgey",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
      },
      {
        id: 11,
        name: "ratata",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
      },
      {
        id: 12,
        name: "ratata",
        rounded: false,
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
      },
    ];
    setHandle(pokemons);
  }, []);

  useEffect(() => {
    function updateGame({ pokemonId }) {
      const updatedHandle = handle.map((x) => {
        if (x.id === pokemonId) {
          return {
            ...x,
            rounded: false,
          };
        } else {
          return x;
        }
      });

      setHandle(updatedHandle);
    }

    if (selection.length === 2) {
      const arr1 = selection[0];
      const arr2 = selection[1];

      if (arr1.name === arr2.name) {
        console.log("Você ganhou um ponto");
        setSelection([]);
      } else {
        console.log("Você perdeu um ponto");
        setSelection([]);
        setError(error + 1);

        updateGame({ pokemonId: arr1.id });
        setTimeout(() => {
          updateGame({ pokemonId: arr2.id });
        }, 3000);
      }
    }
  }, [selection, handle]);

  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  function reloadGame() {
    const updatedHandle = handle.map((value) => {
      return {
        ...value,
        rounded: false,
      };
    });

    setHandle(shuffle(updatedHandle));
    setSelection([]);
  }

  return (
    <div className="flex">
      <Sidebar
        error={error}
        buttonElements={
          userPlayer ? (
            <button
              onClick={() => {
                setUserPlayer(!userPlayer);
                reloadGame();
                setError(0);
              }}
              className="font-Righteous bg-[#fff] w-[203px] h-[46px] border-solid border-[5px] border-[black] rounded-[30px] text-[18px]"
            >
              Reiniciar
            </button>
          ) : (
            <button
              onClick={() => {
                setUserPlayer(!userPlayer);
                reloadGame();
              }}
              className="font-Righteous bg-[#fff] w-[203px] h-[46px] border-solid border-[5px] border-[black] rounded-[30px] text-[18px]"
            >
              Jogar
            </button>
          )
        }
        player={reloadGame}
      />
      <div>
        <Menu
          logolink={`/${params.id}`}
          logo="JOGO DA MEMÓRIA"
          texto2="SOBRE"
          texto1="LOGOUT"
        />
        <h2 className="text-center text-[30px] font-bold text-slate-100">
          {userPlayer ? "BOA SORTE" : "CLIQUE EM JOGAR PARA COMEÇAR!!!!!"}{" "}
        </h2>
        <div className="flex flex-wrap p-[40px]  justify-center gap-[59px]">
          {handle.map((value) => (
            <Card
              onClick={() => {
                const updatedHandle = handle.map((x) => {
                  if (x.id === value.id) {
                    return {
                      ...value,
                      rounded: !x.rounded,
                    };
                  }
                  return x;
                });

                setHandle(updatedHandle);

                if (selection.length === 0) {
                  setSelection([value]);
                } else {
                  setSelection([...selection, value]);
                }
              }}
              urlImage={
                value.rounded
                  ? value.url
                  : "https://i.pinimg.com/originals/2f/ff/2b/2fff2b8e3342cd870873e22b4fd31d11.png"
              }
            />
          ))}
        </div>
        {/* container-elements */}
      </div>
    </div>
  );
}

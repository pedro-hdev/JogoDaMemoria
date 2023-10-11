"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Card from "@/components/card";

export default function Game() {
    const [pokemon, setPokemon] = useState([{}]);

  useEffect(() => {
    async function getPokemons() {
      let getApi = await fetch("https://pokeapi.co/api/v2/pokemon", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemon(data.results);
     
        });

      return getApi;
    }

    getPokemons();

    function getImagesPokemon() {
      let filter = pokemon.find(value => value.name === "bulbasaur")

      console.log(filter)
  
    }

    getImagesPokemon()

  }, []);






  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex p-[40px] flex-wrap gap-[70px] justify-center">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

import Image from "next/image";

async function getData(id: string) {
  const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
  return response.json();
}

export default async function DetailPokemon({
  params,
}: {
  params: { id: string };
}) {
  // let linkImage = "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev";
  const pokemon = await getData(params.id);

  return (
    <div>
      <div className="flex align-middle w-5/6 m-auto justify-around ">
        <Image
          src={pokemon.imageUrl}
          alt={pokemon.name}
          width={600}
          height={200}
        />
        <div className="content-center">
          <h1 className="text-9xl font-bold text-center content-center">{pokemon.name}</h1>
          <p className="text-6xl text-center">{pokemon.genus}</p>
        </div>
      </div>
      <div className="m-11 border-2 border-gray-900 p-4 rounded-2xl">
        <h1 className="text-2xl tracking-wide font-bold">Description</h1>
        <p>{pokemon.description}</p>
      </div>
      <div className="flex justify-around m-11 border-2 border-gray-900 p-4 rounded-2xl ">
        <div>
          <h1 className="text-2xl tracking-wide font-bold">Types</h1>
          <div className="flex">
            <p className="mr-3">{pokemon.types[0]}</p>|
            <p className="mx-3">{pokemon.types[1]}</p>|
            <p className="mx-3">{pokemon.types[2]}</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl tracking-wide font-bold">Locations</h1>
          <div className="flex">
            <p className="mr-3">{pokemon.locations[0]}</p>|
            <p className="mx-3">{pokemon.locations[1]}</p>|
            <p className="mx-3">{pokemon.locations[2]}</p>
          </div>
        </div>
        <div>
        <table>
             <tr>
                 <th>HP |</th>
                 <th>Attack |</th>
                 <th>Defense |</th>
                 <th>Speed |</th>
                 <th>Special Attack |</th>
                 <th>Special Defense |</th>
            </tr>
            <tr>
                <td className="text-center">{pokemon.stats['HP']}</td>
                <td className="text-center">{pokemon.stats['Attack']}</td>
                <td className="text-center">{pokemon.stats['Defense']}</td>
                <td className="text-center">{pokemon.stats['Speed']}</td>
                <td className="text-center">{pokemon.stats['Special Attack']}</td>
                <td className="text-center">{pokemon.stats['Special Defense']}</td>
            </tr>
          </table>
        </div>


      </div>
      <div className={`flex m-11 border-2 border-gray-900 rounded-2xl`}>
      </div>
    </div>
  );
}
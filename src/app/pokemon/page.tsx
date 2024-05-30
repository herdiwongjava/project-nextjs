import Image from "next/image"
import Link from "next/link";

async function getData() {
    const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=50");
    return response.json();
}


export default async function PokemonPage (){
    // let linkImage = "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev";
    const pokemon = await getData();
    return (
        <div className="max-w-7xl m-auto mb-12">
            <section className="flex flex-row gap-5 flex-wrap max-w-6xl h-lvh overflow-auto m-auto border-y-8  border-gray-900 pt-4 pb-4">
                {pokemon.map((item:any) => (
                <div className={`w-52 border-2 border-gray-900 p-5 rounded-2xl`} 
                     key={item.id}>
                    <Link href={`/pokemon/${item.id}`}>
                        <h1 className="text-center">{item.genus}</h1>
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={800}
                            height={100}
                            className="h-40 object-cover"
                        />
                        <h2 className="text-center text-xl font-bold">{item.name}</h2>
                        <h4 className="text-center">Type : {item.types}</h4>
                        <table>
                        <tr>
                                <th>HP |</th>
                                <th>Atc |</th>
                                <th>Def |</th>
                                <th>Speed |</th>
                            </tr>
                            <tr>
                                <td className="text-center">{item.stats['HP']}</td>
                                <td className="text-center">{item.stats['Attack']}</td>
                                <td className="text-center">{item.stats['Defense']}</td>
                                <td className="text-center">{item.stats['Speed']}</td>
                            </tr>
                        </table>
                    </Link>
                </div>            
                ))}
            </section>
        </div>
    );
};
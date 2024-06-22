import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
    <div className="text-center">
    <div className="my-6">
    <div className="mt-8">
    <div className="mt-96">
    <div className="mt-0">
    <h1 className="text-5xl my-6 text-[#8800d4]">Asteroid Bot</h1>
    <p className="text-xl -mx-auto">Le robot multifonctions</p>
    <a className="inline-block px4 py-2 rounded-lg bg-[#8800d4] mt-8"href="https://discord.com/oauth2/authorize?client_id=1230107519406309417&permissions=8&integration_type=0&scope=bot+applications.commands">Ajouter / • Asteroid Bot</a>
    <Image className="mt-96 mx-auto" src="/images/IMG_0930.webp" alt="description" width={512} height={512}/>
    <h2 className="mt-0 text-xl">Le robot dont votre serveur a besoin.</h2>
    <p className="text-sm">Asteroid Bot est le bot dont votre serveur à besoin, Asteroid Bot est un bot multifonctions polyvalent, prêt à tout pour être ajouter.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

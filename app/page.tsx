import Image from 'next/image';

const items = [
  { id: 1, name: "23.05.23 Influencer concept" },
  { id: 2, name: "23.05.19 Cheerio" },
  { id: 3, name: "23.05.19 Chat GPT Storyteller" },
  { id: 4, name: "23.05.19 Mapping Festival" },
  { id: 5, name: "23.05.19 VR project" },

  // More items...
]

export default function Home() {
  return (
    <main>

        <h1 className="text-3xl px-5 pt-12">Tibor Udvari</h1>
        <h2 className="px-5 pb-3">He is undecided about this bio line for now. </h2>
        <div className="sm:px-5 columns-1 sm:columns-2 lg:columns-3">
          <ul role="list" className="divide-y divide-gray-200">
            <li className=" bottom-0 left-0 right-0 bg-gray-200"></li>

            {items.map((item) => (
              <li key={item.id} className="px-5 py-0 sm:px-0 text-base leading-10">
                {item.name}
              </li>
            ))}
            <li className=" bottom-0 left-0 right-0 h-px bg-gray-200"></li>
          </ul>

        </div>
        

    </main>
  );
}

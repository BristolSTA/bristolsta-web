export default function StaTitle({title, bgImage}: { title: string, bgImage: string }) {
  return (
    <div className="bg-neutral-600 bg-cover bg-center mb-8" style={{backgroundImage: `url(/images/titles/${bgImage})`}}>
      <div className="flex items-center justify-center bg-neutral-950/75 w-full h-full">
        <h1 className="max-w-screen-md py-20 text-4xl font-bold mb-4 text-center lg:text-left w-full px-3">{title}</h1>
      </div>
    </div>
  )
}
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="font-public-sans scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Trident
      </h1>
      <div className="flex flex-col gap-4 max-w-min">
        <Button variant="default">Hello!</Button>
        <Button variant="secondary">Hello!</Button>
        <Button variant="modrinth">Hello!</Button>
        <Button variant="destructive">Hello!</Button>
        <Button variant="ghost">Hello!</Button>
        <Button variant="outline">Hello!</Button>
      </div>
    </main>
  )
}

import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-svh">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Tempus Proprietas
          </h1>
      </div>
  )
}

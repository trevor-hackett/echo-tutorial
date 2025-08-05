import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"

export default function Page() {

  const sum = add(8,3)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello apps/widget {sum}</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  )
}

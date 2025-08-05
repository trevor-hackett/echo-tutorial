"use client"

import { add } from "@workspace/math/add"
import { useMutation, useQuery} from 'convex/react'
import { api } from '@workspace/backend/_generated/api'
import { Input } from "@workspace/ui/components/input"

export default function Page() {

  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  const sum = add(2, 5)
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p> 

      <form onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        const formData = new FormData(event.currentTarget)

        const name = formData.get("name") as string

        addUser({ name })
      }}>

        <Input name="name" />
      </form>

      <pre className="max-w-sm w-full mx-auto">{JSON.stringify(users, null, 2)}</pre>

    </div>
  )
}

"use client"

import { add } from "@workspace/math/add"
import { useQuery} from 'convex/react'
import { api } from '@workspace/backend/_generated/api'

export default function Page() {

  const users = useQuery(api.users.getMany)

  const sum = add(2, 5)
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/widget</p> 

      <div className="max-w-sm w-full mx-auto">{JSON.stringify(users, null, 2)}</div>

    </div>
  )
}

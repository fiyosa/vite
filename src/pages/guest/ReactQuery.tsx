import { useMutation, useQuery } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserById, getUsers } from '../../api/reqres'
import './reactQuery.css'
import { postLogin } from '../../api/reqres/post-login'

export default function ReactQuery() {
  const [_paginate, _setPaginate] = useState({ page: 1, per_page: 3 })
  const [_toggle, _setToggle] = useState(false)
  const [_userId, _setUserId] = useState(-1)

  const navigate = useNavigate()

  const _users = useQuery({
    queryKey: ['getUsers', _paginate.page, _paginate.per_page],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const res = await getUsers({
        query: {
          page: _paginate.page,
          per_page: _paginate.per_page,
        },
      })
      return res
    },
  })

  const _user = useQuery({
    queryKey: ['getUser', _userId],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      if (_userId === -1) return null
      const res = await getUserById({ param: { id: _userId } })
      await new Promise((r) => setTimeout(r, 2000))
      return res
    },
  })

  const fetchLoginMutation = useMutation({ mutationFn: postLogin })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const email = `${formData.get('email')}`
    const password = `${formData.get('password')}`

    fetchLoginMutation.mutate(
      { paylod: { email, password } },
      {
        onSuccess() {
          form.reset()
          _users.refetch()
        },
      }
    )
  }

  console.log(_user)

  return (
    <>
      <div>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
      <button style={{ marginTop: '2rem', width: '6rem' }} onClick={() => _setToggle(!_toggle)}>
        {_toggle ? 'Yes' : 'No'}
      </button>
      <hr style={{ margin: '2rem 0' }} />
      <button
        style={{ width: '6rem', marginRight: '1rem' }}
        onClick={() => _setPaginate((prev) => ({ ...prev, page: prev.page - 1 }))}
        disabled={_paginate.page === 1}
      >
        previous
      </button>
      <button
        style={{ width: '6rem', marginRight: '1rem' }}
        onClick={() => _setPaginate((prev) => ({ ...prev, page: prev.page + 1 }))}
        disabled={_users.data?.data?.total_pages === _paginate.page}
      >
        next
      </button>
      <button style={{ width: '6rem', marginRight: '1rem' }} onClick={() => _users.refetch()}>
        Refetch
      </button>

      {_users.isPending || _users.isFetching ? (
        <h3>Loading...</h3>
      ) : (
        _users.data?.data?.data?.map((user: any, i: number) => (
          <div className="user-card" key={i} onClick={() => _setUserId(23)}>
            <img className="avatar" src={user?.avatar} alt="Emma Wong" />
            <div className="user-info">
              <h2 className="user-name">
                {user?.first_name} {user?.last_name}
              </h2>
              <p className="user-email">{user?.email}</p>
            </div>
          </div>
        ))
      )}

      <hr style={{ margin: '2rem 0' }} />

      {_user.isPending || _user.isFetching ? (
        <h3>Loading...</h3>
      ) : (
        _user.data?.data?.data && (
          <div className="user-card">
            <img className="avatar" src={_user.data?.data?.data?.avatar} alt="picture" />
            <div className="user-info">
              <h2 className="user-name">
                {_user.data?.data?.data?.first_name} {_user.data?.data?.data?.last_name}
              </h2>
              <p className="user-email">{_user.data?.data?.data?.email}</p>
            </div>
          </div>
        )
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            style={{ display: 'inline-block', height: '2rem', backgroundColor: 'white', color: 'black' }}
            type="text"
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            style={{
              display: 'inline-block',
              height: '2rem',
              backgroundColor: 'white',
              color: 'black',
              margin: '1rem 0',
            }}
            type="text"
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div style={{ marginBottom: '5rem' }}></div>
    </>
  )
}

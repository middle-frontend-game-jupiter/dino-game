import { Client } from 'pg'

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      user: "postgres",
      host: 'localhost',
      database: "forum_db",
      password: "POSTGRES_PASSWORD",
      port: 5432,
    })

    await client.connect()

    const res = await client.query('SELECT NOW()')
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
    client.end()

    return client
  } catch (e) {
    console.error(e)
  }

  return null
}

import { Database } from '@vuex-orm/core'
import Customer from '@/models/Customer'
import Transaction from '@/models/Transaction'

const database = new Database()

database.register(Customer)
database.register(Transaction)

export default database

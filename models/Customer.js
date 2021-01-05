import { Model } from '@vuex-orm/core'
import Transaction from './Transaction'

export default class Customer extends Model {
  static entity = 'customers'

  static fields() {
    return {
      id: this.uid(),
      email: this.string(''),
      name: this.string(''),
      phone: this.string(''),
      created_at: this.string(''),
      transactions: this.hasMany(Transaction, 'customer_id'),
    }
  }
}

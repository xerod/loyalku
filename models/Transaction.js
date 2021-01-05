import { Model } from '@vuex-orm/core'
import Customer from './Customer'

export default class Transaction extends Model {
  static entity = 'transactions'

  static fields() {
    return {
      id: this.uid(),
      customer_id: this.string(null).nullable(),
      name: this.string(''),
      payment_no: this.string(''),
      total_collected: this.number(),
      checkouts: this.attr([]),
      created_at: this.string(''),
      assignee: this.belongsTo(Customer, 'customer_id'),
    }
  }
}

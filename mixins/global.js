import Transaction from '@/models/Transaction'
import Customer from '@/models/Customer'

export default {
  data() {
    return {
      isFetchingTransaction: true,
      operatingIncome: 0,
    }
  },
  mounted() {
    const now = this.$dayjs()
    const sixMonthsFromNow = this.$dayjs.duration({
      weeks: 3,
      months: 5,
    })
    // const fromBeginning = await this.$axios
    //   .$get('https://api.mokapos.com/v1/businesses')
    //   .then((res) => {
    //     return this.$dayjs(res.data.created_at)
    //   })
    const defaultQuery = {
      since: now.subtract(sixMonthsFromNow).unix(),
      // since: fromBeginning,
      until: now.unix(),
    }
    const outletId = this.$store.state.auth.user.outlet_ids[0]

    const defaultEndpoint = `/api/v2/outlets/${outletId}/reports/get_latest_transactions`
    const actualEndpoint =
      defaultEndpoint +
      `?since=${defaultQuery.since}&until=${defaultQuery.until}`

    const getTransaction = async (url) => {
      var results = await this.$axios.$get(url).then((res) => {
        return res.data
      })

      Transaction.insert({
        data: results.payments,
      })

      if (results.completed === false) {
        const url = new URL(results.next_url)
        const next_url = '/api' + url.pathname + url.search

        return await getTransaction(next_url)
      } else {
        return results.completed
      }
    }

    ;(async () => {
      if (Transaction.all().length == 0) {
        const entireList = await getTransaction(actualEndpoint)
      }
      this.isFetchingTransaction = false
    })()
  },
  computed: {
    getRepurchasingRate() {
      const allCustomerWithTransactions = Customer.query()
        .with('transactions')
        .get().length
      const allCustomers = Customer.all().length

      const ratio = (allCustomerWithTransactions / allCustomers) * 100
      return ratio
    },
    getMultiProductPurchaseRate() {
      const multiProductPurchase = Transaction.query()
        .where('checkouts', (value) => value.length > 1)
        .get().length

      const allTransaction = Transaction.all().length
      const ratio = (multiProductPurchase / allTransaction) * 100

      return ratio.toFixed(0)
    },
    isTransactionContainCustomer() {
      const transactionContainCustomer = Transaction.query()
        .where('customer_id', (value) => value !== null)
        .get().length

      return !!transactionContainCustomer
    },
    getCustomersAtBeginning() {
      return Transaction.query()
        .where(
          'created_at',
          (value) =>
            this.$dayjs(value) < this.$dayjs().subtract(1, 'month') &&
            this.$dayjs(value) > this.$dayjs().subtract(2, 'month')
        )
        .get().length
    },
    getCustomersGained() {
      return Transaction.query()
        .where(
          'created_at',
          (value) => this.$dayjs(value) > this.$dayjs().subtract(1, 'month')
        )
        .get().length
    },
    getCustomersAtTheEnd() {
      return Transaction.all().length
    },
    getNewCustomersGrowth() {
      return this.getCustomersGained
    },
    getNumberOfLostCustomers() {
      const avarageCustomersRate =
        (this.getCustomersAtTheEnd - this.getCustomersGained) / 5
      const numberOfLOstCustomers =
        this.getCustomersGained - avarageCustomersRate
      return numberOfLOstCustomers.toFixed(0)
    },
    getAttritionRate() {
      const avarageCustomersRate =
        (this.getCustomersAtTheEnd - this.getCustomersGained) / 5
      const attritionRate =
        (this.getNumberOfLostCustomers / avarageCustomersRate) * 100
      return attritionRate.toFixed(2)
    },
    getRetentionRate() {
      const retentionRate = 100 - this.getAttritionRate
      this.$store.commit(
        'transactions/SET_CUSTOMER_RETENTION_RATE',
        retentionRate
      )
      return retentionRate.toFixed(2)
    },
    getAvarageSalesPerCustomer() {
      const allTransactionValue = Transaction.query().sum('total_collected')
      const avarage = allTransactionValue / this.getCustomersAtTheEnd

      return avarage
    },
    getLostOperatingIncome() {
      const operatingIncomePerCustomer =
        (this.getAvarageSalesPerCustomer * this.operatingIncome) / 100
      const lostOperatingIncome =
        operatingIncomePerCustomer * this.getNumberOfLostCustomers
      return lostOperatingIncome
    },
    getLostRevenue() {
      return this.getAvarageSalesPerCustomer * this.getNumberOfLostCustomers
    },
    formatter() {
      const value = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        currencyDisplay: 'symbol',
      })

      return value
    },
  },
}

<template>
  <c-flex direction="column" width="80%" align="center">
    <SecondaryNav name="Home" :isFetchingData="isFetchingTransaction" />
    <c-alert
      v-if="!isTransactionContainCustomer"
      width="90%"
      margin-top="4"
      status="error"
      variant="solid"
    >
      <c-alert-icon />
      No customers were found in your transaction. For this reason, some
      analytics will either not work or provide NaN values instead. You can read
      more about how to fix this here
    </c-alert>
    <c-text width="90%" fontWeight="semibold" color="gray.600" mb="2" mt="4">
      Overview
    </c-text>
    <c-grid
      template-columns="repeat(3, 1fr)"
      gap="4"
      width="90%"
      direction="row"
      mb="8"
    >
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >CUSTOMER RETENTION RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800"
            >{{ getCustomerRetentionRate }}%</c-text
          >
          <c-text color="green.500" ml="2">+0%</c-text>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >REPURCHASING RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800"
            >{{ getRepurchasingRate }}%</c-text
          >
          <c-text color="green.500" ml="2">+0%</c-text>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >MULTI-PRODUCT PURCHASE RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">
            {{ getMultiProductPurchaseRate }}%
          </c-text>
          <c-text color="green.500" ml="2">+0%</c-text>
        </c-flex>
      </c-box>
    </c-grid>
    <c-flex width="90%" mb="2" align="center">
      <c-text fontWeight="semibold" color="gray.600">
        Latest Transaction
      </c-text>
      <c-text fontSize="sm" color="gray.400" ml="2">Last 24 hours</c-text>
    </c-flex>

    <Transactions />
  </c-flex>
</template>

<script>
import { mapGetters } from 'vuex'

import Transaction from '@/models/Transaction'
import Customer from '@/models/Customer'

import SecondaryNav from '@/components/SecondaryNav'
import Transactions from '@/components/Transactions.vue'

export default {
  data() {
    return {
      isFetchingTransaction: true,
      selected: 1,
    }
  },
  components: {
    Transactions,
    SecondaryNav,
  },
  created() {
    this.$store.dispatch('transactions/getLatestTransaction')
  },
  async mounted() {
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
        return await getTransaction(results.next_url)
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
    getCustomerRetentionRate() {
      return this.customer_retention_rate.toFixed(2)
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
    ...mapGetters('transactions', {
      latest_transactions: 'GET_LATEST_TRANSACTION',
      customer_retention_rate: 'GET_CUSTOMER_RETENTION_RATE',
    }),
  },
  methods: {
    select(i) {
      this.selected = i
    },
  },
}
</script>

<style>
th,
td {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
}
th {
  text-align: left;
}
</style>

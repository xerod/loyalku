<template>
  <c-flex direction="column" width="80%" align="center">
    <SecondaryNav name="Home" />
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
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">0%</c-text>
          <c-text color="green.500" ml="2">+0%</c-text>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >REPURCHASING RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">0%</c-text>
          <c-text color="green.500" ml="2">+0%</c-text>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >MULTI-PRODUCT PURCHASE RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">0%</c-text>
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
import SecondaryNav from '@/components/SecondaryNav'
import Transactions from '@/components/Transactions.vue'

export default {
  data() {
    return {
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
  mounted() {
    const now = this.$dayjs()
    const sixMonthsFromNow = this.$dayjs.duration({
      weeks: 3,
      months: 5,
    })
    const defaultQuery = {
      since: now.subtract(sixMonthsFromNow).unix(),
      until: now.unix(),
    }
    const outletId = this.$store.state.auth.user.outlet_ids[0]

    const defaultEndpoint = `https://api.mokapos.com/v2/outlets/${outletId}/reports/get_latest_transactions`
    const actualEndpoint =
      defaultEndpoint +
      `?since=${defaultQuery.since}&until=${defaultQuery.until}`

    const getTransaction = async (url) => {
      var apiResults = await this.$axios.$get(url).then((res) => {
        return res.data
      })
      this.$store.commit('transactions/ADD_PAYMENTS', apiResults.payments)
      return apiResults
    }

    const getEntireTransaction = async (url) => {
      const results = await getTransaction(url)
      const next_url = results.next_url
      const completed_status = results.completed

      if (completed_status === false) {
        return await getEntireTransaction(next_url)
      } else {
        return completed_status
      }
    }

    ;(async () => {
      const payments = this.$store.state.transactions.transaction.payments
      if (Object.keys(payments).length === 0) {
        const entireList = await getEntireTransaction(actualEndpoint)
        console.log('Success retrieving entire transaction!')
      }
    })()
  },
  computed: {
    authCode() {
      return this.$store.state.auth.code
    },
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

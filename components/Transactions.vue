<template>
  <c-box width="90%" justify="center">
    <c-flex v-if="loading" width="100%" justify="center" mt="4">
      <c-spinner
        thickness="5px"
        speed="0.65s"
        empty-color="gray.300"
        color="gray.400"
        size="xl"
      />
    </c-flex>
    <table
      v-chakra
      v-else
      rounded="md"
      width="100%"
      bg="white"
      font-weight="medium"
      font-size="sm"
      color="gray.500"
      box-shadow="sm"
      overflow="hidden"
    >
      <tr v-chakra rounded="md" bg="gray.50">
        <th v-chakra font-weight="medium" color="gray.600">Payment No.</th>
        <th v-chakra font-weight="medium" color="gray.600">Items</th>
        <th v-chakra font-weight="medium" color="gray.600">Price</th>
        <th v-chakra font-weight="medium" color="gray.600">Time</th>
      </tr>
      <tr
        v-chakra
        v-for="transaction in latest_transactions"
        :key="transaction.id"
        border-top-width="1px"
        border-color="gray.100"
      >
        <td>{{ transaction.payment_no }}</td>
        <td>{{ transaction.name }}</td>
        <td v-chakra display="flex" font-weight="semibold">
          <c-text v-chakra mr="1" font-weight="medium" color="gray.400">
            Rp
          </c-text>
          {{
            formatter
              .format(transaction.total_collected)
              .replace(/[a-z]{3}/i, '')
              .trim()
          }}
        </td>
        <td>{{ transaction.transaction_time }}</td>
      </tr>
    </table>
  </c-box>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.loading = true
  },
  mounted() {
    this.loading = false
  },
  computed: {
    formatter() {
      const value = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        currencyDisplay: 'code',
      })

      return value
    },
    ...mapGetters('transactions', {
      latest_transactions: 'GET_LATEST_TRANSACTION',
    }),
  },
}
</script>

<style></style>

<template>
  <c-flex direction="column" width="80%" align="center">
    <SecondaryNav
      name="Home"
      :isFetchingData="isFetchingTransaction"
      :progressCompleted="getProgressCompleted"
    />
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
            >{{ getRetentionRate }}%</c-text
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
import global from '@/mixins/global'

import SecondaryNav from '@/components/SecondaryNav'
import Transactions from '@/components/Transactions.vue'

export default {
  mixins: [global],
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

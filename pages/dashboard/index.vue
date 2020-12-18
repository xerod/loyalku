<template>
  <c-flex direction="column" width="100%" align="center">
    <c-flex
      width="90%"
      direction="row"
      align="center"
      justify="space-between"
      my="2"
    >
      <c-text fontWeight="semibold" color="gray.600" fontSize="lg">
        Home
      </c-text>
      <c-button-group>
        <c-button
          right-icon="arrow-forward"
          variant-color="red"
          size="sm"
          variant="outline"
        >
          Log out
        </c-button>
      </c-button-group>
    </c-flex>
    <c-divider width="90%" border-color="gray.300"></c-divider>
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
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">89%</c-text>
          <c-text color="green.500" ml="2">+1.57%</c-text>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >REPURCHASING RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">73%</c-text>
          <c-text color="green.500" ml="2">+1.57%</c-text>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
        <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
          >MULTI-PRODUCT PURCHASE RATE</c-text
        >
        <c-flex align="flex-end">
          <c-text fontSize="4xl" fontWeight="bold" color="gray.800">40</c-text>
          <c-text color="green.500" ml="2">+1.57%</c-text>
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
import Transactions from '@/components/Transactions.vue'

export default {
  data() {
    return {
      selected: 1,
    }
  },
  components: {
    Transactions,
  },
  mounted() {
    this.$store.dispatch('transactions/getLatestTransaction')
    this.$store.dispatch('profile/getUserData')
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

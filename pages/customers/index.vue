<template>
  <c-flex direction="column" width="80%" align="center">
    <SecondaryNav name="Customers" />
    <c-flex direction="column" width="90%">
      <c-text fontWeight="semibold" color="gray.600" mb="2" mt="4">
        Retention Overview
      </c-text>
      <c-grid template-columns="repeat(3, 1fr)" gap="4" direction="row" mb="8">
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >PELANGGAN BULAN LALU</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800">{{
              getCustomersAtBeginning
            }}</c-text>
          </c-flex>
        </c-box>
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >PELANGGAN BULAN INI</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800">{{
              getCustomersGained
            }}</c-text>
          </c-flex>
        </c-box>
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >PELANGGAN 6 BULAN TERAKHIR</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800">{{
              getCustomersAtTheEnd
            }}</c-text>
          </c-flex>
        </c-box>
      </c-grid>
    </c-flex>
    <c-flex direction="column" width="90%">
      <c-grid template-columns="repeat(2, 1fr)" gap="4" direction="row" mb="8">
        <c-box width="100%">
          <c-text fontWeight="semibold" color="gray.600" mb="2">
            Retention Rate Details
          </c-text>
          <table
            v-chakra
            rounded="md"
            width="100%"
            bg="white"
            font-weight="medium"
            color="gray.600"
            box-shadow="sm"
            overflow="hidden"
          >
            <tr>
              <th v-chakra font-weight="medium">
                Pertumbuhan Pelanggan Baru:
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Menunjukkan pertumbuhan pelanggan 6 bulan terakhir</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ getNewCustomersGrowth }}
              </td>
            </tr>
            <tr>
              <th v-chakra font-weight="medium">
                Jumlah Pelanggan Beralih:
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Jumlah kekurangan pelanggan dari rata-rata 6 bulan
                  terakhir</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ getNumberOfLostCustomers }}
              </td>
            </tr>
            <tr>
              <th v-chakra font-weight="medium">
                Tingkat Peralihan:
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Pelanggan yang beralih dibagi keseluruhan pelanggan</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ getAttritionRate }}%
              </td>
            </tr>
            <tr v-chakra bg="gray.50">
              <th v-chakra font-weight="bold" color="gray.600">
                Tingkat Retensi:
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Jumlah pelanggan bulan ini dibagi keseluruhan
                  pelanggan</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ getRetentionRate }}%
              </td>
            </tr>
          </table>
        </c-box>
        <c-box width="100%">
          <c-text fontWeight="semibold" color="gray.600" mb="2">
            Retention Value
          </c-text>
          <table
            v-chakra
            rounded="md"
            width="100%"
            bg="white"
            font-weight="medium"
            color="gray.600"
            box-shadow="sm"
            overflow="hidden"
          >
            <tr>
              <th v-chakra font-weight="medium">
                Avg. Sales per Customer
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Penjualan rata-rata yang didapat dari pelanggan</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ formatter.format(getAvarageSalesPerCustomer) }}
              </td>
            </tr>
            <tr
              v-chakra
              bg="gray.50"
              border-bottom="1px"
              border-color="gray.200"
            >
              <th v-chakra font-weight="bold" color="gray.600">
                Lost revenue
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Nilai pendapatan yang hilang selama 6 bulan terakhir</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ formatter.format(getLostRevenue) }}
              </td>
            </tr>
            <tr>
              <th v-chakra font-weight="medium">
                Operating Income (%)
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Didapat dari pendapatan kotor dikurangi pengeluaran
                  operasional</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
                pl="12"
              >
                <c-number-input
                  v-model="operatingIncome"
                  :max="100"
                  :min="0"
                  :step="0.1"
                  precision="2"
                >
                  <c-number-input-field />
                  <c-number-input-stepper>
                    <c-number-increment-stepper />
                    <c-number-decrement-stepper />
                  </c-number-input-stepper>
                </c-number-input>
              </td>
            </tr>
            <tr v-chakra bg="gray.50">
              <th v-chakra font-weight="bold" color="gray.600">
                Lost Operating Income:
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Nilai pendapatan operasional yang hilang selama 6 bulan
                  terakhir</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                {{ formatter.format(getLostOperatingIncome) }}
              </td>
            </tr>
          </table>
        </c-box>
      </c-grid>
    </c-flex>
  </c-flex>
</template>

<script>
import Transaction from '@/models/Transaction'
import SecondaryNav from '@/components/SecondaryNav'

export default {
  data() {
    return {
      isFetchingData: true,
      operatingIncome: 0,
    }
  },
  components: {
    SecondaryNav,
  },
  computed: {
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
</script>

<style></style>

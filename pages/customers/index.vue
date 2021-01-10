<template>
  <c-flex direction="column" width="80%" align="center">
    <SecondaryNav
      name="Customers"
      :isFetchingData="isFetchingTransaction"
      :progressCompleted="getProgressCompleted"
    />
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
            <tr v-chakra bg="gray.50">
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
              <td v-chakra width="40%" text-align="right" py="8">
                {{ formatter.format(getLostRevenue) }}
              </td>
            </tr>
          </table>
        </c-box>
      </c-grid>
    </c-flex>
  </c-flex>
</template>

<script>
import global from '@/mixins/global'

import SecondaryNav from '@/components/SecondaryNav'

export default {
  mixins: [global],
  components: {
    SecondaryNav,
  },
}
</script>

<style></style>

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
            >CUSTOMERS BEFORE</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800">0</c-text>
          </c-flex>
        </c-box>
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >CUSTOMERS GAINED</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800">0</c-text>
          </c-flex>
        </c-box>
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >CUSTOMERS AT THE END</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800">0</c-text>
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
                0
              </td>
            </tr>
            <tr>
              <th v-chakra font-weight="medium">
                Jumlah Pelanggan Pergi:
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Pelanggan yang hilang selama periode 6 bulan terakhir</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                0
              </td>
            </tr>
            <tr>
              <th v-chakra font-weight="medium">
                Tingkat Peralihan (%):
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
                0
              </td>
            </tr>
            <tr v-chakra bg="gray.50">
              <th v-chakra font-weight="bold" color="gray.600">
                Tingkat Retensi (%):
                <c-text
                  color="gray.400"
                  font-weight="normal"
                  font-size="sm"
                  line-height="1.25"
                  mt="1"
                  >Pelanggan yang menetap dibagi keseluruhan pelanggan</c-text
                >
              </th>
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                0
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
                0
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
              >
                0
              </td>
            </tr>
            <tr>
              <th v-chakra font-weight="medium" color="gray.600">
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
                0
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
              <td
                v-chakra
                width="40%"
                border-color="gray.100"
                text-align="right"
                py="8"
              >
                0
              </td>
            </tr>
          </table>
        </c-box>
      </c-grid>
    </c-flex>
  </c-flex>
</template>

<script>
import SecondaryNav from '@/components/SecondaryNav'

export default {
  components: {
    SecondaryNav,
  },
}
</script>

<style></style>

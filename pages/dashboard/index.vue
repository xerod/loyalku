<template>
  <c-flex direction="row" h="100vh" bg="gray.100">
    <c-flex
      width="20%"
      bg="white"
      direction="column"
      boxShadow="md"
      justify="start"
      align="center"
    >
      <logo width="140" height="70" />
      <c-flex width="90%" direction="column">
        <avatar />
        <c-input-group width="100%" mt="8">
          <c-input-left-element
            ><c-icon name="search-sm" color="gray.300"
          /></c-input-left-element>
          <c-input boxShadow="sm" type="phone" placeholder="Search" />
        </c-input-group>

        <c-list mt="4">
          <c-list-item>
            <c-pseudo-box
              display="flex"
              align-items="center"
              color="gray.600"
              rounded="md"
              p="3"
              :_hover="{ bg: 'gray.100', cursor: 'pointer' }"
            >
              <c-icon name="chart-pie-md" mr="3" size="22px" color="gray.400" />
              <c-text font-weight="medium" font-size="sm" justify="center">
                Dashboard
              </c-text>
            </c-pseudo-box>
          </c-list-item>
          <c-list-item>
            <c-pseudo-box
              display="flex"
              align-items="center"
              color="gray.600"
              rounded="md"
              p="3"
              :_hover="{ bg: 'gray.100', cursor: 'pointer' }"
            >
              <c-icon
                name="user-group-md"
                mr="3"
                size="22px"
                color="gray.400"
              />
              <c-text font-weight="medium" font-size="sm" justify="center">
                Customers
              </c-text>
            </c-pseudo-box>
          </c-list-item>
        </c-list>
      </c-flex>
    </c-flex>
    <c-flex direction="column" width="80%" align="center">
      <c-flex
        width="90%"
        direction="row"
        align="center"
        justify="space-between"
        mt="2"
        mb="1"
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
      <c-text
        width="90%"
        fontWeight="semibold"
        color="gray.600"
        fontSize="lg"
        mb="2"
        mt="4"
      >
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
              >89%</c-text
            >
            <c-text color="green.500" ml="2">+1.57%</c-text>
          </c-flex>
        </c-box>
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >REPURCHASING RATE</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800"
              >73%</c-text
            >
            <c-text color="green.500" ml="2">+1.57%</c-text>
          </c-flex>
        </c-box>
        <c-box width="100%" bg="white" rounded="md" box-shadow="sm" p="4">
          <c-text fontWeight="semibold" fontSize="xs" color="gray.500"
            >MULTI-PRODUCT PURCHASE RATE</c-text
          >
          <c-flex align="flex-end">
            <c-text fontSize="4xl" fontWeight="bold" color="gray.800"
              >40</c-text
            >
            <c-text color="green.500" ml="2">+1.57%</c-text>
          </c-flex>
        </c-box>
      </c-grid>
      <c-flex width="90%" mb="2" align="center">
        <c-text fontWeight="semibold" color="gray.800" fontSize="lg">
          Latest Transaction
        </c-text>
        <c-text fontSize="sm" color="gray.400" ml="2">Last 30 Days</c-text>
      </c-flex>
      <c-box width="90%" bg="white" rounded="md" box-shadow="sm" p="4">
        <table style="width: 100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </c-box>
    </c-flex>
  </c-flex>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Avatar from '@/components/Avatar.vue'

export default {
  data() {
    return {
      selected: 1,
    }
  },
  components: {
    Logo,
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
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-fastest {
  transition-duration: 75ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.transition-slow {
  transition-duration: 300ms;
}
.transition-slower {
  transition-duration: 500ms;
}
.transition-slowest {
  transition-duration: 700ms;
}

.transition-all {
  transition-property: all;
}
.transition-opacity {
  transition-property: opacity;
}
.transition-transform {
  transition-property: transform;
}

.focus-visible.focus-visible\:underline {
  text-decoration: underline;
}
</style>

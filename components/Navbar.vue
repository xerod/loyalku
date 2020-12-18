<template>
  <c-flex
    :width="{
      base: '0%',
      lg: '25%', // 992px upwards
    }"
    bg="white"
    direction="column"
    boxShadow="md"
    justify="start"
    align="center"
  >
    <Logo width="140" height="70" />
    <c-flex width="90%" direction="column">
      <Avatar />
      <c-input-group width="100%" mt="8">
        <c-input-left-element
          ><c-icon name="search-sm" color="gray.300"
        /></c-input-left-element>
        <c-input
          boxShadow="sm"
          border-color="gray.200"
          type="phone"
          placeholder="Search"
        />
      </c-input-group>

      <c-list mt="4" spacing="2">
        <c-list-item>
          <nuxt-link to="/dashboard">
            <c-pseudo-box
              role="group"
              display="flex"
              align-items="center"
              rounded="lg"
              px="4"
              py="2"
              :color="$route.name == 'dashboard' ? 'gray.700' : 'gray.500'"
              :bg="$route.name == 'dashboard' ? 'gray.100' : 'transparent'"
              :_hover="{ cursor: 'pointer', color: 'gray.700' }"
            >
              <c-pseudo-box
                d="flex"
                :color="$route.name == 'dashboard' ? 'gray.500' : 'gray.400'"
                :_groupHover="{ color: 'gray.500' }"
              >
                <c-icon name="chart-pie-md" mr="3" size="24px" />
              </c-pseudo-box>
              <c-text font-weight="semibold" font-size="sm" justify="center">
                Dashboard
              </c-text>
            </c-pseudo-box>
          </nuxt-link>
        </c-list-item>
        <c-list-item>
          <nuxt-link to="customers">
            <c-pseudo-box
              role="group"
              display="flex"
              align-items="center"
              rounded="lg"
              px="4"
              py="2"
              :color="$route.name == 'customers' ? 'gray.700' : 'gray.500'"
              :bg="$route.name == 'customers' ? 'gray.100' : 'transparent'"
              :_hover="{ cursor: 'pointer', color: 'gray.700' }"
            >
              <c-pseudo-box
                d="flex"
                :color="$route.name == 'customers' ? 'gray.500' : 'gray.400'"
                :_groupHover="{ color: 'gray.500' }"
              >
                <c-icon name="user-group-md" size="24px" mr="3" />
              </c-pseudo-box>

              <c-text font-weight="semibold" font-size="sm"> Customers </c-text>
            </c-pseudo-box>
          </nuxt-link>
        </c-list-item>
      </c-list>
    </c-flex>
  </c-flex>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Logo,
    Avatar,
  },
}
</script>

<style></style>

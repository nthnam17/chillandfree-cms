<template>
  <!-- <div class="">
    <Router-link to="/" class="d-flex justify-center algin-center">
      <v-img src="/logo.png" width="120px" height="180px"></v-img>
    </Router-link>
  </div>
  <div>
    <div class="scrollnavbar">
      <v-list class="pa-4" density="comfortable">
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <v-list-subheader
            v-if="item.header"
            color="darkText"
            class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold"
          >
            {{ item.header }}
          </v-list-subheader>

          <v-list-group
            v-else-if="item.children"
            :value="item.to"
            :append-icon="
                            checkGroup(item?.to as string)
                                ? 'material-symbols-light:keyboard-arrow-down'
                                : 'material-symbols-light:keyboard-arrow-right'
                        "
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                rounded="1"
                class="mb-1"
                v-bind="props"
                v-if="checkRole(item)"
                :disabled="item.disabled"
                density="comfortable"
              >
                <v-list-item-title :title="item.title">{{
                  item.title
                }}</v-list-item-title>
                <v-list-item-subtitle
                  v-if="item.subCaption"
                  class="text-caption mt-n1 hide-menu"
                >
                  {{ item.subCaption }}
                </v-list-item-subtitle>

                <template v-slot:prepend>
                  <span>
                    <v-icon size="22">{{ item.icon }}</v-icon>
                  </span>
                </template>
              </v-list-item>
            </template>

            <nav-item
              v-for="(sub, k) in item.children"
              :key="k"
              :item="sub"
              :is="checkRole(sub)"
            />
          </v-list-group>

          <nav-item
            v-else
            :item="item"
            :key="i"
            type="item"
            :is="checkRole(item)"
          />
        </template>
      </v-list>
    </div>
  </div> -->
</template>

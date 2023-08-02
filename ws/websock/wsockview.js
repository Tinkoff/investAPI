import { useQuasar } from 'Quasar'
import { useStore } from 'vuex'
import { ref, onUpdated } from 'vue'

const WSockView  = {
      template: `
        <div class="q-pa-md">
        <q-layout view="hHh Lpr lff" container style="height: 700px" class="rounded-borders">
            <q-header elevated>
                <q-toolbar>

                <q-btn-group>
                                <q-btn-dropdown
                                      split
                                      size="sm"
                                      :label="methodName"
                                      :loading="isPending"
                                        color="black"
                                      @click="doSend"
                                    >
                                      <q-list>
                                        <q-item v-for="method in methods" v-close-popup>
                                          <q-item-section>
                                            <q-item-label><routerLink :to="method">{{method}}</routerLink></q-item-label>
                                          </q-item-section>
                                        </q-item>

                                      </q-list>
                                    </q-btn-dropdown>

                    <q-btn icon-right="send"  label="Send" @click="doSend"
                     :loading="isPending"
                     size="sm" color="black">
                                        <template v-slot:loading>
                                         <q-spinner size="sm" :thickness="10" />
                                        </template>
                    </q-btn>

                    <q-btn icon-right="settings" label="Settings"
                    @click="setupSecret" size="sm" color="black">
                    <q-tooltip :offset="[0, 8]">Settings</q-tooltip>
                    </q-btn>



                    <q-btn icon-right="close" label="Disconnect" @click="doDisconnect" size="sm" color="black">
                     <q-tooltip :offset="[0, 8]">Disconnect</q-tooltip>
                    </q-btn>


                </q-btn-group>
                <q-toolbar-title color="black">WebsocketClient</q-toolbar-title>
                    <div :class="{invisible: isNotConnected}" >
                        <q-spinner size="sm" :thickness="10" color="black" />
                        <q-tooltip :offset="[0, 8]">{{stateText}}</q-tooltip>
                    </div>
                </q-toolbar>
          </q-header>

         <q-page-container>
            <q-page padding>
                <q-splitter v-model="splitterModel" :limits="[30,40]">
                <template v-slot:before>
                    <q-card>
                        <q-card-section>
                      <label class="text-subtitle2">Request</label>
                      <q-input v-model="request"
                                filled
                                rows="31"
                                type="textarea"
                              />
                                 </q-card-section>
                   </q-card>
                </template>
                <template v-slot:after>
                   <q-card>
                      <q-card-section>
                      <label class="text-subtitle2">Messages</label>
                      <q-list dense bordered padding class="rounded-borders">
                         <q-expansion-item v-for="log in streamLog" :label="log.label" :key="log.id" dense dense-toggle expand-separator>
                           <q-card>
                               <q-card-section>
                               <pre>{{log.data}}</pre>

                               </q-card-section>
                           </q-card>
                         </q-expansion-item>
                       </q-list>

                      </q-card-section>
                   </q-card>
                </template>

                </q-splitter>


              <!-- place QPageScroller at end of page -->
              <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                <q-btn fab icon="keyboard_arrow_up"  />
              </q-page-scroller>
            </q-page>
         </q-page-container>
        </q-layout>

        </div>
      `,
        data () {
            return {
              token: null,
              leftDrawerOpen: true,
              errorShow: true,
              splitterModel: 30,
            }
          },
        computed: {
          state () {
            return this.$store.state.connection_state
          },
          stateText() {
            return (this.$store.state.connection_state == 0)? 'Connected': 'Disconnected'
          },
          isNotConnected() {
            return (this.$store.state.connection_state != 0)
          },
          isConnected() {
                      return (this.$store.state.connection_state == 0)
                    },
          isPending() {
             return (this.$store.state.connection_state == 1)
          },
          isError() {
            return (this.$store.state.error != null)
          },
          textOut() {
            var s = '';
            this.$store.state.responses.forEach(resp=>s =  JSON.stringify(resp, null, 2)+ '\n\n' + s )
            return s;
          },
          streamLog() {
            return this.$store.state.streamLog.slice(-1000).reverse();
          },
          methodName() {
            return this.$route.meta.methodName;
          },
          methods() {
            return [
            '/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream',
            '/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream',
            '/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream',
            '/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream',

            ]
          },
          request: {
            get() {
              return this.$store.state.request.json;
                             },
            set(value) {
                this.$store.commit('updateRequest', value)
            }
          },
          error() {
            return (this.$store.state.error && this.$store.state.error.target)?
                (this.$store.state.error.target.constructor)?"Unexpected error on " + (this.$store.state.error.target.constructor.name)
                    : this.$store.state.error
                : (this.$store.state.error)?this.$store.state.error:null;
          }
        },
        methods: {
            doSend() {
                if (!this.$store.state.token) {
                    this.$store.commit('onError', 'Token not set. Please setup token in settings');
                    this.notifyError('Token not set. Please setup token in settings')
                    this.$store.commit('onDisconnect');
                    return false;
                }
                this.$store.dispatch('connect', this.request)
            },
            doDisconnect() {
                this.$store.dispatch('disconnect', this.request)
            }
        }
    }



export default {
    setup() {
        const $q = useQuasar();
        const $store = useStore();
        function setupSecret() {
            $q.dialog({
                    title: 'Settings',
                    message: 'Enter auth token',
                    prompt: {
                      model: $store.state.token,
                      type: 'text'
                    },
                    cancel: true,
                    persistent: true
                  }).onOk(data => {
                    $store.commit('onAuthToken', data)
                    // console.log('>>>> OK, received', data)
                  }).onCancel(() => {
                    // console.log('>>>> Cancel')
                  }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                  })
        }
        function notifyOk(msg) {
            $q.notify({
                      type: 'positive',
                      position: 'top-right',
                      message: msg
                    })
        }
        function notifyError(error) {
                 $q.notify({
                      type: 'negative',
                      position: 'top-right',
                      message: error
                    })
        }
        onUpdated(() => {
            if ($store.state.error) {
                notifyError($store.state.error)
            }
        });
        $store.commit('init', {notifyOk, notifyError})
        return {setupSecret, notifyOk, notifyError};
    }, ...WSockView

}
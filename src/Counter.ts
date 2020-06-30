import { ref, defineComponent } from 'vue'

// https://composition-api.vuejs.org/zh/api.html#setup
// interface Data {
//   [key: string]: unknown
// }
// interface SetupContext {
//   attrs: Data
//   slots: Slots
//   emit: (event: string, ...args: unknown[]) => void
// }
export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'haha'
    },
    result: {
      validator: (val: string) => {
        return ['success', 'warning', 'danger'].indexOf(val) !== -1
      }
    },
    precision: {
      validator: () => {
          return true
       }
    }
  },
  setup(props, context) {
    console.log(props.name, context)
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc
    }
  }
})
<script>
export default {
  name: 'CustomForm',
  props: {
    fields: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    size: {
      type: String,
      default: 'small'
    },
    labelWidth: {
      type: String,
      default: '120px'
    }
  },
  data () {
    return {
      formValues: this.value
    }
  },
  watch: {
    formValues: {
      handler (newValues) {
        this.$emit('input', newValues)
      }
    }
  },
  render (h) {
    const vm = this
    return h(
      'el-form',
      {
        props: {
          // labelWidth: vm.labelWidth
          // model: vm.formValues
        }
      },
      [...(vm.renderFormItems(h) || [])]
    )
  },
  methods: {
    renderFormItem (h, { tag, details = {}, displayKey }) {
      const vm = this
      const { formValues, size } = vm
      const isDisplay = displayKey ? formValues[displayKey] : true
      if (!isDisplay) return false
      const { name, label } = details
      const value = formValues[name] || null
      const modelEvents = {
        input: function (value) {
          formValues[name] = value
        }
      }

      let children = []
      if (tag === 'el-input-number') {
        const defaultProps = {
          controlsPosition: 'right'
        }
        const inputNumber = h(tag, {
          // 组件 prop
          props: {
            ...defaultProps,
            value,
            ...details
          },
          // 事件
          on: {
            ...modelEvents
          }
        })
        children = [inputNumber]
      } else {
        const input = h(tag || 'el-input', {
          props: {
            value,
            ...details
          },
          on: {
            ...modelEvents
          }
        })
        children = [input]
      }
      return h(
        'el-form-item',
        {
          props: {
            size,
            label,
            prop: name
          }
        },
        children
      )
    },
    renderFormItems (h) {
      const vm = this
      return vm.fields.map((item, index) => {
        return vm.renderFormItem(h, item, index)
      })
    }
  }
}
</script>

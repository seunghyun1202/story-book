export default {
  title: 'Button',
  argTypes: {
    btnClass: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary'
    },
    btnSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      defaultValue: ''
    },
    btnText: {
      control: 'text',
      defaultValue: 'Awesome Button'
    },
    isDisable: { control: 'boolean' },
  }
}

export const custom = (arg, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: '<test v-bind="$props" />'
})

export const primary = () => ({
  template: '<test btnClass="primary" />'
})

export const secondary = () => ({
  template: '<test btnClass="secondary" />'
})

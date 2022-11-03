import Vue from 'vue'
import { ValidationProvider, extend, validate } from 'vee-validate'

// Add a rules.
extend('test', {
  validate: (value) => value === 'test',
  message: 'This is not the magic word',
})

extend('one-of', {
  validate(value, values) {
    return values.includes(value)
  },
  // TODO: get values from validator to send requirements
  message: (field, values) => {
    return `The ${JSON.stringify(values)} must be one of${console.log(
      JSON.parse(JSON.stringify(values))
    )}`
  },
})

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    }
  },
  message: 'Required enabled by default',
  computesRequired: true,
})

extend('email', {
  validate(value) {
    return {
      required: true,
      valid: String(value)
        .toLowerCase()
        .match(
          //  eslint-disable-next-line max-len
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
    }
  },
  message: 'Use a valid email',
  computesRequired: true,
})

extend('password', {
  validate: (value) => {
    //  eslint-disable-next-line prefer-regex-literals
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})'
    )
    return strongRegex.test(value)
  },
  message:
    'Need uppercase-letter, lowercase-letter, number and special-character',
  computesRequired: true,
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)

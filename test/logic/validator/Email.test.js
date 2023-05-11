import { describe, assert, expect, test } from 'vitest'
import { validator } from '@ER/hooks/use-logic'
const field = {
  type: 'input',
  label: 'Email',
  icon: 'email',
  key: 'input_dkY3cEvdfnJ-2Y6IP9pkf',
  id: 'dkY3cEvdfnJ-2Y6IP9pkf',
  options: {
    clearable: true,
    renderType: 2,
    disabled: false,
    showPassword: false,
    defaultValue: '',
    placeholder: 'Please enter',
    labelWidth: 100,
    isShowLabel: true,
    required: false
  },
  style: { width: { pc: '100%', mobile: '100%' } }
}
describe('Email', () => {
  test('equal', () => {
    expect(
      validator({
        operator: 'equal',
        value: '123'
      },
      '123',
      field)).toBeTruthy()
  })
  test('not_equal', () => {
    expect(
      validator({
        operator: 'not_equal',
        value: '123'
      },
      '123',
      field)).toBeFalsy()
  })
  test('contains', () => {
    expect(
      validator({
        operator: 'contains',
        value: [
          '123'
        ]
      },
      '123',
      field)).toBeTruthy()
  })
  test('not_contain', () => {
    expect(
      validator({
        operator: 'not_contain',
        value: [
          '123'
        ]
      },
      '123',
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'not_contain',
        value: [
          '123'
        ]
      },
      '456',
      field)).toBeTruthy()
  })
  test('empty', () => {
    expect(
      validator({
        operator: 'empty'
      },
      '',
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'empty'
      },
      undefined,
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'empty'
      },
      null,
      field)).toBeTruthy()
  })
  test('not_empty', () => {
    expect(
      validator({
        operator: 'not_empty'
      },
      '',
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'not_empty'
      },
      undefined,
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'not_empty'
      },
      null,
      field)).toBeFalsy()
  })
})

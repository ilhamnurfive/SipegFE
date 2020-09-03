import {
  extend
} from 'vee-validate';
import {
  required,
  numeric,
  max
} from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Field tidak boleh kosong'
});

extend('numeric', {
  ...numeric,
  message: 'Input tidak valid'
});

extend('positive', value => {
  if (value >= 0) {
    return true;
  }
  return 'Harus bernilai positif';
});

extend('selectnull', value => {
  if (value != -1) {
    return true;
  }
  return 'Silahkan pilih salah satu';
});

extend('year', value => {
  if (`${value}`.length === 4) {
    return true;
  }
  return 'Tahun tidak valid';
});

extend('month', value => {
  if (value.length <= 20) {
    return true;
  }
  return 'Bulan tidak valid';
});


extend('between', {
  params: ['min', 'max'],
  validate(value, {
    min,
    max
  }) {
    return value.length >= min && value.length <= max;
  },
  message: 'This field value must be between {min} and {max}'
});
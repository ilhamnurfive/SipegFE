import qs from 'qs'

const j_filters = (value) => {
  let data_wrap = null

  if (!value) {
    data_wrap = null
  } else {
    const data_convert = Object.keys(value)
    let data_wrap_temp = {}

    data_convert.forEach((d) => {
      if (value[d]) data_wrap_temp[d] = value[d]
    })

    data_wrap = qs.stringify(data_wrap_temp)
  }

  return data_wrap
}

export default j_filters

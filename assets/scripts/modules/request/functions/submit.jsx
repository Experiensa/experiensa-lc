import axios from 'axios';
import qs from 'qs';
import { SubmissionError } from 'redux-form';
require('es6-promise').polyfill();

function submit(formData) {
  let params = {'action': 'requestVoyageForm', 'formData': formData};
  const url = experiensa_vars.ajaxurl;
  return axios
  .post(url, qs.stringify(params))
  .then((response)=>{
    const rs = response.data;
    if (rs.error) {
      throw new SubmissionError({
        _error: rs.message
      });
    }
  });
}

export default submit;

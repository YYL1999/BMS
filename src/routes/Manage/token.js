import qiniu from 'qiniu'
qiniu.conf.ACCESS_KEY = 'vlDzg2MCXjycx_fXYc0VHkODok8rCrk_40AOFeBy'
qiniu.conf.SECRET_KEY = '3sVvdtUr4jw72GG4gFIDpFbXBMnNa_airmEs-1Rx'
const bucket = 'lpf123'
const getToken = () => {
  const putPolicy = new qiniu.rs.PutPolicy({
    scope: bucket
  })
  return putPolicy.uploadToken()
}
export default getToken
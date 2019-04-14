import React, {Component} from 'react'
import {Upload,Modal,Button,Icon} from 'antd'
import getToken from'../token'
import styles from './index.less'

const QINIU_SERVER = 'http://up.qiniu.com' // 根据存储区域修改上传域名
const BASE_QINIU_URL = 'lpf.yywlx.cn'  // 空间 bucket 绑定的域名

class uploadPicture extends Component {
    constructor(props){
        super(props)
        this.state={
            loading: false,
            iconLoading: false,
            visible:false,
        }
    }
    handleCancel = () => {
        this.setState({
          visible: false,
          previewVisible: false
        });
      }
    handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        })
      }
      handleChange = ({file, fileList}) => {
        const {uid, name, type, thumbUrl, status, response = {}} = file
        const fileItem = {
          uid,
          name,
          type,
          thumbUrl,
          status,
          url: 'http://'+BASE_QINIU_URL + '/'+(response.hash || '')
        }
        console.log(fileItem.url)
        fileList.pop()
        fileList.push(fileItem)
         this.setState({fileList})
        const body={
         url:'http://'+BASE_QINIU_URL+'/'+(response.hash||''),
         gid:1
        }
        console.log(body.url)
        this.setState({
          imageUrl:body.url
        })
      }
      getUploadToken = () =>{
        const token = getToken() // 从服务器获取 token
        this.setState({token})
      }
    render(){
        const {previewVisible, previewImage, fileList} = this.state
        const uploadProps = {
            action: QINIU_SERVER,
            data: {
              token: this.state.token
            },
            listType: 'picture-card',
            className: 'upload-list-inline',
            fileList,
            beforeUpload: this.getUploadToken,
            onPreview: this.handlePreview,
            onChange: this.handleChange
          }
        return(
            <div>
                <div className="clearfix">
                 <Upload {...uploadProps}>
                    <div>
                      <Icon type='plus' />
                       <div className='ant-upload-text'>图片上传</div>
                   </div>
                 </Upload>
               </div>
               <div>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                       <img style={{width: '100%'}} src={previewImage} alt='pictures' />
                    </Modal>
               </div>
               <div className={styles.submit}>
                 <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
                  提交
                 </Button>
                </div>
            </div>
        )
    }
}
export default uploadPicture
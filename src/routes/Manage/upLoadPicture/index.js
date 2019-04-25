import React, {Component} from "react";
import {Upload,Modal,Button,Icon, Form,Input,message} from "antd";
import getToken from"../../../utils/token";
import styles from "./index.less";
const Dragger = Upload.Dragger;
const QINIU_SERVER = "http://up.qiniu.com"; // 根据存储区域修改上传域名
const BASE_QINIU_URL = "lpf.yywlx.cn";  // 空间 bucket 绑定的域名


@Form.create()
class uploadPicture extends Component {
	constructor(props){
		super(props);
		this.state={
			loading: false,
			iconLoading: false,
			visible:false,
		};
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
    	});
    }
      // handleChange = ({file, fileList}) => {
      // 	const {uid, name, type, thumbUrl, status, response = {}} = file;
      // 	const fileItem = {
      // 		uid,
      // 		name,
      // 		type,
      // 		thumbUrl,
      // 		status,
      // 		url: "http://"+BASE_QINIU_URL + "/"+(response.hash || "")
      // 	};
      // 	fileList.pop();
      // 	fileList.push(fileItem);
      // 	this.setState({fileList});
      // 	const body={
      // 		url:"http://"+BASE_QINIU_URL+"/"+(response.hash||""),
      // 		gid:1
      // 	};
      // 	if(body.url!="http://lpf.yywlx.cn/"){
      // 		console.log(body.url);
      // 	}
      // 	this.setState({
      // 		imageUrl:body.url
      // 	});
      // }
      getUploadToken = () =>{
      	const token = getToken(); // 从服务器获取 token
      	this.setState({token});
      }
      loginSubmit = (e) => {
      	e.preventDefault();
      	this.props.form.validateFields((err, values) => {
      		if (!err) {
          
        

           
      		}
      	});
      }
      render(){
      	const {getFieldDecorator} = this.props.form;
      	const {previewVisible, previewImage, fileList} = this.state;
      	const uploadProps = {
      		action: QINIU_SERVER,
      		data: {
      			token: this.state.token
      		},
      		listType: "picture-card",
      		className: "upload-list-inline",
      		fileList,
      		beforeUpload: this.getUploadToken,
      		onPreview: this.handlePreview,
      		onChange: this.handleChange
      	};
      	const props = {
      		name: "file",
      		multiple: true,
      		action: QINIU_SERVER,
      		data: {
      			token: this.state.token
      		},
      		beforeUpload: this.getUploadToken,
      		onPreview: this.handlePreview,
      		onChange(info) {
      			const status = info.file.status;
      			if (status !== "uploading") {
      				console.log(info.file, info.fileList);
      			}
      			const body={
      				url:"http://"+BASE_QINIU_URL+"/"+(info.file.response?info.file.response.hash:" "),
      				gid:1
      			};
      			if(body.url!="http://lpf.yywlx.cn/"){
      				console.log(body.url);
      			}
      			if (status === "done") {
      				message.success(`${info.file.name} file uploaded successfully.`);
      			} else if (status === "error") {
      				message.error(`${info.file.name} file upload failed.`);
      			}
      		},
      	};
      	return(
      		<div>
      			<div className="clearfix">
      				<Upload {...uploadProps}>
      					<div>
      						<Icon type='plus' />
      						<div className='ant-upload-text'>PPT上传</div>
      					</div>
      				</Upload>
      			</div>
      			<Dragger {...props}>
      				<p className="ant-upload-drag-icon">
      					<Icon type="inbox" />
      				</p>
      				<p className="ant-upload-text">Click or drag file to this area to upload</p>
      				<p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      			</Dragger>
      			<div>
      				<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
      					<img style={{width: "100%"}} src={previewImage} alt='pictures' />
      				</Modal>
      			</div>
      			<div className={styles.submit}>
      				<Form onSubmit={this.loginSubmit}>
      					<Form.Item>
      						{getFieldDecorator("name", {
      							rules: [{ required: true, message: "请输入课堂名称" }]
      						})(
      							<Input  placeholder='请输入课堂名称' style={{width:"140px"}}/>
      						)}
      					</Form.Item>
      				</Form>
      				<Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
                  提交
      				</Button>
      			</div>
      		</div>
      	);
      }
}
export default uploadPicture;
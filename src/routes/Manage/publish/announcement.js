import React, {Component} from "react";
import {Modal,Table,Button,Divider,Popconfirm,message} from "antd";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

const editorProps = {
	height: 500,
	contentFormat: "html",
	initialContent: "<p>请输入内容</p>",
};
const EditableContext = React.createContext();
class announcement extends Component {
	constructor(props){
		super(props);
		this.state={
			allContent:"",
			checkContent:"",
			loading: false,
			iconLoading: false,
			visible:false,
		};
	}
    handleChangeContent=(form,aid)=>{
    	const body={
    		...aid
    	};
    	this.editorInstance.setContent("XXX");
    	this.setState({
    		// title:recieve.title,
    		status:true,
    		fileList: [{
    			uid: -1,
    			name: "删除完成",
    			status: "done",
    		}],
    	});
    }   
        confirm=(form, aid)=> {
        	const body={
        		...aid,
        	};
        	const newData = [...this.state.allContent];
        	const index = newData.findIndex(item => aid === item.aid);//找到该信息在数组中的的索引值
        	newData.splice(index,1);
        	this.setState({
        		allContent:newData
        	});
        }
    confirm=(form, aid)=> {
    	const newData = [...this.state.allContent];
    	const index = newData.findIndex(item => aid === item.aid);//找到该信息在数组中的的索引值
    	newData.splice(index,1);
    	this.setState({
    		allContent:newData
    	});
    }
      handleOk = () => {
      	this.setState({
      		visible: false,
      	});
      }
      handleCancel = () => {
      	this.setState({
      		visible: false,
      		previewVisible: false
      	});
      }
      render(){
      	const columns = [{
      		title: "文章内容",
      		dataIndex: "title",
      		key: "title",
      	},   {
      		title: "操作",
      		key: "action",
      		render: (text, record) => (
      			<span>
      				<EditableContext.Consumer>
      					{form => (
      						<Button onClick={()=>{this.handleChangeContent(form,record.aid);}}>修改</Button>
      					)}
      				</EditableContext.Consumer>
      				<Divider type="vertical" />
      				<EditableContext.Consumer>
      					{form => (
      						<Popconfirm title="请确定是否删除" onConfirm={()=>{this.confirm(form,record.aid);}} onCancel={this.cancel} okText="是" cancelText="否">
      							<Button>删除</Button>
      						</Popconfirm>
      					)}
      				</EditableContext.Consumer>
      			</span>
      		),
      	}];
      	return(
      		<div>
      			<Modal
      				title="文章内容"
      				visible={this.state.visible}
      				onOk={this.handleOk}
      				onCancel={this.handleCancel}
      				cancelText='退出'
      				okText='确定'
      				width='1000px'
      			>
      				<div>
      					{this.state.checkContent}
      				</div>
      			</Modal>
      			<div>
      				<BraftEditor ref={instance => this.editorInstance = instance}{...editorProps}/>  
      			</div>
      			<div className={StyleSheet.table}>
      				<Table columns={columns} dataSource={this.state.allContent} />
      			</div>
      		</div>
      	);
      }
}
export default announcement;
import React, { Component} from 'react'
import { connect } from 'dva'
import { Form, Icon, Input, Button, message } from 'antd'
import createHistory from 'history/createHashHistory';
import 'antd/dist/antd.css'
import styles from './index.less'

const FormItem = Form.Item
const history = createHistory();
@Form.create()
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
        history.push('./manage/index')
    //   if (!err) {
    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(values)
    //     }).then((res) => {
    //       return res.json()
    //     }).then((json) => {
    //       console.log(json)
    //       if (json.result === false) {
    //         message.error('账户或密码错误')
    //       }
    //       if (json.result === true || json.result) {
    //         // 保存后台返回的token
    //        // sessionStorage.setItem("token",json.result)
    //         message.success('登陆成功')
    //         history.push('/manage/index');
    //       }
    //     })
    //   }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator('account', {
            rules: [{ required: true, message: '请输入账户' }]
          })(
            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入账户' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码' type='password' />
          )}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit' className={styles.loginFormButton}>
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default connect(({app}) => ({app}))(Login)

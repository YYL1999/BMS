import React, { Component} from 'react'
import { connect } from 'dva'
import {routerRedux} from 'dva/router'
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
    const that =this
    this.props.form.validateFields((err, values) => {
        // history.push('./manage/index')
        that.props.dispatch(
          routerRedux.push('./manage/index')
        )
        // that.props.dispatch({

        // })
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

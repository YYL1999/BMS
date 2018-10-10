import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styles from'./content.less'
import Menu from './upLoadPicture/index'
import announcement from './publish/announcement'
import 'antd/dist/antd.css'

const { Content } = Layout
export default class Contents extends React.Component {
  render() {
    return (
      <Content className={styles.content}>
        <Route path="/manage/index" component={Menu} />
        <Route path="/manage/announcement" component={announcement} />
      </Content>
    );
  }
}
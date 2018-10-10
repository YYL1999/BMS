import React from 'react'
import { Layout } from 'antd'
import styles from './bottom.less'
import 'antd/dist/antd.css'

const { Footer } = Layout

export default class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }

    tick = () => {
        this.setState({ timer:this.state.timer + 1 });
    }

    // 组件渲染后开始循环执行tick函数
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    // 组件将要死亡时清除计时器，不清除也可以
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Footer className={styles.bottomAnimatedBounceInLeft}>
                <div className={styles.text}>
                    <div>
                        <span className={styles.me}>© 2018 雷鹏飞</span>
                        <span className={styles.stay}>您已在小窝里逗留了 <span className={styles.time}>{this.state.timer}</span> 秒</span>
                    </div>
                </div>
            </Footer>
        );
    }
}
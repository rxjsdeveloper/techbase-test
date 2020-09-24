import React from 'react';
import {Layout} from 'antd';
import {StyledContent, StyledTitle} from './styled';
import 'antd/dist/antd.css';

const {Header, Content, Footer} = Layout;

const BaseLayout = ({title, children}) => {
    return (
        <Layout className="layout" theme="dark">
            <Header>
                <StyledTitle>{title}</StyledTitle>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <StyledContent>{children}</StyledContent>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Mylab @2020 By Ngan Nguyen
            </Footer>
        </Layout>
    );
};

export default BaseLayout;

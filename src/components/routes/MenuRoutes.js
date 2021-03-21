import {
    Link
} from "react-router-dom";
import { Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined
} from '@ant-design/icons';

export const MenuRoutes = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/products">Products</Link>
            </Menu.Item>
        </Menu>
    );
}
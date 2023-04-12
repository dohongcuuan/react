import React, { useState , useEffect} from 'react'
import { Link, Outlet , useNavigate } from 'react-router-dom';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const UserList = ['Admin', 'Website', 'ReactJS'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    // getItem(<Link style={{ textDecorationLine: 'none' }} to={``}>Home Admin</Link>, 'sub1', <UserOutlined />),
    // getItem(<Link style={{ textDecorationLine: 'none' }} to={`/admin/products/add`}>Thêm sản phẩm</Link>, '1', <PieChartOutlined />),
    getItem(<Link style={{ textDecorationLine: 'none' }} to={`products/list`}>List sản phẩm</Link>, '2', <DesktopOutlined />),
    getItem(<Link style={{ textDecorationLine: 'none' }} to={`categorys/list`}>List danh mục </Link>, '9', <FileOutlined />),
    // getItem(<Link style={{ textDecorationLine: 'none' }} to={`categorys/add`}>Thêm danh mục</Link>, '3', <PieChartOutlined />),
];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
};


const AdminLayout: React.FC  = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // kiểm tra token có tồn tại hay không
      }, []);
      
      const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false); // đăng xuất
        navigate("/products");
      };

  const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();
    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const [gap] = useState(GapList[0]);
    const changeUser = () => {
        const index = UserList.indexOf(user);
        setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
        setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{ height: 35, margin: 16 }} >
                        <div>             
                            {isLoggedIn && (
                                    <Button type="primary" onClick={handleLogout}>
                                        Đăng xuất
                                    </Button>
                                    )}
                                    {/* {!isLoggedIn && ( 
                                    <Button type="primary" onClick={() => navigate("/login")}>
                                        Đăng nhập
                                    </Button>
                                    
                                    )} */}

                            <Button
                                size="small"
                                style={{ margin: '0 15px', verticalAlign: 'middle' }}
                                onClick={changeUser}
                            >
                               <Link to={`/`}></Link>
                            </Button>
                            
                        </div>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> Assignment</Footer>
                </Layout>
            </Layout>
        </div>
    )
}


export default AdminLayout

/**
 * @desc 路由组件页面(一般情况下路由在此页面更改即可)
 * @author lsy
 * 
 * @param {boolean} [hideChildren] - 左侧菜单该条目下所有均不显示
 * @param {boolean} [hideInMenu] - 左侧菜单中单条不显示
 */

import Home from '@/containers/Home'
import Icons from '@/containers/Pages/Icons'
import SetUp from '@/containers/Pages/SetUp'
import User from '@/containers/Pages/User'
import UserInfo from '@/containers/Pages/User/UserInfo'
import Jurisdiction from '@/containers/Pages/Jurisdiction'
import UpLoad from '@/containers/Pages/UpLoad'
import UpLoadExcel from '@/containers/Pages/Excel/UpLoadExcel'
import DownLoadExcel from '@/containers/Pages/Excel/DownLoadExcel'
import Part1_1 from '@/containers/Pages/Part/Part1/Part1_1'
import Part1_2 from '@/containers/Pages/Part/Part1/Part1_2'
import Part2 from '@/containers/Pages/Part/Part2'
import FriendLink from '@/containers/Pages/FriendLink'
import Dragable from '@/containers/Pages/Dragable'

const router = [
    {
        name: "首页",
        path: "/",
        component: Home,
        type: "admin-icon-liebiao"
    },
    {
        name: "图标库",
        path: "/Icons",
        component: Icons,
        type: "admin-icon-tiaoshi",
    },
    {
        name: "设置",
        path: "/SetUp",
        component: SetUp,
        hideInMenu: true
    },
    {
        name: "用户组",
        path: "/User",
        component: User,
        type: "admin-icon-icon_zhanghao",
        hideChildren: true, 
        children: [
            {
                name: "新建用户",
                path: "/UserInfo",
                component: UserInfo,
                hideInMenu: true
            }
        ]
    },
    {
        name: "用户权限",
        path: "/Jurisdiction",
        component: Jurisdiction,
        type: "admin-icon-zuzhiqunzu"
    },
    {
        name: "上传",
        path: "/UpLoad",
        component: UpLoad,
        type: "el-icon-upload"
    },
    {
        name: "Excel",
        path: "/Excel",
        type: "admin-icon-biaodanzujian-biaoge",
        children: [
            {
                name: "导入Excel",
                path: "/UpLoadExcel",
                component: UpLoadExcel
            },
            {
                name: "导出Excel",
                path: "/DownLoadExcel",
                component: DownLoadExcel
            },
        ]
    },
    {
        name: "多级菜单",
        path: "/Part",
        type: "admin-icon-youxupailie",
        children: [
            {
                name: "多级菜单1",
                path: "/Part1",
                children: [
                    {
                        name: "多级菜单1-1",
                        path: "/Part1_1",
                        component: Part1_1
                    },
                    {
                        name: "多级菜单1-2",
                        path: "/Part1_2",
                        component: Part1_2
                    }
                ]
            },
            {
                name: "多级菜单2",
                path: "/Part2",
                component: Part2
            },
        ]
    },
    {
        name: "友情链接",
        path: "/FriendLink",
        component: FriendLink,
        type: "el-icon-star-on"
    },
    {
        name: "拖动",
        path: "/Dragable",
        component: Dragable,
        type: "el-icon-star-on"
    }
]

export default router